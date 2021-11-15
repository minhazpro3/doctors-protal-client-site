import { useState,useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut ,onAuthStateChanged ,signInWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup,updateProfile,getIdToken  } from "firebase/auth";


// initializeFirebase App
initializeFirebase()


const useFirebase = ()=>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('')
    const [admin,setAdmin]=useState(false)
    const [token,setToken]=useState('')

    const registerUser = (email,password,history,name)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
          const newUser = {email, displayName: name}
          setUser(newUser)
          // send user to the database
          saveUser(email,name,'POST')
          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            
          });
        history.replace('/')
          })
          .catch((error) => {
           
            setAuthError( error.message);
            
            // ..
          })
          .finally(()=>setIsLoading(false));

    }

    const signinWithGoogle = (location,history)=>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT')
    setAuthError('')
    const destination = location?.state?.from || '/home'
    history.replace(destination)
  }).catch((error) => {
    setAuthError( error.message);
  }).finally(()=>setIsLoading(false));
    }

    const logOut = ()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
           
          }).catch((error) => {
            
          }).finally(()=>setIsLoading(false));
    }

            // Observe user state
        useEffect(()=>{
          const unsubscribe =   onAuthStateChanged(auth, (user) => {
                if (user) {
                 setUser(user)
                 getIdToken(user)
                 .then(idToken=>{
                  setToken(idToken);
                  
                 })
                } else {
                 setUser({})
                }
                setIsLoading(false)
              });
              return ()=> unsubscribe;
        },[])


        useEffect(()=>{
          fetch(`http://localhost:5000/users/${user.email}`)
          .then(res=>res.json())
          .then(data=>{
            
            setAdmin(data?.admin)})
        },[user.email])


        const LoginUser = (email,password ,location,history)=>{
          setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const destination = location?.state?.from || '/home'
              history.replace(destination)
              setAuthError('')
            })
            .catch((error) => {
              
              setAuthError( error.message);
            }).finally(()=>setIsLoading(false));
        }

          // save user
          const saveUser = (email,displayName,method)=>{
              const user= {email, displayName};
              fetch('http://localhost:5000/users', {
                method: method,
                headers: {
                  "content-type": "application/json"
                },
                body:JSON.stringify(user)
              })
              .then()
          }

          // useEffect(()=>{
          //   fetch(`http://localhost:5000/users/${user?.email}`)
          //   .then(res=>res.json())
          //   .then(data=>{
              
          //   })
          // },[user?.email])

    return {
        user,
        admin,
        token,
        registerUser,
        LoginUser,
        logOut,
        isLoading,
        authError,
        signinWithGoogle
    }

}
export default useFirebase;
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation ,useHistory} from 'react-router-dom';
import login from '../../images/login.png'
import useAuth from '../../Hooks/useAuth'

const Login = () => {

    const {isLoading,authError,LoginUser,user,signinWithGoogle}=useAuth()

    const [loginData,setLoginData]=useState({});
    

    const handleOnchange = e =>{
        const field =e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e =>{
        LoginUser(loginData.email, loginData.password,location,history)
        e.preventDefault()
        
    }


        const location = useLocation()
        const history = useHistory()



        const handleGoogleSignin = ()=>{
            signinWithGoogle(location,history)
        }


    return (
       <Container>
           <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
        <Typography variant="body1" component="h2">
        Login
        </Typography>;
        <form onSubmit={handleLoginSubmit}>

        <TextField 
        sx={{width: '75%',m:1}}
       required
        id="standard-basic"
         label="Your Email"
         name="email"
         onChange={handleOnchange}
          variant="standard" />

        <TextField 
        sx={{width: '75%', m:1}}
        required
        id="standard-basic"
        label="Your Password"
        name="password"
        onChange={handleOnchange}
          type="password" 
          variant="standard" />
        
        <Button sx={{width: '75%',m:1}} type="submit" variant="contained">Login</Button>
        <NavLink style={{textDecoration: 'none'}} to="/register"><Button variant="text"> New user? Please Register</Button>
            </NavLink>
        </form>
        {isLoading &&  <CircularProgress />}
        {user?.email && <Alert severity="success">User logged successfully!</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
        <p>-----------------------</p>
        <Button onClick={handleGoogleSignin} sx={{width: '75%',m:1}}  variant="contained">Google sign In</Button>
        </Grid>
        <Grid item xs={12} md={6    }>
            <img style={{width: '100%'}} src={login} alt="" />
        </Grid>
  
    </Grid>
       </Container>
    );
};

export default Login;
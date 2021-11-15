import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import register from '../../../images/login.png'
import useAuth from '../../../Hooks/useAuth'


const Register = () => {
   const {user,registerUser,isLoading,authError} = useAuth();
    const [loginData,setLoginData]=useState({});
    
    const history = useHistory();

    const handleOncBlur = e =>{
        const field =e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]=value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Password did not match')
            return
        }
        registerUser(loginData.email,loginData.password,history,loginData.name)
        e.preventDefault()
        
    }
    return (
        <Container>
           <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
        <Typography variant="body1" component="h2">
        Register
        </Typography>;
        {!isLoading && <form onSubmit={handleLoginSubmit}>

        <TextField 
        sx={{width: '75%',m:1}}
       required
        id="standard-basic"
         label="Your name"
         type="text "
         name="name"
         onBlur={handleOncBlur}
          variant="standard" />

        <TextField 
        sx={{width: '75%',m:1}}
       required
        id="standard-basic"
         label="Your Email"
         type="email"
         name="email"
         onBlur={handleOncBlur}
          variant="standard" />

        <TextField 
        sx={{width: '75%', m:1}}
        required
        id="standard-basic"
        label="Password"
        name="password"
        onBlur={handleOncBlur}
          type="password" 
          variant="standard" />
        <TextField 
        sx={{width: '75%', m:1}}
        required
        id="standard-basic"
        label="Confirm Password"
        name="password2"
        onBlur={handleOncBlur}
          type="password" 
          variant="standard" />
        
        <Button sx={{width: '75%',m:1}} type="submit" variant="contained">Register</Button>
        <NavLink style={{textDecoration: 'none'}} to="/login"><Button variant="text"> Already register? Please login</Button>
            </NavLink>
        </form>}

        {isLoading &&  <CircularProgress />}
        {user?.email && <Alert severity="success">User created successfully!</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}


        </Grid>
        <Grid item xs={12} md={6    }>
            <img style={{width: '100%'}} src={register} alt="" />
        </Grid>
  
    </Grid>
       </Container>
    );
};

export default Register;
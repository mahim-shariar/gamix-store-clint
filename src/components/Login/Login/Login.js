import { Grid } from '@mui/material';
import React, { useState } from 'react';
import './Login.css'
import Paper from '@mui/material/Paper';
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData] = useState({})
    const { logInUser, users, error, isLoading,signInWithGoogle } = useAuth(); 


    const location = useLocation();
    let history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle(location,history);
    }

    const handleLoginSubmit= e =>{
        logInUser(loginData.Email,loginData.Password,location,history)
        e.preventDefault();
    }
    return (
        <Grid container spacing={2} className='bg-img3'>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                {!isLoading ? <Paper elevation={10} >
                    <form style={{ padding: 50 }} onSubmit={handleLoginSubmit}>
                        <Typography variant='h6'>
                            Login
                        </Typography>
                        <TextField
                            required
                            id="standard-basic"
                            label="Your Email"
                            type='email'
                            onBlur={handleOnBlur}
                            name='Email'
                            variant="standard"
                            sx={{ width: 1, m: 1 }}
                        />
                        <br />
                        <TextField
                            id="standard-password-input"
                            label="Your Password"
                            type="password"
                            onBlur={handleOnBlur}
                            name='Password'
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ width: 1, m: 1 }}
                        />
                        <NavLink to='/registar' style={{ textDecoration: 'none' }} >
                            <Button variant='text' > New user ? please Registar </Button>
                        </NavLink>
                        <br />
                        {
                            error ? <Alert severity="error">{error} </Alert> : <div></div>
                        }
                        <br />
                        <Button onClick={handleLoginSubmit} variant='contained' sx={{ marginY: 2 }} > LogIn </Button>
                        <p className='text-center' >________________________________</p>
                        <Button onClick={handleGoogleSignIn} variant='contained' > Google+ </Button>
                    </form>
                    {
                        users.email && <Alert severity='success' > user Log In successfully </Alert>
                    }
                </Paper> : <CircularProgress sx={{ color: 'blue' }} />}
            </Grid>
        </Grid>
    );
};

export default Login;
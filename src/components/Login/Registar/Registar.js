import { Button, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registar = () => {
    const { RegistarUser, users, error, setError, isLoading } = useAuth(); 
    const [registarData, setRegistarData] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistarData = { ...registarData };
        newRegistarData[field] = value;
        setRegistarData(newRegistarData);
    }

    let history = useHistory() 

    const handleRegistarSubmit = e => {
        e.preventDefault();
        if (registarData.password !== registarData.VerifyPassword) {
            setError('Password did not match')
            return
        }
        else {
            RegistarUser(registarData.Email, registarData.VerifyPassword, registarData.name,history)
            console.log(users);
        }
    }
    return (
        <Grid container spacing={2} className='bg-img3' >
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                {!isLoading ? <Paper elevation={10} >
                    <form style={{ padding: 50 }} onSubmit={handleRegistarSubmit}>
                        <Typography variant='h6'>
                            Registar
                        </Typography>
                        <TextField
                            required
                            id="standard-basic"
                            label="Your Name"
                            type='text'
                            onBlur={handleOnBlur}
                            name='name'
                            variant="standard"
                            sx={{ width: 1, m: 1 }}
                        />
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
                            name='password'
                            autoComplete="current-password"
                            variant="standard"
                            sx={{ width: 1, m: 1 }}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Retype Password"
                            type="password"
                            onBlur={handleOnBlur}
                            name='VerifyPassword'
                            variant="standard"
                            sx={{ width: 1, m: 1 }}
                        />
                        <br />
                        {
                           error ? <Alert severity="error">{error} </Alert> : <div></div>
                        }
                        <br />
                        <Button onClick={handleRegistarSubmit} variant='contained' sx={{ marginY: 2 }} > LogIn </Button>
                        <br />
                        <NavLink to='/login' style={{ textDecoration: 'none' }} >
                            <Button variant='text'> Old user ? please Login </Button>
                        </NavLink>
                        <br />
                    </form>
                    {
                        users.email && <Alert severity='success' > user added successfully </Alert>
                    }
                </Paper> : <CircularProgress sx={{ color: 'blue' }} />}
            </Grid>
        </Grid>
    );
};

export default Registar;
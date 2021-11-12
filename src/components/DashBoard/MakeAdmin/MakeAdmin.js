import React, { useState } from 'react';
import { Alert, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false)

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email}
        fetch('http://localhost:8888/users/admin',{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true)
            }
        })
        e.preventDefault()
    }
    return (
        <div class='w-50 mx-auto App ' >
            <h1 className='text-light' > Make a Admin </h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            fullWidth
            id="outlined-basic" 
            type='email'
            onBlur={handleOnBlur}
            label="Email" 
            variant="outlined" 
            />
            <br />
            <Button sx={{marginY:1 , marginX:'auto' }}  variant='contained' onClick={handleAdminSubmit} > Make Admin </Button>
            </form>
            { success && <Alert severity='success'> Make Admin Successfully </Alert>}
        </div>
    );
};

export default MakeAdmin;
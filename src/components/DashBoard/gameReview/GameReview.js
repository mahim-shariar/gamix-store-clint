import { Grid, Paper, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const GameReview = () => {
    let { users } = useAuth();
    let [suc, setSuc] = useState(false)
    let Review = { name: users.displayName, email: users.email, review: '' }
    let [review, setReivew] = useState(Review)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newReview = { ...review };
        newReview[field] = value;
        setReivew(newReview);
    }
    const handleSubmit = e => {
        let allReviwes = {
            ...review,
            name: users.displayName,
            email: users.email
        }
        fetch('https://rocky-depths-49949.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allReviwes)
        })
            .then(res => res.json)
            .then(data => {
                setSuc(true)
            })
        e.preventDefault();
    }
    return (
        <Box className='w-75 App mx-auto ' >
            <Paper elevation={10} >
                <Typography variant='h3' className='text-center' sx={{ color: 'InfoText', paddingY: 2 }} >
                    Add a Review
                </Typography>
                <Grid xs={12}>
                    <form onSubmit={handleOnBlur} style={{ padding: '50px' }} >
                        <TextField
                            id="outlined-basic"
                            label="Your Name"
                            type='text'
                            name='name'
                            defaultValue={users.displayName}
                            variant="outlined"
                            onBlur={handleOnBlur}
                            sx={{ marginY: 1 }}
                            fullWidth
                        />
                        <br />
                        <TextField
                            id="outlined-basic"
                            type='email'
                            label="Your Email"
                            variant="outlined"
                            name='email'
                            defaultValue={users.email}
                            onBlur={handleOnBlur}
                            sx={{ marginY: 1 }}
                            fullWidth
                        />
                        <br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Your Review"
                            multiline
                            name='review'
                            rows={4}
                            onBlur={handleOnBlur}
                            fullWidth
                            sx={{ marginY: 2 }}
                        />
                        <br />
                        <Button variant='contained' onClick={handleSubmit} > Add Review </Button>
                    </form>
                </Grid>
                {suc && <Alert severity="success">Review Added Successfully</Alert>}
            </Paper>
        </Box>
    );
};

export default GameReview;
import { Alert, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';
import { Container } from 'react-bootstrap';

const Order = () => {
    let { users } = useAuth();
    let [game, setGame] = useState({})
    let [bookingSuc, setBookingSuc] = useState(false)
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:8888/games/${id}`)
            .then(res => res.json())
            .then(data => setGame(data))
    }, [id])
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newGameData = { ...game };
        newGameData[field] = value;
        setGame(newGameData);
    }
    const handleBookingSubmit = e => {
        let games = {
            name: users.displayName,
            title: game.title,
            price: game.price,
            email: users.email
        }
        fetch('http://localhost:8888/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(games)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuc(true)
                }
                console.log(data);
            })

        e.preventDefault();
    }
    return (
        <div className='bg-img3'>
            <Container className='d-flex' >
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <div>
                        <div className='game-card'>
                            <img src={game.thumbnail} alt="" />
                        </div>
                        <div className='description'>
                            <h5> {game.title} </h5>
                            <p>${game.price}</p>
                            <p> {game.short_description} </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                    <Paper elevation={10} >
                        <form style={{ padding: 50 }} onSubmit={handleBookingSubmit}>
                            <Typography variant='h6'>
                                Buy a Order
                            </Typography>
                            <TextField
                                required
                                id="standard-basic"
                                label="Name"
                                type='text'
                                onBlur={handleOnBlur}
                                name='name'
                                defaultValue={users.displayName}
                                variant="standard"
                                sx={{ width: 1, m: 1 }}
                            />
                            <br />
                            <TextField
                                id="standard-password-input"
                                label="Address"
                                type="text"
                                onBlur={handleOnBlur}
                                name='address'
                                variant="standard"
                                sx={{ width: 1, m: 1 }}
                            />
                            <br />
                            <TextField
                                required
                                id="standard-basic"
                                label="Your Email"
                                type='email'
                                onBlur={handleOnBlur}
                                defaultValue={users.email}
                                name='Email'
                                variant="standard"
                                sx={{ width: 1, m: 1 }}
                            />
                            <br />
                            <Button variant='contained' onClick={handleBookingSubmit} > Submit </Button>
                        </form>
                        {bookingSuc && <Alert severity="success"> This game Download SuccessFully </Alert>}
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default Order;
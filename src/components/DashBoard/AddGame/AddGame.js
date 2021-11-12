import { Container, Paper, TextField, Typography, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const AddGame = () => {
    let [addGame, setAddGame] = useState({})
    let [suc,setSuc] = useState(false)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newGameData = { ...addGame }
        newGameData[field] = value;
        setAddGame(newGameData);
    }
    let handleAddGame = e => {
        fetch('https://rocky-depths-49949.herokuapp.com/games', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addGame)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                setSuc(true)
            }
        })
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant='h2' className='text-center text-light '>
                Add a Games
            </Typography>
            <Paper elevation={10} >
                <form style={{ padding: 50 }} onSubmit={handleAddGame}>
                    <Typography variant='h6'>
                        Add a Game
                    </Typography>
                    <TextField
                        required
                        id="standard-basic"
                        label="Img Url"
                        type='text'
                        onBlur={handleOnBlur}
                        name='thumbnail'
                        variant="standard"
                        sx={{ width: 1, m: 1 }}
                    />
                    <TextField
                        required
                        id="standard-basic"
                        label="Game Title"
                        type='text'
                        onBlur={handleOnBlur}
                        name='title'
                        variant="standard"
                        sx={{ width: 1, m: 1 }}
                    />
                    <br />
                    <TextField
                        id="standard-password-input"
                        label="Game Price"
                        type="number"
                        onBlur={handleOnBlur}
                        name='price'
                        variant="standard"
                        sx={{ width: 1, m: 1 }}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Description"
                        type="text"
                        onBlur={handleOnBlur}
                        name='short_description'
                        variant="standard"
                        sx={{ width: 1, m: 1 }}
                    />
                    <br />
                    <Button onClick={handleAddGame} variant='contained' sx={{ marginY: 2 }} > Submit </Button>
                </form>
                {suc && <Alert severity='success' > Games added successfully </Alert>}
            </Paper>
        </Container>
    );
};

export default AddGame;
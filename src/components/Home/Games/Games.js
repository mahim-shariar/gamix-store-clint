import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Games.css'

const Games = () => {
    let [games, setGames] = useState([]);
    let size = 6;
    useEffect(() => {
        fetch(`http://localhost:8888/games?size=${size}`)
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    return (
        <div className=" bg-img1 " >
            <Typography variant='h2' sx={{marginY:5}} className='text-light text-center' >
                Most Popular Game
            </Typography>
            <div className='py-4 row container mx-auto '>
                {
                    games.map(game => <div key={game._id} className='mb-3 col-lg-4 flex-div col-md-6' >
                        <div className='game-card'>
                            <img src={game.thumbnail} alt="" />
                            <div className='description'>
                                <h5> {game.title} </h5>
                                <p> $ {game.price} </p>
                                <p> {game.short_description.slice(0, 50)} </p>
                                <Link to={`/review/${game._id}`} >
                                    <button className='btn-style2 btn px-4' > Buy </button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Games;
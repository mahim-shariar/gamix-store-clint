import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Sliders.css'
import Navbar from '../header/Header';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Sliders = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="//cdn.shopify.com/s/files/1/0355/9135/6553/files/slide2.png?v=1584689541)"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>battleground Game </h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <NavLink to='/allgames' >
                        <Button variant='contained' > Explore </Button>
                    </NavLink>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="//cdn.shopify.com/s/files/1/0355/9135/6553/files/slide1.png?v=1584689531)"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Horor Game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <NavLink to='/allgames' >
                        <Button variant='contained' > Explore </Button>
                    </NavLink>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0355/9135/6553/files/slideshow-v3.png?v=1586572785)"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Action Game</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <NavLink to='/allgames' >
                        <Button variant='contained' > Explore </Button>
                    </NavLink>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Sliders;
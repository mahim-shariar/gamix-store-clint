import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    let { users, logOut } = useAuth();
    return (
        <Navbar className='hd-img' >
            <Container>
                <NavLink className=' font-weight-bold nav-link text-light ' to='/home' > <h3> Gamix </h3></NavLink>
                <Nav className="ms-auto">
                    <NavLink className='nav-link text-bold text-light ' to="/home">Home</NavLink>
                    <NavLink className='nav-link text-bold text-light ' to="/allgames">All Games</NavLink>
                    { users.email && <NavLink className='nav-link text-bold text-light ' to="/dashboard">DashBoard</NavLink>}
                    {
                        users.email && <Typography variant='p' style={{ fontWeight: 500, color: 'white' }} className='my-auto' >{users.displayName}</Typography>
                    }
                    {
                        users.email ? <Button onClick={logOut} style={{ color: 'white' }} > Log Out </Button> : <NavLink   className='nav-link' style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                            Login
                        </NavLink>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
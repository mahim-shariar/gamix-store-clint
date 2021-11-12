import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-basic bg-img1 ">
            <footer>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <NavLink to='/home' className='nav-link text-light ' >
                            Home
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink to='/allgames' className='nav-link text-light ' >
                            All Games
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink to='/dashboard' className='nav-link text-light ' >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="list-inline-item">
                        <NavLink to='/login' className='nav-link text-light ' >
                            Login
                        </NavLink>
                    </li>
                </ul>
                <p className="copyright">Gamix © 2021</p>
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navigation">
            <ul>
                <li className='Logo'><NavLink to="/">B</NavLink></li>
                <li><NavLink to='/profil'>Profil</NavLink></li>
                <li><NavLink to='/'>Panier</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;
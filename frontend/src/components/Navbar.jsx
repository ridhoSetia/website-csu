import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/csu.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <>
            <div className="efek-garis-samping"></div>
            <nav>
                <div className="navbar-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo csu" />
                            <div className="name">
                                CyberSec <br /> Community <br /> Unmul
                            </div>
                        </Link>
                    </div>

                    <button className="navbar-toggle" onClick={toggleMenu}>
                        ☰
                    </button>

                    <ul className={isMenuOpen ? 'active' : ''}>
                        <li>
                            <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/achievements" className={isActive('/achievements')} onClick={() => setIsMenuOpen(false)}>
                                Achievement
                            </Link>
                        </li>
                        <li>
                            <Link to="/members" className={isActive('/members')} onClick={() => setIsMenuOpen(false)}>
                                Member
                            </Link>
                        </li>
                    </ul>

                    <a
                        href="https://discord.gg/3Tc5PZat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="join-discord"
                    >
                        <div className="text">
                            Join Our <br /> Discord
                        </div>
                        <i className="fab fa-discord"></i>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

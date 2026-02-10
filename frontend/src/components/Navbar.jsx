import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/csu.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav>
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="CSU Logo" />
                        <div className="name">CyberSec<br/>Community</div>
                    </Link>
                </div>

                <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={isMenuOpen ? 'active' : ''}>
                    <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link to="/achievements" className={isActive('/achievements')} onClick={() => setIsMenuOpen(false)}>Achievements</Link></li>
                    <li><Link to="/members" className={isActive('/members')} onClick={() => setIsMenuOpen(false)}>Members</Link></li>
                </ul>

                <a href="https://discord.gg/yourlink" target="_blank" rel="noreferrer" className="join-discord">
                    <span>Join Discord</span>
                    <i className="fab fa-discord"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
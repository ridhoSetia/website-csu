import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div className="hero-container">
                <div className="hero">
                    <h1>
                        Students Community Passionate <br /> About <mark>Ethical Hacking</mark>
                    </h1>
                    <div className="btn-hero">
                        <button className="btn-activity" onClick={() => navigate('/achievements')}>
                            Our Activity
                        </button>
                        <button className="btn-event" onClick={() => navigate('/webinar')}>
                            Daftar Webinar
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div className="hero-container">
                <div className="hero">
                    <span className="badge">CyberSec Community Unmul</span>
                    <h1>
                        Empowering The Next <br /> 
                        Generation of <mark>Ethical Hackers</mark>
                    </h1>
                    <p className="hero-subtitle">
                        Komunitas mahasiswa informatika yang berfokus pada pengembangan skill keamanan siber, eksploitasi etis, dan pertahanan digital.
                    </p>
                    <div className="btn-hero">
                        <button className="btn-activity" onClick={() => navigate('/achievements')}>
                            Lihat Pencapaian
                        </button>
                        <button className="btn-event" onClick={() => navigate('/webinar')}>
                            Ikuti Webinar
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Home;
import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-container">
                <div className="terminal-header">
                    root@csu:~# whoami
                </div>

                <div className="about-content">
                    <div className="about-text-section">
                        <div className="terminal-prompt">{'>'} system_info.txt</div>
                        <p className="about-description">
                            Cyber Security Community Universitas Mulawarman is a decentralized
                            collective of students passionate about ethical hacking, digital
                            defense, and system administration. We build, break, and learn together.
                        </p>
                        <div className="status-badge">[SYSTEM_ACTIVE]</div>
                    </div>

                    <div className="dashboard-section">
                        <div className="dashboard-title">System Status Dashboard</div>
                        <div className="dashboard-grid">
                            <div className="stat-card">
                                <div className="stat-label">Members Online</div>
                                <div className="stat-value">60+</div>
                                <div className="stat-icon heartbeat">●</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-label">Events Executed</div>
                                <div className="stat-value">1</div>
                                <div className="stat-icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>s
                            </div>

                            <div className="stat-card">
                                <div className="stat-label">System Status</div>
                                <div className="stat-value" style={{ fontSize: '24px' }}>
                                    ONLINE [STABLE]
                                </div>
                                <div className="waveform">
                                    <svg viewBox="0 0 100 20">
                                        <path
                                            d="M0,10 L10,10 L15,5 L20,15 L25,5 L30,15 L35,10 L100,10"
                                            strokeDasharray="5,5"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-label">Established</div>
                                <div className="stat-value">2025</div>
                                <div className="stat-icon">
                                    <i className="fas fa-server"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

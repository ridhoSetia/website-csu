import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
    // Render bars untuk visualisasi stabilitas
    const renderStabilityBars = () => {
        return Array.from({ length: 20 }).map((_, i) => (
            <div 
                key={i} 
                className="graph-bar" 
                style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
        ));
    };

    return (
        <div className="about-container">
            <div className="terminal-header">root@csu:~# whoami</div>
            <div className="terminal-header" style={{color: 'var(--text-dim)'}}>&gt; system_info.txt</div>
            
            <div className="about-glass-card">
                <p className="description-text">
                    Cyber Security Community Universitas Mulawarman is a decentralized collective
                    of students passionate about ethical hacking, digital defense, and 
                    system administration. We build, break, and learn together.
                </p>

                <div className="dashboard-grid">
                    <div className="stat-item">
                        <span className="stat-label">Members Online</span>
                        <div style={{fontSize: '24px', fontWeight: '700'}}>60+</div>
                    </div>

                    <div className="stat-item">
                        <span className="stat-label">Events Executed</span>
                        <div style={{fontSize: '24px', fontWeight: '700'}}>1</div>
                    </div>

                    {/* Integrated System Status & Visual Graph */}
                    <div className="stat-item" style={{gridColumn: 'span 2'}}>
                        <span className="stat-label">System Status</span>
                        <div className="status-stability-box">
                            <div className="status-text-row">
                                <div className="pulse-dot"></div>
                                ONLINE [STABLE]
                            </div>
                            <div className="visual-graph-container">
                                {renderStabilityBars()}
                            </div>
                        </div>
                    </div>

                    <div className="stat-item">
                        <span className="stat-label">Established</span>
                        <div style={{fontSize: '24px', fontWeight: '700'}}>2025</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
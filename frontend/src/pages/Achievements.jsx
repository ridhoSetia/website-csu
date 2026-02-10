import React from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
    return (
        <div className="achievements-container">
            <p className="terminal-header">root@csu:~# ls -l /achievements/</p>
            <h1 style={{fontSize: '48px', marginBottom: '40px'}}>ACHIEVEMENTS</h1>

            <div className="achievement-list">
                <div className="achievement-card">
                    <div className="medal-type medal-gold">GOLD</div>
                    <div className="achievement-info">
                        <h3>1ST PLACE</h3>
                        <p>NCS 2025 - Cluster Kalimantan [REGIONAL LEVEL]</p>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="medal-type medal-silver">SILVER</div>
                    <div className="achievement-info">
                        <h3>THE BEST PROVINCE</h3>
                        <p>NCS 2025 - Kalimantan Timur [PROVINCIAL LEVEL]</p>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="medal-type medal-green">GREEN</div>
                    <div className="achievement-info">
                        <h3>LOR NASA</h3>
                        <p>Acknowledged by NASA | Status: [LETTER OF RECOGNITION]</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
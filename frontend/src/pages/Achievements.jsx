import React from 'react';
import '../styles/Achievements.css';
import goldMedal from '../assets/gold-medal.png';
import silverMedal from '../assets/silver-medal.png';
import bugIcon from '../assets/bug-icon.png';

const Achievements = () => {
    const achievements = [
        {
            type: 'GOLD',
            tier: 'gold',
            badge: goldMedal,
            title: '1ST PLACE',
            event: 'NCS 2025 - Cluster Kalimantan',
            level: '[REGIONAL LEVEL]',
        },
        {
            type: 'SILVER',
            tier: 'silver',
            badge: silverMedal,
            title: 'THE BEST PROVINCE',
            event: 'NCS 2025 - Kalimantan Timur',
            level: '[PROVINCIAL LEVEL]',
        },
        {
            type: 'GREEN',
            tier: 'green',
            badge: bugIcon,
            title: 'LOR NASA',
            event: 'Acknowledged by NASA',
            level: 'Status: [LETTER OF RECOGNITION]',
        },
    ];

    return (
        <div className="achievements">
            <div className="achievements-container">
                <div className="achievements-header">
                    <div className="terminal-prompt-line">root@csu:~# ls -l /achievements/</div>
                    <h1 className="achievements-title">ACHIEVEMENTS</h1>
                </div>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div key={index} className={`achievement-card ${achievement.tier}`}>
                            <div className="achievement-badge">
                                <img src={achievement.badge} alt={achievement.type} />
                            </div>
                            <div className="achievement-type">{achievement.type}</div>
                            <h2 className="achievement-title">{achievement.title}</h2>
                            <p className="achievement-description">{achievement.event}</p>
                            <p className="achievement-meta">{achievement.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;

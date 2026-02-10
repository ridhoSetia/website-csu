import React from 'react';
import '../styles/Members.css';
import goldBadge from '../assets/gold-badge.png';
import silverBadge from '../assets/silver-badge.png';
import bronzeBadge from '../assets/bronze-badge.png';

const Members = () => {
    const members = [
        {
            name: 'MUHAMMAD FAWAZ SAPUTRA, S.T., M.ENG.',
            role: 'Dosen Pembimbing',
            period: 'Advisor',
            status: 'Aktif',
            tier: 'gold', // Gold untuk Dosen
            icon: goldBadge,
        },
        {
            name: 'MUHAMMAD KEVIN ADLI PRATAMA',
            role: 'Ketua Study Club',
            period: 'Angkatan 2023',
            status: 'Aktif',
            tier: 'gold', // Gold untuk Ketua
            icon: goldBadge,
        },
        {
            name: 'MUHAMMAD GHAZY DAFFA SAMPE',
            role: 'Wakil Ketua',
            period: 'Angkatan 2023',
            status: 'Aktif',
            tier: 'silver',
            icon: silverBadge,
        },
        {
            name: 'DIFTYA AZZAHRA',
            role: 'Sekretaris',
            period: 'Angkatan 2025',
            status: 'Aktif',
            tier: 'bronze',
            icon: bronzeBadge,
        },
        {
            name: 'GADIS WULANDARI',
            role: 'Bendahara',
            period: 'Angkatan 2024',
            status: 'Aktif',
            tier: 'bronze',
            icon: bronzeBadge,
        },
        {
            name: 'RIDHO SETIAWAN',
            role: 'Media & Publikasi',
            period: 'Angkatan 2024',
            status: 'Aktif',
            tier: 'bronze',
            icon: bronzeBadge,
        },
    ];

    return (
        <div className="members">
            <div className="members-container">
                <div className="members-header">
                    <div className="terminal-prompt-line">root@csu:~# ls -l /members/</div>
                    <h1 className="members-title">STRUCTURE & MEMBERS</h1>
                </div>

                <div className="members-grid">
                    {members.map((member, index) => (
                        <div key={index} className={`member-card ${member.tier}`}>
                            <img src={member.icon} alt={`${member.tier} shield`} className="shield-icon" />
                            <h2 className="member-name">{member.name}</h2>
                            <p className="member-role highlight">{member.role}</p>
                            <p className="member-period">{member.period}</p>
                            <div className="status-indicator">
                                <span className="status-dot"></span>
                                <p className="member-status">{member.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Members;

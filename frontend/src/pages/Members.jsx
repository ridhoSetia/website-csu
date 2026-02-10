import React from 'react';
import '../styles/Members.css';

const Members = () => {
    const members = [
        { name: "MUHAMMAD FAWAZ SAPUTRA, S.T., M.ENG.", role: "Dosen Pembimbing", batch: "Advisor", status: "Aktif" },
        { name: "MUHAMMAD KEVIN ADLI PRATAMA", role: "Ketua Study Club", batch: "Angkatan 2023", status: "Aktif" },
        { name: "MUHAMMAD GHAZY DAFFA SAMPE", role: "Wakil Ketua", batch: "Angkatan 2023", status: "Aktif" },
        { name: "DIFTYA AZZAHRA", role: "Sekretaris", batch: "Angkatan 2025", status: "Aktif" },
        { name: "GADIS WULANDARI", role: "Bendahara", batch: "Angkatan 2024", status: "Aktif" },
        { name: "RIDHO SETIAWAN", role: "Media & Publikasi", batch: "Angkatan 2024", status: "Aktif" }
    ];

    return (
        <div className="members-container">
            <p className="terminal-header">root@csu:~# ls -l /members/</p>
            <h1 style={{fontSize: '48px', marginBottom: '40px'}}>STRUCTURE & MEMBERS</h1>

            <div className="members-grid">
                {members.map((m, i) => (
                    <div className="member-card" key={i}>
                        <span className="member-role">{m.role}</span>
                        <h3>{m.name}</h3>
                        <div className="member-details">
                            <span>{m.batch}</span>
                            <span className="status-active">● {m.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;
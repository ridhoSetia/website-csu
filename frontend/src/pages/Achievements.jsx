import React, { useState } from 'react';
import '../styles/Achievements.css';
import juaraImg from '../assets/Juara_1_Cluster_kalimantan.jpeg';
import provinsiImg from '../assets/The_Best_Province.jpeg';
import nasaImg from '../assets/NASA.png';

const Achievements = () => {
    const [lightbox, setLightbox] = useState(null);

    const achievements = [
        {
            medal: 'GOLD',
            medalClass: 'medal-gold',
            title: '1ST PLACE',
            desc: 'NCS 2025 - Cluster Kalimantan [REGIONAL LEVEL]',
            img: juaraImg,
            alt: 'Juara 1 NCS 2025 Cluster Kalimantan',
        },
        {
            medal: 'SILVER',
            medalClass: 'medal-silver',
            title: 'THE BEST PROVINCE',
            desc: 'NCS 2025 - Kalimantan Timur [PROVINCIAL LEVEL]',
            img: provinsiImg,
            alt: 'The Best Province NCS 2025 Kalimantan Timur',
        },
        {
            medal: 'GREEN',
            medalClass: 'medal-green',
            title: 'LOR NASA',
            desc: 'Acknowledged by NASA | Status: [LETTER OF RECOGNITION]',
            img: nasaImg,
            alt: 'Letter of Recognition from NASA',
        },
    ];

    return (
        <div className="achievements-container">
            <p className="terminal-header">root@csu:~# ls -l /achievements/</p>
            <h1 style={{fontSize: '48px', marginBottom: '40px'}}>ACHIEVEMENTS</h1>

            <div className="achievement-list">
                {achievements.map((a, i) => (
                    <div className="achievement-card" key={i}>
                        <div className={`medal-type ${a.medalClass}`}>{a.medal}</div>
                        <div className="achievement-info">
                            <h3>{a.title}</h3>
                            <p>{a.desc}</p>
                        </div>
                        <div className="achievement-photo" onClick={() => setLightbox(a)}>
                            <img src={a.img} alt={a.alt} />
                            <span className="photo-hint">lihat foto</span>
                        </div>
                    </div>
                ))}
            </div>

            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setLightbox(null)}>&#215;</button>
                        <img src={lightbox.img} alt={lightbox.alt} />
                        <p>{lightbox.title} &mdash; {lightbox.desc}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievements;

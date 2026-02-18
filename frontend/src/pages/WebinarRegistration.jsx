import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WebinarRegistration.css';

const WebinarRegistration = () => {
    const navigate = useNavigate();

    return (
        <div className="webinar-registration">
            <div className="registration-container">
                <div className="terminal-prompt-line" style={{color: '#f5f5f7'}}>
                    root@csu:~# ./cek_status_pendaftaran.sh
                </div>

                <div className="registration-card closed-card">
                    <div className="closed-icon-wrapper">
                        <i className="fas fa-lock"></i>
                    </div>
                    
                    <h1 className="registration-title">Pendaftaran Ditutup</h1>
                    
                    <div className="status-message-box">
                        <p>
                            Maaf, kuota pendaftaran untuk webinar <strong>"INTRODUCTION TO SECURITY OPERATION CENTER (SOC) & WAZUH SIEM 2026"</strong> telah terpenuhi atau batas waktu pendaftaran telah berakhir.
                        </p>
                    </div>

                    <div className="form-footer">
                        <p>Tetap pantau media sosial kami untuk informasi webinar dan kegiatan menarik lainnya di masa mendatang.</p>
                    </div>

                    <button className="submit-button" onClick={() => navigate('/')}>
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WebinarRegistration;

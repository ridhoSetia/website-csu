import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/RegistrationSuccess.css';

const RegistrationSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, webinar, email } = location.state || {};

    return (
        <div className="registration-success-container">
            <div className="success-card">
                <div className="success-icon-wrapper">
                    <i className="fas fa-check"></i>
                </div>
                
                <h2>Pendaftaran Berhasil!</h2>
                <p>Terima kasih telah mendaftar. Detail instruksi dan link grup WhatsApp telah dikirimkan ke email Anda.</p>

                <div className="user-info-box">
                    <div className="info-item">
                        <div className="info-label">Nama Lengkap</div>
                        <div className="info-value">{name || '-'}</div>
                    </div>
                    <div className="info-item">
                        <div className="info-label">Webinar</div>
                        <div className="info-value">{webinar || '-'}</div>
                    </div>
                    <div className="info-item">
                        <div className="info-label">Email Konfirmasi</div>
                        <div className="info-value">{email || '-'}</div>
                    </div>
                </div>

                <button className="btn-back-home" onClick={() => navigate('/')}>
                    Kembali ke Beranda
                </button>
            </div>
        </div>
    );
};

export default RegistrationSuccess;
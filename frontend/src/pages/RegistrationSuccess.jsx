import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/RegistrationSuccess.css';

const RegistrationSuccess = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, webinar, email } = location.state || {};

    // Redirect to home if accessed directly without data
    React.useEffect(() => {
        if (!name || !webinar || !email) {
            navigate('/');
        }
    }, [name, webinar, email, navigate]);

    if (!name || !webinar || !email) {
        return null;
    }

    return (
        <div className="registration-success">
            <div className="success-container">
                <div className="terminal-prompt-line">root@csu:~# ./status_pendaftaran.sh</div>

                <div className="success-card">
                    <div className="success-icon">✓</div>

                    <h1 className="success-title">Pendaftaran Berhasil!</h1>

                    <p className="success-message">
                        Data Anda telah kami terima. Silakan cek email universitas Anda untuk detail dan link WhatsApp grup.
                    </p>

                    <div className="success-info">
                        <div className="info-row">
                            <span className="info-label">Nama:</span>
                            <span className="info-value">{name}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Email:</span>
                            <span className="info-value">{email}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Webinar:</span>
                            <span className="info-value">{webinar}</span>
                        </div>
                    </div>

                    <div className="email-notice">
                        <strong>Catatan Penting:</strong>
                        <ul style={{ textAlign: 'left', marginTop: '10px', paddingLeft: '20px' }}>
                            <li>Email konfirmasi akan dikirim dalam beberapa menit</li>
                            <li>Periksa folder spam jika tidak menerima email</li>
                            <li>Link WhatsApp grup terlampir dalam email konfirmasi</li>
                            <li>Simpan email tersebut untuk referensi Anda</li>
                        </ul>
                    </div>

                    <button className="back-button" onClick={() => navigate('/')}>
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSuccess;

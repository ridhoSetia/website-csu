import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/WebinarRegistration.css';
import dewabizLogo from '../assets/dewabiz.png';

const api = axios.create({
    baseURL: 'https://api.csu-community.id'
});

const WebinarRegistration = () => {
    const navigate = useNavigate();
    const [webinars, setWebinars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        nim: '',
        email: '',
        webinar: '',
    });

    useEffect(() => {
        const fetchWebinars = async () => {
            try {
                const response = await api.get('/api/webinar/list');
                if (response.data.success) {
                    setWebinars(response.data.data);
                }
            } catch (err) {
                console.error('Error fetching webinars:', err);
                setWebinars([
                    { id: 1, title: 'INTRODUCTION TO SECURITY OPERATION CENTER (SOC) & WAZUH SIEM 2026' },
                ]);
            }
        };
        fetchWebinars();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.name || !formData.nim || !formData.email || !formData.webinar) {
            setError('Semua field harus diisi');
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Format email tidak valid');
            setLoading(false);
            return;
        }

        try {
            const response = await api.post('/api/webinar/register', formData);
            if (response.data.success) {
                navigate('/webinar/success', {
                    state: {
                        name: formData.name,
                        webinar: formData.webinar,
                        email: formData.email,
                    }
                });
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError(err.response?.data?.message || 'Terjadi kesalahan saat memproses pendaftaran. Silakan coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="webinar-registration">
            <div className="registration-container">
                <div className="terminal-prompt-line" style={{ color: '#f5f5f7' }}>root@csu:~# ./daftar_webinar.sh</div>

                <div className="registration-card">
                    <h1 className="registration-title">Pendaftaran Webinar</h1>

                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nama Lengkap:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="input-field"
                                placeholder="Masukkan nama lengkap Anda"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nim" className="form-label">Nomor Telepon:</label>
                            <input
                                type="tel"
                                id="nim"
                                name="nim"
                                className="input-field"
                                placeholder="Masukkan nomor telepon"
                                value={formData.nim}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input-field"
                                placeholder="email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="webinar" className="form-label">Pilih Webinar:</label>
                            <select
                                id="webinar"
                                name="webinar"
                                className="input-field"
                                value={formData.webinar}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            >
                                <option value="">-- Pilih Webinar --</option>
                                {webinars.map((webinar) => (
                                    <option key={webinar.id} value={webinar.title}>
                                        {webinar.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="submit-button" disabled={loading}>
                            {loading && <span className="loading-spinner"></span>}
                            {loading ? 'Memproses...' : 'Kirim Pendaftaran'}
                        </button>
                    </form>

                    <div className="form-footer">
                        <p>Link WhatsApp grup akan dikirim ke email Anda setelah pendaftaran berhasil.</p>
                    </div>

                    <div className="sponsor">
                        <h3>Powered By</h3>
                        <a href="https://dewabiz.com/" target='_blank'>
                            <img src={dewabizLogo} alt="Dewabiz Logo" className='logo-dewabiz' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebinarRegistration;
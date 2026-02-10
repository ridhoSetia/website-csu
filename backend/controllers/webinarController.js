const emailService = require('../utils/emailService');

/**
 * Handle webinar registration
 */
const registerWebinar = async (req, res) => {
    try {
        const { name, nim, email, webinar } = req.body;

        // Validate required fields
        if (!name || !nim || !email || !webinar) {
            return res.status(400).json({
                success: false,
                message: 'Semua field harus diisi',
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Format email tidak valid',
            });
        }

        // Prepare data for email
        const registrationData = {
            name,
            nim,
            email,
            webinarTitle: webinar,
        };

        // Send confirmation email
        await emailService.sendWebinarConfirmation(registrationData);

        console.log(`[REGISTRATION_SUCCESS] ${name} (${nim}) - ${webinar}`);

        // Return success response
        res.status(200).json({
            success: true,
            message: 'Pendaftaran berhasil! Silakan cek email Anda untuk detail dan link WhatsApp grup.',
            data: {
                name,
                nim,
                webinar,
            },
        });
    } catch (error) {
        console.error('[REGISTRATION_ERROR]', error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan saat memproses pendaftaran. Silakan coba lagi.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
};

/**
 * Get available webinars
 */
const getWebinars = (req, res) => {
    const webinars = [
        {
            id: 1,
            title: 'INTRODUCTION TO SECURITY OPERATION CENTER (SOC) & WAZUH SIEM 2026',
            description: 'Pengenalan Security Operation Center dan implementasi Wazuh SIEM',
        },
    ];

    res.status(200).json({
        success: true,
        data: webinars,
    });
};

module.exports = {
    registerWebinar,
    getWebinars,
};

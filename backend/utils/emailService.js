const nodemailer = require('nodemailer');

// Create transporter using Gmail SMTP
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
};

/**
 * Send webinar registration confirmation email
 * @param {Object} data - Registration data
 * @param {string} data.name - Participant name
 * @param {string} data.email - Participant email
 * @param {string} data.nim - NIM/NIDN
 * @param {string} data.webinarTitle - Selected webinar title
 */
const sendWebinarConfirmation = async (data) => {
    const transporter = createTransporter();
    const emailTemplate = require('../templates/emailTemplate');

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: data.email,
        subject: '✅ Pendaftaran Webinar Berhasil - Cyber Security Community Unmul',
        html: emailTemplate.getConfirmationEmail(data),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`[EMAIL_SENT] Message sent to ${data.email}: ${info.messageId}`);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('[EMAIL_ERROR]', error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
};

module.exports = {
    sendWebinarConfirmation,
};

/**
 * Terminal-themed email template for webinar registration
 */
const getConfirmationEmail = (data) => {
    const { name, nim, webinarTitle } = data;
    const whatsappLink = process.env.WHATSAPP_GROUP_LINK || 'https://chat.whatsapp.com/YOUR_GROUP_LINK_HERE';

    return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pendaftaran Webinar Berhasil</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Courier New', monospace;
      background-color: #0a0e27;
      color: #00ff00;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: linear-gradient(135deg, #0f1419 0%, #1a1f35 100%);
      border: 2px solid #00ff00;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
      overflow: hidden;
    }
    .header {
      background: rgba(0, 255, 0, 0.1);
      padding: 20px;
      border-bottom: 2px solid #00ff00;
      text-align: center;
    }
    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #00ff00;
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
      margin-bottom: 10px;
    }
    .terminal-prompt {
      color: #00ff00;
      font-size: 14px;
      margin-bottom: 15px;
    }
    .content {
      padding: 30px;
    }
    .success-icon {
      text-align: center;
      font-size: 60px;
      margin-bottom: 20px;
    }
    .title {
      color: #00ff00;
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
    }
    .info-box {
      background: rgba(0, 255, 0, 0.05);
      border: 1px solid #00ff00;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 25px;
    }
    .info-row {
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px dashed rgba(0, 255, 0, 0.3);
    }
    .info-row:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .info-label {
      color: #00ffff;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .info-value {
      color: #ffffff;
      font-size: 16px;
    }
    .message {
      color: #ffffff;
      line-height: 1.8;
      margin-bottom: 25px;
      font-size: 14px;
    }
    .cta-button {
      display: block;
      width: 100%;
      max-width: 400px;
      margin: 0 auto 25px;
      padding: 15px 30px;
      background: linear-gradient(135deg, #00ff00 0%, #00cc00 100%);
      color: #000000;
      text-decoration: none;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      border-radius: 5px;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
      transition: all 0.3s ease;
    }
    .cta-button:hover {
      box-shadow: 0 0 30px rgba(0, 255, 0, 0.8);
      transform: translateY(-2px);
    }
    .footer {
      background: rgba(0, 255, 0, 0.05);
      padding: 20px;
      border-top: 2px solid #00ff00;
      text-align: center;
      color: #00ffff;
      font-size: 12px;
    }
    .status-indicator {
      color: #00ff00;
      font-weight: bold;
      margin-top: 15px;
    }
    .divider {
      border: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #00ff00, transparent);
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">[ CYBER SECURITY COMMUNITY UNMUL ]</div>
      <div class="terminal-prompt">root@csu:~# ./status_pendaftaran.sh</div>
    </div>
    
    <div class="content">
      <div class="success-icon">✓</div>
      
      <h1 class="title">Pendaftaran Berhasil!</h1>
      
      <div class="info-box">
        <div class="info-row">
          <div class="info-label">▸ Nama Lengkap:</div>
          <div class="info-value">${name}</div>
        </div>
        <div class="info-row">
          <div class="info-label">▸ NIM/NIDN:</div>
          <div class="info-value">${nim}</div>
        </div>
        <div class="info-row">
          <div class="info-label">▸ Webinar:</div>
          <div class="info-value">${webinarTitle}</div>
        </div>
      </div>
      
      <div class="message">
        Halo <strong>${name}</strong>,<br><br>
        
        Selamat! Data Anda telah kami terima dengan sukses. Terima kasih telah mendaftar untuk webinar <strong>"${webinarTitle}"</strong>.<br><br>
        
        Silakan bergabung dengan grup WhatsApp kami untuk mendapatkan informasi detail tentang webinar, jadwal, dan materi yang akan dibahas:
      </div>
      
      <a href="${whatsappLink}" class="cta-button">
        📱 Join WhatsApp Group
      </a>
      
      <hr class="divider">
      
      <div class="message" style="font-size: 13px; color: #999;">
        <strong style="color: #00ffff;">Catatan Penting:</strong><br>
        • Simpan pesan ini untuk referensi Anda<br>
        • Pastikan Anda sudah bergabung di grup WhatsApp sebelum hari H<br>
        • Jika ada kendala, hubungi kami melalui Discord atau email<br>
      </div>
    </div>
    
    <div class="footer">
      <div>Cyber Security Community Universitas Mulawarman</div>
      <div style="margin-top: 10px; color: #666;">
        "We build, break, and learn together"
      </div>
      <div class="status-indicator">[SYSTEM_ACTIVE]</div>
    </div>
  </div>
</body>
</html>
  `;
};

module.exports = {
    getConfirmationEmail,
};

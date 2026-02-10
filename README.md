# Cyber Security Community Unmul - Website

Website resmi untuk Cyber Security Community Universitas Mulawarman dengan tema terminal/hacker dan sistem pendaftaran webinar otomatis.

## 🚀 Features

- **Terminal/Hacker Theme** - Design modern dengan neon green/cyan colors dan glow effects
- **Responsive Design** - Mobile-first approach untuk semua devices
- **Webinar Registration** - Form pendaftaran dengan email otomatis
- **Email Integration** - Kirim link WhatsApp grup via email setelah pendaftaran
- **Multiple Pages** - Home, About, Members, Achievements, Webinar Registration

## 📁 Project Structure

```
website-csu/
├── backend/                 # Node.js + Express backend
│   ├── controllers/        # Request handlers
│   ├── routes/            # API routes
│   ├── templates/         # Email templates
│   ├── utils/             # Utility functions
│   ├── server.js          # Main server file
│   └── .env               # Environment variables
│
├── frontend/              # React frontend
│   ├── public/           # Static files
│   ├── src/
│   │   ├── assets/       # Images & resources
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── styles/       # CSS files
│   │   ├── App.js        # Main app component
│   │   └── index.js      # Entry point
│   └── package.json
│
└── img/                   # Original image assets
```

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gmail account for email service

### Backend Setup

```bash
cd backend
npm install
```

Configure `.env` file:
```env
PORT=3001
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=Cyber Security Unmul <your-email@gmail.com>
WHATSAPP_GROUP_LINK=https://chat.whatsapp.com/YOUR_GROUP_LINK
```

**Note**: Untuk Gmail, gunakan App Password, bukan password biasa. Generate di: https://myaccount.google.com/apppasswords

### Frontend Setup

```bash
cd frontend
npm install
```

## 🚀 Running the Application

### Development Mode

**Start Backend** (Terminal 1):
```bash
cd backend
npm run dev
```
Backend akan berjalan di http://localhost:3001

**Start Frontend** (Terminal 2):
```bash
cd frontend
npm start
```
Frontend akan berjalan di http://localhost:3000

### Production Build

**Build Frontend**:
```bash
cd frontend
npm run build
```

**Run Backend**:
```bash
cd backend
npm start
```

## 📌 API Endpoints

### Webinar Registration
- **POST** `/api/webinar/register`
  - Body: `{ name, nim, email, webinar }`
  - Response: Success message & email sent

### Get Webinars List
- **GET** `/api/webinar/list`
  - Response: Array of available webinars

### Health Check
- **GET** `/health`
  - Response: Server status

## 🎨 Pages

1. **Home** (`/`) - About us with system status dashboard
2. **About Us** (`/about`) - Same as home
3. **Members** (`/members`) - Team members with tiered badges
4. **Achievements** (`/achievements`) - Awards and recognitions
5. **Webinar Registration** (`/webinar`) - Registration form
6. **Success** (`/webinar/success`) - Confirmation page

## 🔐 Security Features

- Input validation on frontend and backend
- Email format validation
- CORS configuration
- Environment variables for sensitive data
- `.gitignore` for `.env` files

## 📧 Email Features

- HTML email template dengan tema terminal
- Automatic WhatsApp group link delivery
- Responsive email design
- Custom styling dengan neon green theme

## 🎨 Design Features

- **Fonts**: Share Tech Mono, Orbitron
- **Colors**: Neon green (#00ff00), Cyan (#00ffff)
- **Effects**: Glow, glassmorphism, animations
- **Components**: Cards, buttons, forms dengan terminal style
- **Animations**: Pulse, typing, scan, rotating effects

## 🐛 Troubleshooting

### Email tidak terkirim
- Pastikan App Password Gmail sudah benar
- Check EMAIL_USER dan EMAIL_PASSWORD di `.env`
- Enable "Less secure app access" jika diperlukan
- Periksa console untuk error messages

### Frontend tidak connect ke backend
- Pastikan backend running di port 3001
- Check CORS configuration di `server.js`
- Verify API URL di frontend components

### Dependencies error
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

## 📱 Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (responsive)

## 👥 Contact

Cyber Security Community Unmul
- Discord: [Add Discord link]
- Email: davinzlopez43@gmail.com

## 📄 License

© 2024 Cyber Security Community Universitas Mulawarman

---

**[SYSTEM_ACTIVE]** - We build, break, and learn together.

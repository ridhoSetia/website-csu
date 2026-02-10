import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Members from './pages/Members';
import Achievements from './pages/Achievements';
import WebinarRegistration from './pages/WebinarRegistration';
import RegistrationSuccess from './pages/RegistrationSuccess';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/webinar" element={<WebinarRegistration />} />
          <Route path="/webinar/success" element={<RegistrationSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

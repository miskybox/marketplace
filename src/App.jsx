// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ExperienceCategories from './components/experience-categories/ExperienceCategories';
import HeroSection from './components/heroSection/HeroSection';
import Footer from './components/footer/Footer';
import AuthForm from './components/login/AuthForm';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Layout con navbar y footer para todas las rutas */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/experience-categories" element={<ExperienceCategories />} />
          <Route path="/login" element={<AuthForm />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
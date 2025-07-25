import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import enFlag from "../assets/flags/en_flag.png";
import frFlag from "../assets/flags/fr_flag.png";


const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <div style={{ width: '100%', position: 'relative', zIndex: 51 }}>
      <nav className="font-outfit" style={{
        background: "#fff",
        boxShadow: "0 2px 12px 0 rgba(37,99,235,0.07)",
        padding: '10px 20px',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: '100%',
        maxWidth: '100vw',
      }}>
        <div style={{ fontFamily: 'Poppins, ui-sans-serif', fontWeight: 900, fontSize: 22, color: '#2563eb', letterSpacing: 1 }}>AffinityWise</div>
        <ul style={{ display: "flex", gap: 20, margin: 0, listStyle: "none" }}>
          <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#1e293b', fontWeight: isActive ? 700 : 500 })}>{t('navbar.home')}</NavLink></li>
          <li><NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#1e293b', fontWeight: isActive ? 700 : 500 })}>{t('navbar.about')}</NavLink></li>
          <li><NavLink to="/services" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#1e293b', fontWeight: isActive ? 700 : 500 })}>{t('navbar.services')}</NavLink></li>
          <li><NavLink to="/portfolio" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#1e293b', fontWeight: isActive ? 700 : 500 })}>{t('navbar.portfolio')}</NavLink></li>
          <li><NavLink to="/team" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#1e293b', fontWeight: isActive ? 700 : 500 })}>{t('navbar.team')}</NavLink></li>
          <li><NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? '#2563eb' : '#1e293b', fontWeight: isActive ? 700 : 500 })}>{t('navbar.contact')}</NavLink></li>
        </ul>
        <div style={{ display: "flex", gap: 10, marginLeft: '8px' }}>
          <img
            src={frFlag}
            alt="Français"
            style={{ width: 28, height: 20, cursor: "pointer", border: i18n.language === 'fr' ? '2px solid #2563eb' : '1px solid #e5e7eb', borderRadius: 3, boxShadow: i18n.language === 'fr' ? '0 0 6px #2563eb33' : 'none', transition: 'all 0.2s' }}
            onClick={() => changeLanguage('fr')}
          />
          <img
            src={enFlag}
            alt="English"
            style={{ width: 28, height: 20, cursor: "pointer", border: i18n.language === 'en' ? '2px solid #2563eb' : '1px solid #e5e7eb', borderRadius: 3, boxShadow: i18n.language === 'en' ? '0 0 6px #2563eb33' : 'none', transition: 'all 0.2s' }}
            onClick={() => changeLanguage('en')}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
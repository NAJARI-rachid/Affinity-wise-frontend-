import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher la navbar après 300px de défilement
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: '🏠', label: 'Accueil', path: '/', color: '#3B82F6', bgColor: '#EFF6FF' },
    { icon: '💼', label: 'Services', path: '/services', color: '#8B5CF6', bgColor: '#F3F4F6' },
    { icon: '🎨', label: 'Portfolio', path: '/portfolio', color: '#F59E0B', bgColor: '#FFFBEB' },
    { icon: '👥', label: 'Équipe', path: '/team', color: '#10B981', bgColor: '#ECFDF5' },
    { icon: '📧', label: 'Contact', path: '/contact', color: '#EF4444', bgColor: '#FEF2F2' },
  ];

  // Ne rien afficher si on n'a pas scrollé assez
  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
      }}
    >
      {/* Bouton pour afficher/masquer la navbar */}
      <button
        onClick={() => setShowNavbar(!showNavbar)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
          transition: 'all 0.3s ease',
          marginBottom: '20px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <span style={{ fontSize: '24px', color: 'white' }}>
          {showNavbar ? '✕' : '☰'}
        </span>
      </button>

      {/* Navbar qui s'affiche/masque */}
      {showNavbar && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'flex-end',
          }}
        >
          {navItems.map((item, index) => (
            <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '12px 20px',
                  background: item.bgColor,
                  borderRadius: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  minWidth: '160px',
                  border: `2px solid ${item.color}20`,
                  transform: 'translateX(20px)',
                  animation: `slideInRight 0.4s ease forwards ${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(0px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 25px -3px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(20px) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px -3px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = `${item.color}20`;
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}80 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 15px -3px ${item.color}40`,
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{item.icon}</span>
                </div>
                <span style={{ 
                  color: '#374151', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingNav;

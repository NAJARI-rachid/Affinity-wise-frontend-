import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageTest = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f3f4f6',
      borderRadius: '8px',
      margin: '20px',
      border: '2px solid #3b82f6'
    }}>
      <h3 style={{ color: '#1f2937', marginBottom: '16px' }}>Test des Traductions</h3>
      
      <div style={{ marginBottom: '16px' }}>
        <strong>Langue actuelle :</strong> {i18n.language}
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <strong>Test navbar.home :</strong> {t('navbar.home')}
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <strong>Test services.title :</strong> {t('services.title')}
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <strong>Test about.title :</strong> {t('about.title')}
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <strong>Test team.title :</strong> {t('team.title')}
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={() => changeLanguage('fr')}
          style={{
            padding: '8px 16px',
            backgroundColor: i18n.language === 'fr' ? '#3b82f6' : '#e5e7eb',
            color: i18n.language === 'fr' ? 'white' : '#374151',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Français
        </button>
        <button 
          onClick={() => changeLanguage('en')}
          style={{
            padding: '8px 16px',
            backgroundColor: i18n.language === 'en' ? '#3b82f6' : '#e5e7eb',
            color: i18n.language === 'en' ? 'white' : '#374151',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageTest;

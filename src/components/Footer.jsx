import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer style={{ background: '#2563eb', color: '#f8fafc', textAlign: 'center', padding: '32px 0', marginTop: 48 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', fontSize: 16 }}>
        © {new Date().getFullYear()} <span style={{ fontWeight: 700, color: '#f59e42' }}>AffinityWise</span>. {t('footer.rights', 'Tous droits réservés.')}
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center', gap: 18 }}>
          <a href="mailto:contact@affinitywise.com" style={{ color: '#f8fafc', fontSize: 22 }} title="Mail" target="_blank" rel="noopener noreferrer">✉️</a>
          <a href="https://www.linkedin.com" style={{ color: '#f8fafc', fontSize: 22 }} title="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
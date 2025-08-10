import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3 className="footer-title">AffinityWise</h3>
          <p className="footer-text">
            {t(
              'footer.about',
              "Nous sommes dédiés à transformer vos idées en projets concrets avec passion et expertise."
            )}
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-title">{t('footer.contact', 'Contactez-nous')}</h3>
          <ul className="footer-list">
            <li>
              <a href="mailto:contact@affinitywise.com" aria-label="Email">
                <img
                  src="public/mail.png"
                  alt="Email icon"
                  loading="lazy"
                />
                contact@affinitywise.com
              </a>
            </li>
            <li>
              <a href="tel:+33123456789" aria-label="Téléphone">
                <img
                  src="/public/telephone.png"
                  alt="Telephone icon"
                  loading="lazy"
                />
                +33 1 23 45 67 89
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/affinitywise"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="/public/in.png"
                  alt="LinkedIn icon"
                  loading="lazy"
                />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AffinityWise. {t('footer.rights', 'Tous droits réservés.')}
      </div>
    </footer>
  );
};

export default Footer;

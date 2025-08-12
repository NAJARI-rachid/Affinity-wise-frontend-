import React from "react";
import "./Footer.css";
import mailIcon from "/images/mail.png";
import linkedinIcon from "/images/in.png";
import phoneIcon from "/images/telephone.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Colonne 1 - Présentation */}
        <div>
          <h3>AffinityWise</h3>
          <p>
            Nous accompagnons vos projets IT, marketing digital, design et développement avec expertise et créativité.
          </p>
        </div>

        {/* Colonne 2 - Contact */}
        <div>
          <h3>Contact</h3>
          <div className="footer-social">
            <a href="mailto:contact@affinitywise.com">
              <img src='./images/mail.png' alt="Email" /> contact@affinitywise.com
            </a>
            <a href="tel:+33123456789">
              <img src ='./images/telephone.png' alt="Téléphone" /> +33 1 23 45 67 89
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <img src='./images/in.png' alt="LinkedIn" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Colonne 3 - Liens rapides */}
        <div>
          <h3>Liens rapides</h3>
          <a href="/">Accueil</a><br />
          <a href="/services">Services</a><br />
          <a href="/about">À propos</a><br />
          <a href="/contact">Contact</a>
        </div>

      </div>

      {/* Bas du footer */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} AffinityWise. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;

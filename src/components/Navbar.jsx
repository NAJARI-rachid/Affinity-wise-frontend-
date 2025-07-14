import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav style={{ background: "#eee", padding: 20 }}>
      <div>AffinityWise</div>
      <ul style={{ display: "flex", gap: 20, margin: 0, listStyle: "none" }}>
        <li><NavLink to="/">{t('navbar.home')}</NavLink></li>
        <li><NavLink to="/about">{t('navbar.about')}</NavLink></li>
        <li><NavLink to="/services">{t('navbar.services')}</NavLink></li>
        <li><NavLink to="/portfolio">{t('navbar.portfolio')}</NavLink></li>
        <li><NavLink to="/team">{t('navbar.team')}</NavLink></li>
        <li><NavLink to="/contact">{t('navbar.contact')}</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
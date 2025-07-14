import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-secondary text-center py-6 text-sm text-gray-600 border-t border-gray-200 mt-12">
      <div className="max-w-4xl mx-auto">
        © {new Date().getFullYear()} <span className="font-bold text-primary">AffinityWise</span>. {t('footer.rights', 'Tous droits réservés.')}
      </div>
    </footer>
  );
};

export default Footer; 
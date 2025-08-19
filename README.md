# 🚀 AffinityWise - Site Web Professionnel

> **Expertise IT au cœur de vos projets, la créativité en signature**

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Table des matières

- [À propos](#-à-propos)
- [🚀 Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies utilisées](#️-technologies-utilisées)
- [📁 Structure du projet](#-structure-du-projet)
- [⚡ Installation et démarrage](#-installation-et-démarrage)
- [🌐 Déploiement](#-déploiement)
- [📱 Pages et composants](#-pages-et-composants)
- [🎨 Personnalisation](#-personnalisation)
- [🤝 Contribution](#-contribution)
- [📄 Licence](#-licence)

## 🎯 À propos

**AffinityWise** est une agence digitale spécialisée dans l'expertise IT, le développement web, le design créatif et la production vidéo. Ce site web présente nos services, notre équipe et nos réalisations de manière moderne et professionnelle.

### ✨ Notre mission
Transformer vos idées en réalité digitale en combinant expertise technique et créativité pour créer des solutions exceptionnelles.

## 🚀 Fonctionnalités

### 🌟 **Interface utilisateur moderne**
- Design responsive et adaptatif
- Animations fluides et transitions élégantes
- Interface utilisateur intuitive et accessible
- Support multilingue (Français/Anglais)

### 📱 **Navigation intelligente**
- Menu de navigation responsive
- Système de routage React Router
- Boutons CTA fonctionnels sur toutes les pages
- Redirection automatique vers les formulaires de contact

### 🎨 **Sections principales**
- **Accueil** : Présentation de l'entreprise avec CTA
- **Services** : 6 services détaillés avec design moderne
- **Portfolio** : Projets avec filtres par catégorie
- **Équipe** : Présentation des membres de l'équipe
- **Contact** : Formulaires de devis et rendez-vous

### 📊 **Fonctionnalités avancées**
- Filtrage dynamique des projets
- Statistiques et métriques impressionnantes
- Formulaires de contact interactifs
- Design system cohérent

## 🛠️ Technologies utilisées

### **Frontend**
- **React 19.1.0** - Bibliothèque JavaScript pour interfaces utilisateur
- **Vite 7.0.4** - Outil de build ultra-rapide
- **React Router DOM 6.30.1** - Routage côté client
- **Tailwind CSS 3.4.17** - Framework CSS utilitaire

### **Internationalisation**
- **i18next 25.3.2** - Framework d'internationalisation
- **react-i18next 15.6.0** - Intégration React pour i18next

### **Animations et effets**
- **GSAP 3.13.0** - Animations JavaScript avancées
- **ScrollReveal 4.0.9** - Animations au scroll
- **Vanilla Tilt 1.8.1** - Effets 3D sur les éléments

### **Outils de développement**
- **ESLint 9.30.1** - Linting du code
- **PostCSS 8.5.6** - Traitement CSS avancé
- **Autoprefixer 10.4.21** - Préfixes CSS automatiques

## 📁 Structure du projet

```
affinitywise/
├── public/                    # Assets statiques
│   ├── images/               # Images du site
│   ├── About.jpg             # Image de la page À propos
│   ├── Header.jpg            # Image d'en-tête principale
│   └── vite.svg              # Logo Vite
├── src/                      # Code source
│   ├── components/           # Composants réutilisables
│   │   ├── Navbar.jsx        # Barre de navigation
│   │   ├── Footer.jsx        # Pied de page
│   │   └── LanguageTest.jsx  # Test de langue
│   ├── pages/                # Pages principales
│   │   ├── Home.jsx          # Page d'accueil
│   │   ├── Services.jsx      # Page des services
│   │   ├── Portfolio.jsx     # Page du portfolio
│   │   ├── Team.jsx          # Page de l'équipe
│   │   └── Contact.jsx       # Page de contact
│   ├── i18n/                 # Configuration multilingue
│   │   ├── i18n.js           # Configuration principale
│   │   └── locales/          # Fichiers de traduction
│   │       ├── en.json       # Traductions anglaises
│   │       └── fr.json       # Traductions françaises
│   ├── assets/               # Assets du projet
│   ├── App.jsx               # Composant principal
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles globaux
├── package.json              # Dépendances et scripts
├── vite.config.js            # Configuration Vite
├── tailwind.config.js        # Configuration Tailwind CSS
├── postcss.config.cjs        # Configuration PostCSS
└── README.md                 # Ce fichier
```

## ⚡ Installation et démarrage

### **Prérequis**
- Node.js (version 18.0.0 ou supérieure)
- npm ou yarn

### **1. Cloner le projet**
```bash
git clone https://github.com/votre-username/affinitywise.git
cd affinitywise
```

### **2. Installer les dépendances**
```bash
npm install
# ou
yarn install
```

### **3. Démarrer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible à l'adresse : `http://localhost:5173`

### **4. Scripts disponibles**
```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Construit le projet pour la production
npm run preview  # Prévisualise la version de production
npm run lint     # Vérifie la qualité du code
```

## 🌐 Déploiement

### **Build de production**
```bash
npm run build
```

### **Prévisualisation de la production**
```bash
npm run preview
```

### **Déploiement sur Vercel**
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement qu'il s'agit d'un projet Vite
3. Le déploiement se fera automatiquement à chaque push

### **Déploiement sur Netlify**
1. Connectez votre repository GitHub à Netlify
2. Configurez la commande de build : `npm run build`
3. Configurez le dossier de publication : `dist`

## 📱 Pages et composants

### **🏠 Page d'accueil (Home.jsx)**
- Header avec image de fond et titre principal
- Section de présentation avec animation
- Section des services avec cartes interactives
- Bouton CTA vers la page de contact

### **💼 Page des services (Services.jsx)**
- 6 services détaillés avec design moderne
- Filtres par catégorie
- Statistiques de l'entreprise
- Boutons CTA fonctionnels vers la page de contact

### **🎨 Page du portfolio (Portfolio.jsx)**
- Projets avec filtres dynamiques
- Cartes de projets avec statistiques
- Section CTA pour démarrer un projet
- Navigation vers la page de contact

### **👥 Page de l'équipe (Team.jsx)**
- Présentation des membres de l'équipe
- Informations de contact et expertise
- Section CTA pour collaboration
- Navigation vers contact et services

### **📧 Page de contact (Contact.jsx)**
- Formulaire de contact complet
- Champs pour devis et rendez-vous
- Validation des formulaires
- Confirmation d'envoi

## 🎨 Personnalisation

### **Modifier les couleurs**
Éditez `tailwind.config.js` pour personnaliser la palette de couleurs :
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        // Ajoutez vos couleurs personnalisées
      }
    }
  }
}
```

### **Modifier le contenu**
- **Services** : Éditez `src/pages/Services.jsx`
- **Portfolio** : Modifiez le tableau `projects` dans `src/pages/Portfolio.jsx`
- **Équipe** : Mettez à jour le tableau `teamMembers` dans `src/pages/Team.jsx`

### **Ajouter des langues**
1. Créez un nouveau fichier dans `src/i18n/locales/`
2. Ajoutez la langue dans `src/i18n/i18n.js`
3. Mettez à jour le composant de sélection de langue

### **Modifier les images**
Remplacez les images dans le dossier `public/` et mettez à jour les références dans le code.

## 🤝 Contribution

Nous accueillons les contributions ! Voici comment procéder :

### **1. Fork le projet**
### **2. Créez une branche pour votre fonctionnalité**
```bash
git checkout -b feature/AmazingFeature
```
### **3. Committez vos changements**
```bash
git commit -m 'Add some AmazingFeature'
```
### **4. Push vers la branche**
```bash
git push origin feature/AmazingFeature
```
### **5. Ouvrez une Pull Request**

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- **Email** : contact@affinitywise.com
- **Site web** : [www.affinitywise.com](https://www.affinitywise.com)
- **LinkedIn** : [AffinityWise](https://linkedin.com/company/affinitywise)

---

<div align="center">

**Développé avec ❤️ par l'équipe AffinityWise**

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC.svg)](https://tailwindcss.com/)

</div>

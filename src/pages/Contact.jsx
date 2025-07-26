import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setError(null);
    
    try {
      const response = await fetch('https://formspree.io/f/mayvlqen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "/mail.png",
      title: "Email",
      value: "contact@affinitywise.com",
      link: "mailto:contact@affinitywise.com",
      description: "Envoyez-nous un email"
    },
    {
      icon: "/telephone.png",
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      link: "tel:+33123456789",
      description: "Appelez-nous directement"
    },
    {
      icon: "/in.png",
      title: "LinkedIn",
      value: "AffinityWise",
      link: "https://www.linkedin.com/company/affinitywise",
      description: "Suivez-nous sur LinkedIn"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            {t('contact.title', 'Contactez-nous')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prêt à transformer votre vision en réalité ? Notre équipe d'experts est là pour vous accompagner dans votre projet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 font-poppins">
                Informations de contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                        <img 
                          src={info.icon} 
                          alt={info.title}
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <a 
                        href={info.link} 
                        target={info.title === "LinkedIn" ? "_blank" : "_self"}
                        rel={info.title === "LinkedIn" ? "noopener noreferrer" : ""}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-sm block"
                      >
                        {info.value}
                      </a>
                      <p className="text-gray-500 text-xs mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 font-poppins">
                Horaires d'ouverture
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-sm">Lundi - Vendredi</span>
                  <span className="font-semibold text-sm">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-sm">Samedi</span>
                  <span className="font-semibold text-sm">10h00 - 16h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Dimanche</span>
                  <span className="font-semibold text-sm">Fermé</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/10 rounded-lg">
                <p className="text-sm font-medium">
                  <strong>Réponse garantie sous 24h</strong> pour toutes vos demandes professionnelles.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-poppins">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Votre nom complet"
            required
          />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Sujet de votre message"
            required
          />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
            required
          />
              </div>

          <button
            type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-base transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  'Envoyer le message'
                )}
          </button>

          {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                  <div className="font-semibold">Message envoyé avec succès !</div>
                  <div className="text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</div>
                </div>
          )}

          {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                  <div className="font-semibold">Erreur</div>
                  <div className="text-sm mt-1">{error}</div>
                </div>
          )}
        </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              Prêt à commencer votre projet ?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Rejoignez les centaines d'entreprises qui nous font confiance pour transformer leurs idées en succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200">
                Demander un devis
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-gray-900 transition-all duration-200">
                Voir nos réalisations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

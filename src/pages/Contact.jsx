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
    <section className="max-w-5xl mx-auto py-12 px-4 animate-fadeIn">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-10 text-center">{t('contact.title', 'Contactez-nous')}</h2>
      <p className="mb-8 text-gray-600 text-center">{t('contact.intro', 'Prêt à transformer votre vision en réalité ? Notre équipe d\'experts est là pour vous accompagner dans votre projet.')}</p>
      
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informations de contact
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  style={{
                    boxShadow: '0 2px 8px 0 rgba(37,99,235,0.05)',
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                      <img 
                        src={info.icon} 
                        alt={info.title}
                        className="w-4 h-4 object-contain"
                        style={{ width: '16px', height: '16px' }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    <a 
                      href={info.link} 
                      target={info.title === "LinkedIn" ? "_blank" : "_self"}
                      rel={info.title === "LinkedIn" ? "noopener noreferrer" : ""}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 text-base block"
                    >
                      {info.value}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Horaires d'ouverture
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-base">Lundi - Vendredi</span>
                <span className="font-semibold text-base">9h00 - 18h00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-base">Samedi</span>
                <span className="font-semibold text-base">10h00 - 16h00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-base">Dimanche</span>
                <span className="font-semibold text-base">Fermé</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-base font-medium">
                <strong>Réponse garantie sous 24h</strong> pour toutes vos demandes professionnelles.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Envoyez-nous un message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
            required
          />
            </div>

          <button
            type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed text-white' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
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
      <div className="text-center mt-16">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à commencer votre projet ?
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Rejoignez les centaines d'entreprises qui nous font confiance pour transformer leurs idées en succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Demander un devis
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Voir nos réalisations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

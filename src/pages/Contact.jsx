import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    try {
      const response = await fetch('https://formspree.io/f/mayvlqen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 animate-fadeIn">
      <div
        className="bg-white shadow-card rounded-card p-10 max-w-xl w-full transition-all duration-300 animate-fadeIn"
        style={{ animationDelay: '0.1s', boxShadow: '0 4px 16px 0 rgba(37,99,235,0.08)' }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(37,99,235,0.18)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px 0 rgba(37,99,235,0.08)'}
      >
        <h2 className="text-4xl font-extrabold text-accent mb-6 text-center font-poppins">{t('contact.title', 'Contact')}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <input
            type="text"
            name="name"
            placeholder={t('contact.name', 'Nom')}
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-base bg-[#f8fafc] font-sans"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('contact.email', 'Email')}
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-base bg-[#f8fafc] font-sans"
            required
          />
          <textarea
            name="message"
            placeholder={t('contact.message', 'Votre message')}
            value={form.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-base bg-[#f8fafc] font-sans"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-accent hover:scale-105 transition-all duration-200 text-lg font-poppins"
            style={{ boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)' }}
          >
            {t('contact.send', 'Envoyer')}
          </button>
          {submitted && (
            <div className="text-green-600 mt-2 text-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>{t('contact.thanks', 'Merci pour votre message !')}</div>
          )}
          {error && (
            <div className="text-red-600 mt-2 text-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>{error}</div>
          )}
        </form>
        <div className="mt-8 text-center text-gray-600 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div>{t('contact.info', 'Vous pouvez aussi nous écrire à :')}</div>
          <a href="mailto:contact@affinitywise.com" className="text-primary font-semibold">contact@affinitywise.com</a>
          <div className="mt-2">+33 1 23 45 67 89</div>
          <div className="mt-2">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

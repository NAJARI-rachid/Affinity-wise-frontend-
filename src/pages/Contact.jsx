import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Ici, tu pourras intégrer EmailJS, Formspree, etc.
  };

  return (
    <section className="max-w-xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">{t('contact.title', 'Contact')}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white rounded shadow p-6">
        <input
          type="text"
          name="name"
          placeholder={t('contact.name', 'Nom')}
          value={form.name}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t('contact.email', 'Email')}
          value={form.email}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          required
        />
        <textarea
          name="message"
          placeholder={t('contact.message', 'Votre message')}
          value={form.message}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          rows={5}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          {t('contact.send', 'Envoyer')}
        </button>
        {submitted && (
          <div className="text-green-600 mt-2">{t('contact.thanks', 'Merci pour votre message !')}</div>
        )}
      </form>
      <div className="mt-8 text-center text-gray-600">
        <div>{t('contact.info', 'Vous pouvez aussi nous écrire à :')}</div>
        <a href="mailto:contact@affinitywise.com" className="text-blue-600">contact@affinitywise.com</a>
        <div className="mt-2">+33 1 23 45 67 89</div>
        <div className="mt-2">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

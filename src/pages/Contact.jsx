import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const [confirmation, setConfirmation] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation simple
    const { nom, prenom, email, message } = formData;
    if (!nom.trim() || !prenom.trim() || !email.trim() || !message.trim()) {
      alert("Merci de remplir tous les champs !");
      return;
    }

    // Ici tu peux envoyer les données à un serveur ou API
    // Pour l'exemple, on simule un envoi réussi

    setConfirmation(`Merci ${prenom} ${nom}, votre message a bien été envoyé !`);

    // Reset formulaire
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="page-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Envoyer</button>
      </form>

      {confirmation && <p className="confirmation">{confirmation}</p>}

      <style>{`
        .page-container {
          min-height: 100vh;
          background: #f5f7fa;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .form {
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: white;
          padding: 30px 25px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          border: 3px solid #222222;
        }

        .form input,
        .form textarea {
          padding: 12px 15px;
          font-size: 16px;
          border: 2px solid #222222;
          border-radius: 6px;
          resize: vertical;
          transition: border-color 0.3s;
        }

        .form input:focus,
        .form textarea:focus {
          border-color: #007BFF;
          outline: none;
        }

        .form button {
          padding: 12px 25px;
          font-size: 18px;
          background-color: #222222;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s;
          align-self: flex-start;
        }

        .form button:hover {
          background-color: #007BFF;
        }

        .confirmation {
          margin-top: 25px;
          font-size: 18px;
          color: #007BFF;
          font-weight: 600;
          text-align: center;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}

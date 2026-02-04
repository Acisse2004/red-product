import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // 1. États pour stocker les saisies
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // 2. Gestionnaire de changement générique
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 3. Gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    alert(`Tentative de connexion pour : ${formData.email}`);
  };

  return (
    <div className="login-screen">
      {/* Header avec Logo */}
      <div className="brand-container">
        <div className="logo-placeholder">
          {/* Remplace par <img src={logo} /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        </div>
        <h1 className="brand-title">RED PRODUCT</h1>
      </div>

      {/* Carte Blanche */}
      <div className="auth-card">
        <h2 className="auth-subtitle">Connectez-vous en tant que Admin</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-field">
            <input 
              type="email" 
              name="email"
              placeholder="E-mail" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-field">
            <input 
              type="password" 
              name="password"
              placeholder="Mot de passe" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="options-row">
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
              Gardez-moi connecté
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Se connecter
          </button>
        </form>
      </div>

      {/* Liens du bas */}
      <div className="extra-links">
        <a href="/forgot" className="link-yellow">Mot de passe oublié ?</a>
        <p className="signup-text">
          Vous n'avez pas de compte ? <a href="/signup" className="link-yellow-bold">S'inscrire</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
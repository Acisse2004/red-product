import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import Dashboard from './dashboard';
import HotelList from './HotelList';
import CreateHotel from './CreateHotel'; //AJOUT
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); 

  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  const handleForgotPassword = () => {
    setCurrentPage('forgot-password');
  };

  const handleBackToLogin = () => {
    setCurrentPage('login');
  };

  const handleGoToSignup = () => {
    setCurrentPage('signup');
  };

  /* =======================
     NAVIGATION DES PAGES
     ======================= */

  if (currentPage === 'dashboard') {
    return (
      <Dashboard
        onGoToHotels={() => setCurrentPage('hotels')}
        onLogout={handleLogout}
      />
    );
  }

  if (currentPage === 'hotels') {
    return (
      <HotelList
        onGoToDashboard={() => setCurrentPage('dashboard')}
        onCreateHotel={() => setCurrentPage('create-hotel')} // AJOUT
        onLogout={handleLogout}
      />
    );
  }

  // NOUVELLE PAGE : CRÉER UN HÔTEL
  if (currentPage === 'create-hotel') {
    return (
      <CreateHotel
        onBack={() => setCurrentPage('hotels')}
        onLogout={handleLogout}
      />
    );
  }

  // Page Mot de passe oublié
  if (currentPage === 'forgot-password') {
    return (
      <div className="login-container">
        <div className="logo-section">
          <span className="logo-icon"><FaBookmark /></span> 
          <span className="logo-text">RED PRODUCT</span>
        </div>

        <div className="login-card">
          <h2 className="forgot-password-title">Mot de passe oublié?</h2>
          <p className="forgot-password-description">
            Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
          </p>
          
          <form
            className="login-form"
            onSubmit={(e) => { 
              e.preventDefault(); 
              alert('Instructions envoyées ! Vérifiez votre boîte e-mail.');
              setCurrentPage('dashboard');
            }}
          >
            <input 
              type="email" 
              placeholder="Votre e-mail" 
              className="input-field" 
            />
            
            <button type="submit" className="login-button">
              Envoyer
            </button>
          </form>

          <div className="footer-links">
            <p className="back-to-login">
              Revenir à <span className="login-link" onClick={handleBackToLogin}>la connexion</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Page d'inscription
  if (currentPage === 'signup') {
    return (
      <div className="login-container">
        <div className="logo-section">
          <span className="logo-icon"><FaBookmark /></span> 
          <span className="logo-text">RED PRODUCT</span>
        </div>

        <div className="login-card">
          <p className="login-subtitle">Inscrivez-vous en tant que Admin</p>
          
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Inscription réussie !');
              setCurrentPage('login');
            }}
          >
            <input type="text" placeholder="Nom" className="input-field" />
            <input type="email" placeholder="E-mail" className="input-field" />
            <input type="password" placeholder="Mot de passe" className="input-field" />
            
            <div className="checkbox-container">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Accepter les termes et la politique</label>
            </div>

            <button type="submit" className="login-button">
              S'inscrire
            </button>
          </form>

          <div className="footer-links">
            <p className="signup-text">
              Vous avez déjà un compte? <span className="signup-link" onClick={handleBackToLogin}>Se connecter</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Page de connexion
  return (
    <div className="login-container">
      <div className="logo-section">
        <span className="logo-icon"><FaBookmark /></span> 
        <span className="logo-text">RED PRODUCT</span>
      </div>

      <div className="login-card">
        <p className="login-subtitle">Connectez-vous en tant que Admin</p>
        
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" placeholder="E-mail" className="input-field" />
          <input type="password" placeholder="Mot de passe" className="input-field" />
          
          <div className="checkbox-container">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Gardez-moi connecté</label>
          </div>

          <button type="submit" className="login-button">
            Se connecter
          </button>
        </form>

        <div className="footer-links">
          <a
            href="#"
            className="forgot-password"
            onClick={(e) => {
              e.preventDefault();
              handleForgotPassword();
            }}
          >
            Mot de passe oublié?
          </a>
          <p className="signup-text">
            Vous n'avez pas de compte? <span className="signup-link" onClick={handleGoToSignup}>S'inscrire</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

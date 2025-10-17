import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar-container">
      <div className="navbar glass-card">
        <Link to="/" className="nav-logo">
          GenCap
        </Link>
        <div className="nav-menu">
          {user ? (
            <div className="nav-user-info">
              <span className="nav-greeting">Hi, {user.username}</span>
              <button onClick={handleLogout} className="nav-button logout">
                Logout
              </button>
            </div>
          ) : (
            <div className="nav-links">
              <Link to="/login" className="nav-button">Login</Link>
              <Link to="/register" className="nav-button primary">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
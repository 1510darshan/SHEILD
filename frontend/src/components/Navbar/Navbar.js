import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Badge } from '../ui/Components';
import { roleLabels } from '../../data/users';
import './Navbar.css';

const publicLinks = [
  { path: '/', label: 'Home' },
  { path: '/awareness', label: 'Awareness' },
];

const authLinks = [
  { path: '/', label: 'Home' },
  { path: '/risk-map', label: 'Risk Map' },
  { path: '/data-insights', label: 'Data Insights' },
  { path: '/interventions', label: 'Interventions' },
  { path: '/awareness', label: 'Awareness' },
  { path: '/data-sources', label: 'Data Sources' },
];

function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = isAuthenticated ? authLinks : publicLinks;

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
              <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM16 11C17.6569 11 19 12.3431 19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 14C13 12.3431 14.3431 11 16 11ZM16 22C13.3333 22 11 20.5 11 18.5C11 17.5 13.5 17 16 17C18.5 17 21 17.5 21 18.5C21 20.5 18.6667 22 16 22Z" fill="white" />
            </svg>
          </div>
          <span className="navbar-brand-text">Gender Equity<br />Intelligence</span>
        </Link>

        <button
          className={`navbar-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-auth">
            {isAuthenticated ? (
              <div className="user-menu">
                <button
                  className="user-menu-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <div className="avatar">{user.name.charAt(0)}</div>
                  <div className="user-info-mini">
                    <span className="user-name">{user.name}</span>
                    <Badge variant={user.role === 'gov_admin' ? 'primary' : user.role === 'ngo_user' ? 'accent' : 'secondary'} size="sm">
                      {roleLabels[user.role]}
                    </Badge>
                  </div>
                </button>
                {dropdownOpen && (
                  <div className="user-dropdown">
                    <div className="dropdown-header">
                      <strong>{user.name}</strong>
                      <span>{user.email}</span>
                      {user.department && <p className="org-text">{user.department}</p>}
                      {user.organization && <p className="org-text">{user.organization}</p>}
                    </div>
                    <button onClick={handleLogout} className="dropdown-item text-danger">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="btn-login" onClick={() => setMobileOpen(false)}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

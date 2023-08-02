import React, { useState } from 'react';
import headerprofilephoto from '../../EducatorAssets/header-profile-photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header2({ className, showSearchBar }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`navbar0111 ${className} ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar-content">
          {showSearchBar && <input type="text" placeholder="Search Class, Documents, Activities..." className="search-bar" />}
        <div className="nav-items">

          <div className="nav-item">
            <FontAwesomeIcon icon={faSun} className="mode-icon" />
            <label className="switch">
              <input type="checkbox" onChange={handleModeToggle} checked={darkMode} />
              <span className="slider round"></span>
            </label>
            <FontAwesomeIcon icon={faMoon} className="mode-icon" />
            <FontAwesomeIcon icon={faBell} style={{ marginLeft: '17px' }} />
            <img src={headerprofilephoto} alt="Logo" className="img-profile-photo" />
            <div className="company-dropdown">
              <button className="nav-button buy-courses-company-button">▼</button>
              <div className="company-menu">
                <ul>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

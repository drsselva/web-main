import React from 'react';
import { Link } from 'react-router-dom'; 

export default function NavBar() {
  return (
    <header className="navbar01">
      <nav className="navbar-content">
        <div className="logo-brand">
          <div className="logo">
            <img src="https://www.gritdigitech.com/assets/img/logo-icon.png" alt="Logo" />
          </div>
          <div className="brand">
            <span className="brand-text">
              <span className="brand-highlight">GR</span><span>IT</span> <span className="brand-studies">Studies</span>
            </span>
          </div>
        </div>
        <div className="nav-items">
          <div className="nav-item">
            {/* <button className="nav-button">Logout</button> */}
            <Link to="/studentlogin" className="nav-button">
              Logout
            </Link>
          </div>
          {/* <div className="nav-item">
            <button className="buy-courses-company-button">Buy Courses</button>
          </div> */}
          {/* <div className="nav-item">
            <div className="company-dropdown">
              <button className="nav-button buy-courses-company-button">
                Company ▼
              </button>
              <div className="company-menu">
                <ul>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  );
}

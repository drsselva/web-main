import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'; 
=======
import { Link } from 'react-router-dom';
>>>>>>> a4a31bd811d870c582ea28027219264215d729e0

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
<<<<<<< HEAD
            {/* <button className="nav-button">Logout</button> */}
            <Link to="/studentlogin" className="nav-button">
              Logout
            </Link>
=======
          <Link to="/studentlogin" className="nav-button">
 Logout
</Link>
>>>>>>> a4a31bd811d870c582ea28027219264215d729e0
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

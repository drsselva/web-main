import React from "react";
import { Link } from 'react-router-dom';

const HeaderHero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h3 className="hero-learner">Learner Dashboard</h3>
          <p className="hero-para">
            Gritians possess an indomitable spirit . <br /> Earning success in the
            trenches through hard work
          </p>
        </div>
        <div className="home" >
          <Link to="/" style={{color:'white'}}>
              Home/
            </Link> Dashboard
          </div>
          
      </div>
    </div>
  );
};

export default HeaderHero;

import React from "react";
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> a4a31bd811d870c582ea28027219264215d729e0
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
<<<<<<< HEAD
        {/* <button className="home">Home</button> */}
        {/* <Link to="/" className="home">
              Home/ */}
          <div className="home" >
=======
        <div className="home" >
>>>>>>> a4a31bd811d870c582ea28027219264215d729e0
          <Link to="/" style={{color:'white'}}>
              Home/
            </Link> Dashboard
          </div>
<<<<<<< HEAD
=======
          
>>>>>>> a4a31bd811d870c582ea28027219264215d729e0
      </div>
    </div>
  );
};

export default HeaderHero;

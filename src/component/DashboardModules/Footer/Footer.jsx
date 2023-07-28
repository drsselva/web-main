import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCamera,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <p className="footer-left-email">
            Email :{" "}
            <a href="mailto:admin@gritdigitech.com" className="mobile">
              admin@gritdigitech.com
            </a>
          </p>
          <p className="footer-left-email">
            Mobile :{" "}
            <a href="tel:+918610342869" className="mobile">
              +91-8610342869
            </a>
          </p>
        </div>
        <div className="footer-right">
          <h4 className="Contact">Contact Us</h4>
          <p className="footer-right-social">
            <a href="https://www.twitter.com" className="AiOutlineTwitter">
              <AiOutlineTwitter />
            </a>
            <a href="https://www.instagram.com" className="AiOutlineTwitter">
              <AiOutlineInstagram />
            </a>
            <a href="https://www.linkedin.com" className="AiOutlineTwitter">
              <AiFillLinkedin />
            </a>
            <a href="https://www.youtube.com" className="AiOutlineTwitter">
              <AiFillYoutube />
            </a>
            <a href="https://www.example.com" className="AiOutlineTwitter">
              <AiOutlineCamera />
            </a>
          </p>
        </div>
      </div>
      <div className="Copyright">
        Copyright-2023 All Right Reserved By GRIT Digitech - Pvt Ltd
      </div>
    </div>
  );
};

export default Footer;

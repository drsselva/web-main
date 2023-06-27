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
            Email : <span className="mobile"> admin@gritdigitech.com</span>
          </p>
          <p className="footer-left-email">
            Mobile : <span className="mobile"> +91-8610342869</span>
          </p>
        </div>
        <div className="footer-right">
          <h4 className="Contact">Contact Us</h4>
          <p className="footer-right-social">
            <span className="AiOutlineTwitter">
              <AiOutlineTwitter />
            </span>
            <span className="AiOutlineTwitter">
              <AiOutlineInstagram />
            </span>
            <span className="AiOutlineTwitter">
              <AiFillLinkedin />
            </span>
            <span className="AiOutlineTwitter">
              <AiFillYoutube />
            </span>
            <span className="AiOutlineTwitter">
              <AiOutlineCamera />
            </span>
          </p>
        </div>
      </div>
      <p className="Copyright">
        Copyright-2023 All Right Reserved By GRIT Digitech - Pvt Ltd
      </p>
    </div>
  );
};

export default Footer;

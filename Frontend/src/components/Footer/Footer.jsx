import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quam  corporis excepturi repudiandae recusandae minima ipsam voluptatibus ratione explicabo modi.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook-icon"/>
            <img src={assets.twitter_icon} alt="twitter-icon" />
            <img src={assets.linkedin_icon} alt="linkedin icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92 305-7089590</li>
            <li>zahoorabbas762@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright2024&copy; Tomato.com-All Right Reserved.</p>
    </div>
  );
};

export default Footer;

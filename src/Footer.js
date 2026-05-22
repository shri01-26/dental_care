import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Office */}
        <div className="footer-col">
          <h4>Office</h4>
          <p>Second Floor, Aishwarya Chamber 1</p>
          <p>Telibandha</p>
          <p>Raipur, Chhattisgarh 492001</p>
          <p className="phone">(905) 788-5555</p>
        </div>

        {/* Services */}
        <div className="footer-col hide-mobile">
          <h4>Services</h4>
          <ul>
            <p>General Dentistry</p>
            <p>Root Canal Treatment</p>
            <p>Surgical Care</p>
            <p>Root Canals</p>
            <p>Tooth Extractions</p>
            <p>Orthodontic Treatment</p>
            <p>Invisalign</p>
          </ul>
        </div>

        {/* Practice */}
        <div className="footer-col hide-mobile">
          <h4>Practice</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Reviews & Social */}
      
<div className="footer-col">
  <h4>Review Us</h4>
  <ul>
    <li>
      <a
        href="https://www.google.com/maps/place/?q=place_id:ChIJIf2lyDvdKDoRdvI8ohGdcMk&review=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Reviews
      </a>
    </li>

    <li>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </li>
  </ul>


          <h4 className="social-title">Social</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © Eterna Clinic 2026 | <span>Privacy Policy</span> |{" "}
          <span>Accessibility Statement</span>
        </p>

        <p className="footer-credit">
          Dental Web Design by{" "}
          <a
            href="https://yashvitech.com/career"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yashvitech Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

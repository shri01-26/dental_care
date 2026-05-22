import React from "react";
import "./Team.css";

import doc1 from "./doctor1.jpg";
import doc2 from "./doctor2.jpg";
import doc3 from "./doctor3.jpg";

import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Team = () => {
  return (
    <div className="team-cards">

      {/* Card 1 */}
      <div className="team-card">
        <div className="image-wrapper">
          <img src={doc1} alt="Dental Surgeon" />
        </div>

        <div className="card-info">
          <span className="role">Dental Surgeon</span>
          <h4>Audrey Button</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="card-social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://plus.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="team-card">
        <div className="image-wrapper">
          <img src={doc2} alt="Dental Surgeon" />
        </div>

        <div className="card-info">
          <span className="role">Dental Surgeon</span>
          <h4>Emma Beckett</h4>
          <p>Vivamus sapien ligula, tempus ac ipsum ac.</p>

          <div className="card-social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer">
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="team-card">
        <div className="image-wrapper">
          <img src={doc3} alt="Dentist" />
        </div>

        <div className="card-info">
          <span className="role">Dentist</span>
          <h4>Hellen Hill</h4>
          <p>Donec varius libero tortor, eu luctus ipsum aliquet.</p>

          <div className="card-social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer">
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Team;

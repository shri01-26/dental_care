import React from "react";
import "./DentalTeam.css";
import doctor from "./doctor.jpg";import { FaWhatsapp } from "react-icons/fa";



const DentalTeam = () => {
  return (
    <section className="team-section">
      <div className="team-container">

        {/* Left Content */}
        <div className="team-content">
          <span className="doctor-name">Dr Ritu Gupta</span>

          <h2 className="team-title">YOUR DENTAL TEAM</h2>

          <p className="team-text">
            Dr. Ritu Gupta is dedicated to providing her patients with the
            most beautiful smile together with the best dental protection
            available nowadays.
          </p>
        </div>

        {/* Right Image */}
        <div className="team-image">
          <img src={doctor} alt="doctor" />
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/8966063343"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </section>
  );
};

export default DentalTeam;

import React, { useEffect } from "react";
import "./About.css";
import aboutImg from "./about-dental.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // ✅ PAGE LOAD / ROUTE CHANGE PE SCROLL TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-page">

      <div className="about-bg"></div>

      <div className="about-hero">
        <h1>
          About <span>Eterna Clinic</span>
        </h1>
        <p>
          Dedicated to creating healthy, confident smiles with modern dentistry.
        </p>
      </div>

      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="Dental Clinic" />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>

          <p>
            At <strong>Eterna Clinic</strong>, located in Telibandha, Raipur,
            we provide modern, painless, and ethical dental care for all ages.
          </p>

          <p>
            Our clinic combines advanced technology, experienced professionals,
            and a patient-first approach to deliver confident smiles.
          </p>

          <ul className="about-points">
            <li>✔ Advanced dental technology</li>
            <li>✔ Experienced & caring professionals</li>
            <li>✔ Hygienic and modern clinic</li>
            <li>✔ Patient-first approach</li>
          </ul>

          {/* ✅ Button Navigation */}
          <button
            className="about-btn"
            onClick={() => navigate("/appointment")}
          >
            Book an Appointment
          </button>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8966063343"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

    </section>
  );
};

export default About;

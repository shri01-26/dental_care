import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "./Services";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div style={{ textAlign: "center", marginTop: "120px" }}>
        <h2>Service Not Found</h2>
        <Link to="/services" className="back-btn">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="service-detail">

      {/* HERO SECTION */}
      <div
        className="service-hero"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-text">
          <h1>{service.title}</h1>
          <p className="hero-desc">{service.desc}</p>

          <h3>About the Treatment</h3>
          <p>
            {service.details ||
              "This treatment is performed using modern dental technology to ensure comfort, safety, and long-lasting results. Our experienced dentists focus on pain-free procedures and personalized care for every patient."}
          </p>

          <h3>Why Choose This Treatment?</h3>
          <ul>
            <li>Pain-free advanced procedure</li>
            <li>Experienced dental specialists</li>
            <li>Modern equipment & hygiene standards</li>
            <li>Affordable & transparent pricing</li>
          </ul>

          <div className="detail-actions">
            <a
              href={`https://wa.me/8966063343?text=Hello, I want to know more about ${service.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>

            <Link to="/appointment" className="book-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServiceDetail;

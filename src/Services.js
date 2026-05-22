import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import service1 from "./service1.jpg";
import service2 from "./service2.jpg";
import service3 from "./service3.jpg";
import service4 from "./service4.jpg";
import service5 from "./service5.jpg";
import service6 from "./service6.jpg";
import service7 from "./service7.jpg";
import service8 from "./service8.jpg";
import service9 from "./service9.jpg";
import service10 from "./service10.jpg";
import service11 from "./service11.jpg";
import service12 from "./service12.jpg";
import service13 from "./service13.jpg";
import service14 from "./service14.jpg";
import { FaWhatsapp } from "react-icons/fa";

export const services = [
  { title: "General Dentistry", slug: "general-dentistry", category: "General", image: service1, desc: "Complete oral health care including cleaning, fillings, and routine checkups." },
  { title: "Root Canal Treatment", slug: "root-canal-treatment", category: "Endodontics", image: service2, desc: "Pain-free root canal treatments using advanced dental technology." },
  { title: "Orthodontics & Braces", slug: "orthodontics-braces", category: "Orthodontics", image: service3, desc: "Metal, ceramic braces and Invisalign for perfect smile alignment." },
  { title: "Cosmetic Dentistry", slug: "cosmetic-dentistry", category: "Cosmetic", image: service4, desc: "Smile makeover, teeth whitening, veneers, and aesthetic treatments." },
  { title: "Dental Implants", slug: "dental-implants", category: "Surgery", image: service5, desc: "Permanent, natural-looking tooth replacement solutions." },
  { title: "Emergency Dental Care", slug: "emergency-dental-care", category: "Emergency", image: service6, desc: "Immediate treatment for pain, trauma, infections, and dental emergencies." },
  { title: "Teeth Whitening", slug: "teeth-whitening", category: "Cosmetic", image: service7, desc: "Professional whitening for a brighter, stain-free smile." },
  { title: "Pediatric Dentistry", slug: "pediatric-dentistry", category: "Kids", image: service8, desc: "Gentle dental care specially designed for children and teens." },
  { title: "Wisdom Tooth Removal", slug: "wisdom-tooth-removal", category: "Surgery", image: service9, desc: "Safe and comfortable extraction of impacted wisdom teeth." },
  { title: "Gum Disease Treatment", slug: "gum-disease-treatment", category: "Periodontics", image: service10, desc: "Advanced periodontal therapy for healthy gums and teeth support." },
  { title: "Smile Makeover", slug: "smile-makeover", category: "Cosmetic", image: service11, desc: "Customized cosmetic plans to transform your smile completely." },
  { title: "Dental Crowns & Bridges", slug: "dental-crowns-bridges", category: "Restorative", image: service12, desc: "Restore damaged or missing teeth with durable dental crowns and bridges." },
  { title: "Full Mouth Rehabilitation", slug: "full-mouth-rehabilitation", category: "Restorative", image: service13, desc: "Comprehensive restoration for function, aesthetics, and oral health." },
  { title: "Preventive Dentistry", slug: "preventive-dentistry", category: "General", image: service14, desc: "Regular checkups, cleanings, and fluoride treatments to prevent issues." },
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ PAGE LOAD PE SCROLL TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.2}s`;
    });
  }, [selectedCategory]);

  const categories = ["All", ...new Set(services.map(s => s.category))];

  const featuredService =
    selectedCategory === "All"
      ? null
      : services.find(s => s.category === selectedCategory);

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter(s => s.category === selectedCategory && s !== featuredService);

  return (
    <section className="services-page">
      {/* Header */}
      <div className="services-header">
        <h1>Our <span>Dental Services</span></h1>
        <p>Comprehensive dental care designed for comfort, precision, and confidence.</p>
      </div>

      {/* Filter */}
      <div className="services-filter">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featuredService && (
        <div className="featured-service">
          <div className="service-card">
            <div className="service-img">
              <img src={featuredService.image} alt={featuredService.title} />
            </div>
            <div className="service-content">
              <h3>{featuredService.title} (Featured)</h3>
              <p>{featuredService.desc}</p>

              <Link to={`/services/${featuredService.slug}`} className="learn-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="services-grid">
        {filteredServices.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-img">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <Link to={`/services/${service.slug}`} className="learn-btn">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/8966063343"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Services;

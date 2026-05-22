import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  // --- Track cursor position (optional) ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mouse move listener with cleanup
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="contact-wrapper">
      {/* --- Contact Hero Section --- */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <span className="gold-tag">Get In Touch</span>
          <h1 className="contact-title">
            Begin Your Journey to a <br />
            <span className="gold-italic">Radiant Smile.</span>
          </h1>
        </div>
      </motion.section>

      {/* --- Contact Info & Form --- */}
      <div className="container">
        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contact-info">
            <motion.div variants={itemVariants} className="info-card">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4>Visit Us</h4>
                <p>Second Floor, Aishwarya Chamber 1, Telibandha<br />Raipur, Chhattisgarh 492001</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="info-card">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h4>Call for Inquiry</h4>
                <p>+91 93900 35568</p>
                <p>040 2345 6789</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="info-card">
              <div className="info-icon"><Clock size={24} /></div>
              <div>
                <h4>Clinic Hours</h4>
                <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                <p className="gold-text">Sunday: Emergency Only</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="contact-form-container">
            <form className="luxury-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="input-group">
                <select>
                  <option>Select Procedure</option>
                  <option>Porcelain Veneers</option>
                  <option>Hollywood Smile</option>
                  <option>Implant Surgery</option>
                  <option>Teeth Whitening</option>
                </select>
              </div>
              <div className="input-group">
                <textarea placeholder="Tell us about your dental goals..." rows="5"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="submit-btn"
              >
                Request Concierge Call
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* --- Map Section --- */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="Eterna Clinic Raipur Location"
            src="https://www.google.com/maps?q=Eterna+Clinic+Raipur&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* --- WhatsApp Floating Button --- */}
      <a
        href="https://wa.me/8966063343"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default Contact;
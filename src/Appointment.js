import React, { useState } from "react";
import "./Appointment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp } from "react-icons/fa";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    doctor: "Dr. Ritu Gupta",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Success! Appointment requested for ${formData.name}. We will call you soon.`
    );
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">

        {/* Left Side */}
        <div className="appointment-info-side">
          <span className="badge-new">Priority Booking</span>

          <h1>
            Ready for your <br />
            <span className="teal-text">New Smile?</span>
          </h1>

          <p>
            Book your slot in less than 60 seconds. Our team will contact you for
            confirmation.
          </p>

          {/* CONTACT MINI CARDS */}
          <div className="contact-mini-cards">
            <div className="mini-c">
              <span className="icon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <div>
                <h4>Emergency Call</h4>
                <p>+91 8966063343</p>
              </div>
            </div>

            <div className="mini-c">
              <span className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <div>
                <h4>Location</h4>
                <p>Dr. Ritu Gupta, Raipur, Chhattisgarh</p>
              </div>
            </div>
          </div>

          {/* DOCTOR BADGE */}
          <div className="doctor-badge-appointment">
            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=150&auto=format&fit=crop"
              alt="Dr. Ritu"
            />
            <div>
              <strong>Dr. Ritu Gupta</strong>
              <p>Available Today ✅</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="appointment-form-side">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                required
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Select Service</label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option>Routine Checkup</option>
                  <option>Smile Design</option>
                  <option>Implants</option>
                  <option>Invisalign</option>
                  <option>Root Canal</option>
                </select>
              </div>

              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>

            <button type="submit" className="submit-booking-btn">
              Confirm Appointment Now
            </button>

            <p className="secure-text">🔒 Your data is 100% secure with us.</p>
          </form>
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
    </div>
  );
};

export default Appointment;

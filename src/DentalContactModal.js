import React, { useState } from "react";
import "./DentalContactModal.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbzJk-OZkL2JC_tyHyoJEq74X4uE8nBr5j4KuYb8N-lcXb5YY6Aby_ndaxh_PUewy4JHeg/exec";

const DentalContactModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (loading) return;

  setLoading(true);

  try {
    const form = new URLSearchParams();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("concern", formData.concern);

    const response = await fetch(API_URL, {
      method: "POST",
      body: form,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.data || "Submission failed");
    }

    alert("Appointment request submitted successfully!");

    setFormData({ name: "", email: "", phone: "", concern: "" });
    onClose();

  } catch (error) {
    console.error(error);
    alert("Submission failed. Check your spreadsheet ID, sheet name, and deployment.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <button className="modal-close" onClick={onClose}>×</button>

        {/* LEFT */}
        <div className="modal-left">
          <h2>FREE DENTAL CONSULTATION</h2>
          <p>Your smile is our priority</p>
          <ul>
            <li>✔ Complete dental checkup</li>
            <li>✔ Smile correction advice</li>
            <li>✔ Painless treatment options</li>
            <li>✔ Expert dental care</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="modal-right">
          <h3>Your concern</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="concern"
              placeholder="Your Concern"
              value={formData.concern}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Contact Us"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default DentalContactModal;

import React, { useState } from "react";
import "../styles/Patients.css";

const Patients = () => {
  const [openPatient, setOpenPatient] = useState(null);
  const [status, setStatus] = useState("Pending");

  const patients = [
    {
      id: 1,
      name: "Amit Sharma",
      phone: "9876543210",
      service: "Root Canal",
      date: "12 Feb 2026",
      status: "Completed",
    },
    {
      id: 2,
      name: "Neha Verma",
      phone: "9123456780",
      service: "Scaling",
      date: "15 Feb 2026",
      status: "Upcoming",
    },
    {
      id: 3,
      name: "Rahul Singh",
      phone: "9988776655",
      service: "Consultation",
      date: "18 Feb 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="patients-page">
      <div className="patients-container">

        {/* LEFT INFO SIDE */}
        <div className="patients-info-side">
          <span className="badge-new">Patient Management</span>

          <h1>
            Manage your <br />
            <span className="teal-text">Patients Easily</span>
          </h1>

          <p>
            View patient details, treatment history and appointment status at one place.
          </p>

          <div className="stats-box">
            <div>
              <strong>103+</strong>
              <span>Total Patients</span>
            </div>
            <div>
              <strong>14</strong>
              <span>Upcoming</span>
            </div>
            <div>
              <strong>26</strong>
              <span>Pending</span>
            </div>
          </div>
        </div>

        {/* RIGHT PATIENT LIST */}
        <div className="patients-list-side">
          <h2>Patients List</h2>

          <div className="patients-cards">
            {patients.map((p) => (
              <div className="patient-card" key={p.id}>
                <div className="avatar">
                  {p.name.charAt(0)}
                </div>

                <div className="patient-details">
                  <h3>{p.name}</h3>
                  <p><strong>Phone:</strong> {p.phone}</p>
                  <p><strong>Treatment:</strong> {p.service}</p>
                  <p><strong>Date:</strong> {p.date}</p>

                  <span className={`status ${p.status.toLowerCase()}`}>
                    {p.status}
                  </span>
                </div>

                <button
                  className="view-btn"
                  onClick={() => {
                    setOpenPatient(p);
                    setStatus(p.status || "Pending");
                  }}
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* PATIENT VIEW MODAL */}
      {openPatient && (
        <div className="patient-view-overlay">
          <div className="patient-view-card">

            <h3>Patient Details</h3>

            <div className="detail-row">
              <span>Name</span>
              <strong>{openPatient.name}</strong>
            </div>

            <div className="detail-row">
              <span>Phone</span>
              <strong>{openPatient.phone}</strong>
            </div>

            <div className="detail-row">
              <span>Service</span>
              <strong>{openPatient.service}</strong>
            </div>

            <div className="detail-row">
              <span>Date</span>
              <strong>{openPatient.date}</strong>
            </div>

            {/* STATUS */}
            <div className="status-section">
              <label>Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>

            {/* QUICK ACTIONS */}
            <div className="quick-actions">
              <a href={`tel:${openPatient.phone}`}>📞 Call</a>
              <a
                href={`https://wa.me/91${openPatient.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* DOCTOR NOTES */}
            <textarea
              placeholder="Doctor notes (optional)..."
              className="doctor-notes"
            />

            <button
              className="close-view-btn"
              onClick={() => setOpenPatient(null)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Patients;

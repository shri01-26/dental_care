import React from "react";
import "../styles/Dashboard.css";


const Overview = () => {
  return (
    <div className="dashboard-layout">
      

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        {/* HEADER */}
        <div className="dashboard-header">
          <h1>
            Good Morning, <span>Dr. Ritu</span>
          </h1>
          <p>Have a nice day at work</p>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Approval Requests</h3>
            <strong>26</strong>
            <span>Waiting to approve</span>
          </div>

          <div className="stat-card">
            <h3>Upcoming Appointments</h3>
            <strong>14</strong>
            <span>This week</span>
          </div>

          <div className="stat-card">
            <h3>Total Patients</h3>
            <strong>103</strong>
            <span>All time</span>
          </div>

          <div className="stat-card">
            <h3>Revenue</h3>
            <strong>₹35,000</strong>
            <span>This month</span>
          </div>
        </div>

        {/* CHART + TODAY */}
        <div className="dashboard-grid">
          <div className="chart-card">
            <h3>Appointment Statistics</h3>

            <div className="chart-placeholder">
              {[40, 25, 55, 30, 60, 35, 50].map((h, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="today-card">
            <h3>Today's Appointments</h3>
            <ul>
              <li>Consultation – 10:00 AM</li>
              <li>Scaling – 12:30 PM</li>
              <li>Root Canal – 04:00 PM</li>
            </ul>
          </div>
        </div>

        {/* TOP TREATMENTS */}
        <div className="treatment-card">
          <h3>Top Treatments</h3>
          <ol>
            <li>Consultation</li>
            <li>Scaling</li>
            <li>Root Canal</li>
            <li>Bleaching</li>
            <li>Wisdom Tooth Removal</li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default Overview;

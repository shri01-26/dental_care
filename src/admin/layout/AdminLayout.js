import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h3 className="admin-title">Admin Panel</h3>

        <nav className="admin-nav">
          <NavLink to="/admin" end>
            Overview
          </NavLink>
          <NavLink to="/admin/calendar">
            Calendar
          </NavLink>
          <NavLink to="/admin/patients">
            Patients
          </NavLink>
          <NavLink to="/admin/messages">
            Messages
          </NavLink>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;

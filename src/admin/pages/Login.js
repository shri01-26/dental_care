import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTooth, FaUserShield } from "react-icons/fa";
import "../styles/Login.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔑 Dummy credentials
    if (email === "admin@clinic.com" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="login-icon">
          <FaTooth />
        </div>

        <h2>Dental Clinic Admin</h2>
        <p className="subtitle">Secure Admin Login</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaUserShield />
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaUserShield />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

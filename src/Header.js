import React, { useEffect, useState } from "react";
import "./Header.css";

import hero1 from "./hero-bg1.jpg";
import hero2 from "./hero-bg2.jpg";
import hero3 from "./hero-bg3.jpg";

import logo from "./logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaUserShield, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const slides = [
  {
    image: hero1,
    title: "Caring for Your",
    highlight: "Beautiful Smile",
    text: "Your smile deserves the best care, comfort, and attention at every stage of life, from childhood to adulthood.",
  },
  {
    image: hero2,
    title: "Advanced Dental",
    highlight: "Care for All Ages",
    text: "Using the latest dental innovations to provide safe, comfortable, and effective care for all ages.",
  },
  {
    image: hero3,
    title: "Your Smile,",
    highlight: "Our Priority",
    text: "We believe every smile tells a story, and we are committed to protecting it with expert care.",
  },
];

const Header = () => {
  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isAdminLogged = localStorage.getItem("adminAuth") === "true";
  const isAdminPage = location.pathname.startsWith("/admin");

  const hideHeroPages = [
    "/contact",
    "/about",
    "/services",
    "/appointment",
    "/admin-login",
  ];

  const isServiceDetail = location.pathname.startsWith("/services/");
  const isHiddenPage =
    hideHeroPages.includes(location.pathname) ||
    isServiceDetail ||
    isAdminPage;

  useEffect(() => {
    if (isHiddenPage) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHiddenPage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you really want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("adminAuth");
      setMenuOpen(false);
      navigate("/");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${isHiddenPage ? "no-hero" : ""}`}>
      {!isHiddenPage && (
        <div className="bg-container">
          <img src={slides[current].image} className="bg-image" alt="hero" />
          <div className="overlay"></div>
        </div>
      )}

      <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
        <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <div className="logo-icon">
            <img src={logo} alt="Eterna Clinic" />
          </div>
          <div className="logo-text-box">
            <span className="logo-main">Eterna</span>
            <span className="logo-sub">Clinic</span>
          </div>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAV LINKS & ACTIONS (Combined for Mobile Sidebar) */}
        <div className={`nav-container ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            {isAdminLogged && (
              <li><NavLink to="/admin" onClick={closeMenu}>Overview</NavLink></li>
            )}
          </ul>

          <div className="nav-actions">
            {!isAdminLogged ? (
              <div className="admin-login-wrapper" onClick={() => { navigate("/admin-login"); closeMenu(); }}>
                 <FaUserShield className="admin-icon" />
                 <span className="mobile-only-text">Admin Login</span>
              </div>
            ) : (
              <div className="admin-login-wrapper" onClick={handleLogout}>
                <FaSignOutAlt className="admin-icon" />
                <span className="mobile-only-text">Logout</span>
              </div>
            )}

            <button className="nav-btn" onClick={() => { navigate("/appointment"); closeMenu(); }}>
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {!isHiddenPage && (
        <div className="hero-content">
          <h1>
            {slides[current].title}{" "}
            <span className="highlight">{slides[current].highlight}</span>
          </h1>
          <p>{slides[current].text}</p>
          <button className="hero-btn" onClick={() => navigate("/appointment")}>
            Book an Appointment
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
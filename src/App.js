import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import DentalTeam from "./DentalTeam";
import Team from "./Team";
import Testimonials from "./Testimonials";
import About from "./About";
import Contact from "./Contact";
import DentalContactModal from "./DentalContactModal";
import Appointment from "./Appointment";
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";

// 🔐 ADMIN
import AdminLayout from "./admin/layout/AdminLayout";
import Overview from "./admin/pages/Overview";
import Calendar from "./admin/pages/Calendar";
import Patients from "./admin/pages/Patients";
import Messages from "./admin/pages/Messages";
import AdminLogin from "./admin/pages/Login";
import ProtectedRoute from "./admin/ProtectedRoute";

/* 🔥 Wrapper */
const AppContent = () => {
  const location = useLocation();
  const [showForm, setShowForm] = useState(true);

  // ✅ admin page detection
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {/* ✅ Header visible everywhere, transparent on admin */}
      <Header transparent={isAdminPage} />

      <Routes>
        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <>
              <DentalTeam />
              <Team />
              <Testimonials />
              {showForm && (
                <DentalContactModal onClose={() => setShowForm(false)} />
              )}
            </>
          }
        />

        {/* 🌐 PUBLIC */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />

        {/* 🔑 ADMIN LOGIN */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* 🛡️ ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="patients" element={<Patients />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>

      {/* ❌ Footer hidden on admin pages */}
      {!isAdminPage && <Footer />}
    </>
  );
};

/* 🔥 Router */
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

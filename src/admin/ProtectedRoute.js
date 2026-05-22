import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdminLogged = localStorage.getItem("adminAuth") === "true";

  if (!isAdminLogged) {
    return <Navigate to="/overview" replace />;
  }

  return children;
};

export default ProtectedRoute;

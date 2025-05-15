// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ requiredRole }) {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div className="p-4 text-center">Loading…</div>;
  }
  if (!user) {
    // not signed in
    return <Navigate to="/login" replace />;
  }
  if (requiredRole && role !== requiredRole) {
    // wrong role
    return <Navigate to="/login" replace />;
  }
  // all good!
  return <Outlet />;
}
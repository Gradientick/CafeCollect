// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// pages
import Home               from "./pages/Home";
import Login              from "./pages/Login";
import Signup             from "./pages/Signup";
import OwnerDashboard     from "./pages/OwnerDashboard";
import CustomerDashboard  from "./pages/CustomerDashboard";
import CreatePromotion from "./pages/CreatePromotion";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/"    element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Owner-only area */}
        <Route element={<ProtectedRoute requiredRole="owner" />}>
          <Route path="/owner" element={<OwnerDashboard />} />
        </Route>

         <Route element={<ProtectedRoute requiredRole="owner" />}>
          <Route path="/create-promotion" element={<CreatePromotion />} />
        </Route>

        {/* Customer-only area */}
        <Route element={<ProtectedRoute requiredRole="customer" />}>
          <Route path="/customer" element={<CustomerDashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
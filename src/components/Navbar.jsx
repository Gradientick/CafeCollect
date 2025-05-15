// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-brand-dark">
          CafeCollect
        </Link>

        {/* Links */}
        <div className="space-x-4">
          <Link
            to="/"
            className="text-neutral-700 hover:text-brand-dark transition"
          >
            Home
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
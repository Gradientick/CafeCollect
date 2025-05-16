// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [cafeName, setCafeName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup(email, password, role, { fullName, cafeName });
      if (role === "owner") {
        navigate("/owner", { replace: true });
      } else {
        navigate("/customer", { replace: true });
      }
    } catch (err) {
      console.error(err);
      setError("Failed to create an account. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-brand-light px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center">
            Sign Up for CafeCollect
          </h2>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
              />
            </div>

            {role === "owner" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required={role === "owner"}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Cafe Name
                  </label>
                  <input
                    type="text"
                    required={role === "owner"}
                    value={cafeName}
                    onChange={(e) => setCafeName(e.target.value)}
                    className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Role
              </label>
              <div className="relative mt-1">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full appearance-none bg-white border border-neutral-300 px-3 py-2 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="customer">Customer</option>
                  <option value="owner">Cafe Owner</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-4 w-4 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark disabled:opacity-50 transition"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-neutral-700">
            Already have an account?{' '}
            <Link to="/login" className="text-accent hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

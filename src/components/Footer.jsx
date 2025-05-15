// src/components/Footer.jsx
import pkg from "../../package.json";

export default function Footer() {
  const version = pkg.version || "0.0.0";

  return (
    <footer className="bg-brand-dark text-white py-6">
      <div className="container mx-auto text-center space-y-1">
        <p className="text-sm">© 2025 CafeCollect. All rights reserved.</p>
        <p className="text-xs opacity-75">v{version}</p>
      </div>
    </footer>
  );
}
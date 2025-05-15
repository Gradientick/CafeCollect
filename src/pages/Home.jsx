import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-light">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl font-extrabold text-brand-dark mb-4">
            Welcome to CafeCollect
          </h1>
          <p className="text-lg text-neutral-700 mb-8 max-w-xl">
            Reward your loyal customers and grow your business—create star promotions, track progress, and let fans redeem freebies with ease.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Create Promotions</h3>
              <p className="text-neutral-700">
                Set star goals, upload images, and publish promotions in minutes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Collect Stars</h3>
              <p className="text-neutral-700">
                Customers scan codes or click to earn stars and monitor their progress.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Redeem Rewards</h3>
              <p className="text-neutral-700">
                Automatic unlocks and easy redemption ensure happy customers.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </main>
    </>
  );
}

export default Home;
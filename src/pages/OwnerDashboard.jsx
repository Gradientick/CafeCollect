// src/pages/OwnerDashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PromotionCard from "../components/PromotionCard";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/config";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";

export default function OwnerDashboard() {
  const { user } = useAuth();
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchPromotions = async () => {
      try {
        const q = query(
          collection(db, "promotions"),
          where("ownerId", "==", user.uid)
        );
        const snapshot = await getDocs(q);
        const promos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPromotions(promos);
      } catch (err) {
        console.error("Error fetching promotions:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPromotions();
  }, [user]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-light py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-brand-dark">
              Your Promotions
            </h1>
            <Link
              to="/create-promotion"
              className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition"
            >
              + New Promotion
            </Link>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : promotions.length === 0 ? (
            <p className="text-neutral-700">No promotions found. Create one!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map(promo => (
                <PromotionCard key={promo.id} promo={promo} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
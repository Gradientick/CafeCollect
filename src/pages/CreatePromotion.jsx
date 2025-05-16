// src/pages/CreatePromotion.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { db, storage } from "../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function CreatePromotion() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [threshold, setThreshold] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Upload image if provided
      let imageUrl = "";
      if (imageFile) {
        const storageRef = ref(storage, `promotions/${user.uid}/${Date.now()}_${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Add promotion doc
      await addDoc(collection(db, "promotions"), {
        title,
        description,
        threshold: Number(threshold),
        imageUrl,
        ownerId: user.uid,
        createdAt: serverTimestamp()
      });

      navigate("/owner", { replace: true });
    } catch (err) {
      console.error("Error creating promotion:", err);
      setError("Failed to create promotion. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-light px-4 py-8">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-brand-dark mb-6 text-center">
            Create New Promotion
          </h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Description
              </label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Star Threshold
              </label>
              <input
                type="number"
                required
                min={1}
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                Promotion Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-1 w-full"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark disabled:opacity-50 transition"
            >
              {loading ? "Creating..." : "Create Promotion"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

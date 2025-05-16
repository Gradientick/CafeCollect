// src/components/PromotionCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PromotionCard({ promo }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      {promo.imageUrl && (
        <img
          src={promo.imageUrl}
          alt={promo.title}
          className="h-40 w-full object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold text-brand-dark mb-2">
        {promo.title}
      </h3>
      <p className="text-neutral-700 flex-grow mb-4">
        {promo.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-700">
          Goal: {promo.threshold} ⭐
        </span>
        <Link
          to={`/promotions/${promo.id}`}
          className="px-3 py-1 bg-accent text-white rounded-md hover:bg-accent-dark transition text-sm"
        >
          View
        </Link>
      </div>
    </div>
  );
}

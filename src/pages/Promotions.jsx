import React from "react";
import { promotions } from "../data/data.js";
import PerksRow from "../components/PerksRow.jsx";

export default function Promotions() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Акции</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {promotions.map((promo, i) => (
          <div
            key={promo.id}
            className={`bg-brand text-white rounded-lg p-8 flex items-center gap-6 overflow-hidden ${
              i === promotions.length - 1 && promotions.length % 2 !== 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex-1">
              <h2 className="font-semibold mb-1">{promo.title}</h2>
              <p className="text-sm opacity-90">{promo.text}</p>
            </div>
            {promo.image && (
              <img src={promo.image} alt={promo.title} className="h-24 w-24 object-contain hidden md:block" />
            )}
          </div>
        ))}
      </div>
      <PerksRow />
    </div>
  );
}

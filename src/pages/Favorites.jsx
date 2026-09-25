import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Favorites() {
  const { favorites } = useShop();

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">Список избранного пуст.</p>
        <Link to="/" className="text-brand">На главную →</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Избранное</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favorites.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

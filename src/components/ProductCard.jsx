import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

const badgeStyles = {
  hit: "bg-red-500",
  sale: "bg-blue-500",
};

const badgeLabels = {
  hit: "Хит продаж",
  sale: "Акция",
};

export default function ProductCard({ product }) {
  const { addToCart, toggleFavorite, favorites } = useShop();
  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-lg border p-3 flex flex-col relative">
      {product.badges?.length > 0 && (
        <div className="absolute top-2 left-2 flex gap-1">
          {product.badges.map((b) => (
            <span
              key={b}
              className={`text-white text-[10px] px-2 py-0.5 rounded ${badgeStyles[b]}`}
            >
              {badgeLabels[b]}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={() => toggleFavorite(product)}
        className={`absolute top-2 right-2 text-lg ${isFavorite ? "text-red-500" : "text-gray-300"}`}
        aria-label="В избранное"
      >
        ♥
      </button>

      <Link to={`/product/${product.id}`} className="flex-1">
        <div className="h-28 bg-gray-100 rounded mb-3 flex items-center justify-center overflow-hidden">
          {product.image ? (
            <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
          ) : (
            <span className="text-gray-300 text-xs">фото</span>
          )}
        </div>
        <div className="text-sm leading-snug text-gray-700 h-16 overflow-hidden">
          {product.title}
        </div>
      </Link>

      <div className="mt-2 text-sm">
        <div className="text-gray-400 line-through text-xs">{product.oldPrice} ₽</div>
        <div className="font-semibold text-base">{product.discountPrice} ₽</div>
        <div className="text-xs text-gray-400">В наличии {product.inStock} шт</div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center border rounded">
          <button className="px-2 text-gray-500">−</button>
          <span className="px-2 text-sm">96 +</span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-brand text-white text-sm rounded py-1.5 hover:bg-brand-dark"
        >
          В корзину
        </button>
      </div>
    </div>
  );
}

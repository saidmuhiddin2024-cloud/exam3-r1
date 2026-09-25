import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/data.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Search() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const lower = q.toLowerCase();
    setResults(products.filter((p) => p.title.toLowerCase().includes(lower)));
  }, [q]);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Результаты поиска: «{q}»</h1>
      {results.length === 0 ? (
        <p className="text-gray-500">Ничего не найдено.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

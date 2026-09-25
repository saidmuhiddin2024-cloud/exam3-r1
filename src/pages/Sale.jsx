import React, { useEffect, useState } from "react";
import { products } from "../data/data.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Sale() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(products);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Распродажа товара</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

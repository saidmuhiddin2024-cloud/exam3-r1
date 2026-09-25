import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { products, categories } from "../data/data.js";
import ProductCard from "../components/ProductCard.jsx";

// Рӯйхати маҳсулот барои як категория (масалан "Шлейфы для iPhone Xs Max").
export default function CategoryProducts() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const model = searchParams.get("model");
  const [list, setList] = useState([]);

  const category = categories.find((c) => c.slug === categorySlug);

  useEffect(() => {
    // useEffect "мебора" маҳсулоти категорияи интихобшударо аз маълумоти умумӣ.
    setList(products.filter((p) => p.category === categorySlug));
  }, [categorySlug]);

  const title = model
    ? `${category?.name || "Товары"} для ${model}`
    : category?.name || "Товары";

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

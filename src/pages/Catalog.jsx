import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { iphoneModels, categories, brands } from "../data/data.js";

// Барои Apple — интихоби модели телефон (iPhone 11 Pro, Xs Max...).
// Барои дигар брендҳо — интихоби категорияи аксессуар, чунки
// парчаҳо барои ҳар модел ҷудо карда нашудаанд.
export default function Catalog() {
  const { brand } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (brand === "apple") {
      setItems(iphoneModels);
    } else {
      setItems(categories);
    }
  }, [brand]);

  const brandInfo = brands.find((b) => b.slug === brand);
  const isApple = brand === "apple";

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">
        {isApple ? "Выберите модель" : `Выберите категорию — ${brandInfo?.name || brand}`}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) =>
          isApple ? (
            <Link
              key={item.name}
              to={`/category/shleify?model=${encodeURIComponent(item.name)}`}
              className="bg-white border rounded-lg p-4 flex flex-col items-center gap-3 hover:border-brand"
            >
              <img src={item.image} alt={item.name} className="h-24 object-contain" />
              <span className="text-xs text-center">{item.name}</span>
            </Link>
          ) : (
            <Link
              key={item.slug}
              to={`/category/${item.slug}`}
              className="bg-white border rounded-lg p-6 flex flex-col items-center gap-3 hover:border-brand"
            >
              <img src={item.image} alt={item.name} className="h-16 object-contain" />
              <span className="text-sm text-center">{item.name}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

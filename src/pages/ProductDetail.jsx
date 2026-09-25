import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data.js";
import { useShop } from "../context/ShopContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useShop();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  // useEffect маҳсулоти интихобшударо ҳар вақте, ки id тағйир меёбад, меёбад.
  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    setProduct(found || null);
    setQty(1);
  }, [id]);

  if (!product) return <p className="text-gray-500">Товар не найден.</p>;

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
        <div>
          <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {product.image ? (
              <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
            ) : (
              <span className="text-gray-300">фото товара</span>
            )}
          </div>
          <div className="flex gap-2 mt-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-16 w-16 bg-gray-100 rounded border flex items-center justify-center overflow-hidden">
                {product.image && (
                  <img src={product.image} alt="" className="h-full w-full object-contain" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-4">{product.title}</h1>
          <div className="text-sm text-gray-500 mb-1">Артикул: SN00{product.id}</div>
          <div className="text-sm text-gray-500 mb-4">В наличии: {product.inStock} шт</div>

          <div className="text-gray-400 line-through text-sm">{product.oldPrice} ₽</div>
          <div className="text-3xl font-bold mb-6">{product.discountPrice} ₽</div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2">−</button>
              <span className="px-3">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2">+</button>
            </div>
            <button
              onClick={() => addToCart({ ...product, qty })}
              className="bg-brand text-white px-6 py-2 rounded hover:bg-brand-dark"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Популярные товары</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

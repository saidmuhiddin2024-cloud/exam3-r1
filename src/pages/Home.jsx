import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { brands, products, homeBanners } from "../data/data.js";
import ProductCard from "../components/ProductCard.jsx";
import PerksRow from "../components/PerksRow.jsx";

export default function Home() {
  const [popular, setPopular] = useState([]);

  // useEffect барои "боркунии" маҳсулоти маъмул ҳангоми кушода шудани саҳифа.
  useEffect(() => {
    setPopular(products.slice(0, 4));
  }, []);

  return (
    <div>
      {/* Баннер */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="md:col-span-2 bg-brand rounded-lg text-white p-8 flex items-center gap-6 overflow-hidden">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">Защитное стекло на iPhone 11 Pro по лучшей цене!</h1>
            <Link to="/catalog/apple" className="bg-white text-brand w-max px-4 py-2 rounded text-sm font-medium inline-block">
              Подробнее →
            </Link>
          </div>
          <img src={homeBanners.screenProtector} alt="Защитное стекло" className="hidden md:block h-32 object-contain" />
        </div>
        <div className="bg-gray-100 rounded-lg p-6 flex items-center gap-4">
          <div className="flex-1">
            <h2 className="font-semibold mb-2">Silicone Case для iPhone Xr</h2>
            <Link to="/catalog/apple" className="text-brand text-sm">Подробнее →</Link>
          </div>
          <img src={homeBanners.case} alt="Silicone Case" className="h-20 w-20 object-contain rounded" />
        </div>
      </div>

      {/* Бренд */}
      <h2 className="text-xl font-semibold mb-4">Выберите бренд</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {brands.map((b) => (
          <Link
            key={b.slug}
            to={`/catalog/${b.slug}`}
            className="bg-white border rounded-lg p-6 flex flex-col items-center gap-3 hover:border-brand"
          >
            {b.image ? (
              <img src={b.image} alt={b.name} className="h-16 object-contain" />
            ) : (
              <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-xl">
                {b.name[0]}
              </div>
            )}
            <span className="text-sm">{b.name}</span>
          </Link>
        ))}
      </div>

      {/* Маҳсулоти маъмул */}
      <h2 className="text-xl font-semibold mb-4">Популярные товары</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {popular.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <PerksRow />

      <div className="bg-white rounded-lg p-8 text-sm text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          No Doors Technology — продажа аксессуаров и запчастей для мобильных телефонов оптом
        </h2>
        <p className="mb-3">
          Мы работаем напрямую с производителями, что позволяет предлагать клиентам
          лучшие цены на аксессуары и запчасти для смартфонов без переплат посредникам.
        </p>
        <p>
          Каждая позиция проходит контроль качества перед отправкой, а гибкая система
          скидок делает сотрудничество выгодным как для розничных, так и для оптовых покупателей.
        </p>
      </div>
    </div>
  );
}

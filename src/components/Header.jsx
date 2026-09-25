import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { brands } from "../data/data.js";
import { useShop } from "../context/ShopContext.jsx";

export default function Header() {
  const [query, setQuery] = useState("");
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart, favorites } = useShop();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setMobileMenuOpen(false);
    }
  }

  const topLinks = [
    { to: "/about", label: "О компании" },
    { to: "/delivery", label: "Доставка и оплата" },
    { to: "/warranty", label: "Гарантии" },
    { to: "/contacts", label: "Контакты" },
  ];

  return (
    <header className="bg-white border-b relative">
      {/* Болоии сатр (Desktop) */}
      <div className="hidden md:flex justify-between items-center text-xs text-gray-500 px-6 py-2 border-b">
        <div className="flex gap-4">
          {topLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-brand">
              {l.label}
            </Link>
          ))}
        </div>
        <div>+7 (965) 237-44-49</div>
      </div>

      {/* Сатри асосӣ */}
      <div className="flex items-center justify-between md:justify-start gap-4 md:gap-6 px-4 md:px-6 py-4">
        {/* Логотип */}
        <Link to="/" className="font-bold text-lg whitespace-nowrap">
          NO DOORS
          <div className="text-[10px] tracking-widest text-gray-400">TECHNOLOGY</div>
        </Link>

        {/* Формаи ҷустуҷӯ (Desktop) */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Введите поисковый запрос..."
            className="flex-1 border rounded-l px-4 py-2 text-sm outline-none focus:border-brand"
          />
          <button className="bg-brand text-white px-5 rounded-r text-sm">
            Найти
          </button>
        </form>

        {/* Аломатҳои Корзина ва Избранное ва тугмаи Меню (Mobile) */}
        <div className="flex items-center gap-4 text-sm">
          <Link to="/favorites" className="relative">
            ♥ <span className="hidden sm:inline">Избранное</span>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-brand text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative">
            🛒 <span className="hidden sm:inline">Моя корзина</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-brand text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Тугмаи меню барои телефон */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-gray-700 text-xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Поиски мобилӣ */}
      <div className="px-4 pb-3 md:hidden">
        <form onSubmit={handleSearch} className="flex">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Введите поисковый запрос..."
            className="flex-1 border rounded-l px-3 py-1.5 text-sm outline-none focus:border-brand"
          />
          <button className="bg-brand text-white px-4 rounded-r text-sm">
            Найти
          </button>
        </form>
      </div>

      {/* Навигатсияи бренд (Desktop) */}
      <nav className="hidden md:flex px-6 pb-3 gap-6 text-sm text-gray-700 relative">
        <div
          className="relative"
          onMouseEnter={() => setBrandsOpen(true)}
          onMouseLeave={() => setBrandsOpen(false)}
        >
          <Link to="/catalog/apple" className="font-medium">
            Apple ▾
          </Link>
          {brandsOpen && (
            <div className="absolute top-full left-0 bg-white border shadow-md rounded z-10 py-2 w-40">
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  to={`/catalog/${b.slug}`}
                  className="block px-4 py-1 hover:bg-brand-light hover:text-brand"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        {brands.slice(1).map((b) => (
          <Link key={b.slug} to={`/catalog/${b.slug}`} className="hover:text-brand">
            {b.name}
          </Link>
        ))}
        <Link to="/promotions" className="hover:text-brand">Акции</Link>
        <Link to="/sale" className="text-brand font-medium">Прайс-лист</Link>
      </nav>

      {/* Менюи афканда барои телефонҳо (Mobile Drawer/Menu) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 text-sm shadow-lg">
          <div className="font-semibold text-gray-400 text-xs uppercase tracking-wider">Бренды</div>
          <div className="flex flex-col gap-2 pl-2">
            {brands.map((b) => (
              <Link
                key={b.slug}
                to={`/catalog/${b.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand"
              >
                {b.name}
              </Link>
            ))}
          </div>

          <hr className="my-1" />

          <Link
            to="/promotions"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand font-medium"
          >
            Акции
          </Link>
          <Link
            to="/sale"
            onClick={() => setMobileMenuOpen(false)}
            className="text-brand font-medium"
          >
            Прайс-лист
          </Link>

          <hr className="my-1" />

          <div className="font-semibold text-gray-400 text-xs uppercase tracking-wider">Информация</div>
          <div className="flex flex-col gap-2 pl-2">
            {topLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 text-xs text-gray-500 font-medium">
            📞 +7 (965) 237-44-49
          </div>
        </div>
      )}
    </header>
  );
}
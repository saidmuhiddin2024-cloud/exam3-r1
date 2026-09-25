import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10 text-sm">
        <div>
          <div className="text-white font-bold mb-2">NO DOORS TECHNOLOGY</div>
          <p className="text-gray-400">
            Продажа аксессуаров и запчастей для мобильных телефонов оптом.
          </p>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Навигация</div>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-brand">О компании</Link></li>
            <li><Link to="/delivery" className="hover:text-brand">Доставка и оплата</Link></li>
            <li><Link to="/warranty" className="hover:text-brand">Гарантии</Link></li>
            <li><Link to="/contacts" className="hover:text-brand">Контакты</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Контакты</div>
          <p>+7 (965) 237-44-49</p>
          <p>г. Воронеж, ул. Плехановская, д. 18</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Способы оплаты</div>
          <p>Visa · MasterCard · МИР</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs py-4 border-t border-gray-800">
        © No Doors Technology, {new Date().getFullYear()}
      </div>
    </footer>
  );
}

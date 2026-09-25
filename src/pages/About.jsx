import React from "react";
import PerksRow from "../components/PerksRow.jsx";

export default function About() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">О компании No Doors Technology</h1>
      <div className="bg-gray-100 rounded-lg h-56 mb-8" />
      <PerksRow />
      <div className="bg-white rounded-lg p-8 text-sm text-gray-600 leading-relaxed">
        <p className="mb-3">
          Мы занимаемся оптовой продажей аксессуаров и запчастей для мобильных
          телефонов уже несколько лет, сотрудничая напрямую с производителями
          и контролируя качество каждой партии товара.
        </p>
        <p>
          Наша цель — предложить розничным и оптовым клиентам надёжные
          комплектующие по честным ценам, с гарантией и быстрой доставкой по всей стране.
        </p>
      </div>
    </div>
  );
}

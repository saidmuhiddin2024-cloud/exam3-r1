import React from "react";

const groups = [
  {
    title: "Гарантийный ремонт ЖК-дисплея",
    items: [
      "Заводской брак дисплея, подтверждённый диагностикой",
      "Нарушение цветопередачи без механических повреждений",
      "Отслоение шлейфа дисплея при первичной установке",
    ],
  },
  {
    title: "Гарантийный обмен аккумулятора",
    items: [
      "Быстрая потеря ёмкости в первые месяцы эксплуатации",
      "Вздутие корпуса аккумулятора без внешнего воздействия",
      "Отказ определения заряда устройством",
    ],
  },
  {
    title: "Случаи, когда гарантия не применяется",
    items: [
      "Механические повреждения и следы вскрытия",
      "Попадание влаги внутрь устройства",
      "Самостоятельный ремонт или установка сторонним мастером",
    ],
  },
];

export default function Warranty() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Гарантии</h1>
      <p className="text-sm text-gray-600 mb-6">
        Все товары нашего магазина проходят проверку качества перед отправкой
        и сопровождаются гарантийным обязательством.
      </p>
      <div className="space-y-6">
        {groups.map((g) => (
          <div key={g.title} className="bg-white rounded-lg border p-6">
            <h2 className="font-medium mb-3">{g.title}</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

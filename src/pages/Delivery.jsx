import React from "react";

const sections = [
  {
    title: "Условия доставки",
    text: "Доставка осуществляется по Воронежу и области, а также в другие регионы России транспортными компаниями по выбору клиента.",
  },
  {
    title: "Самовывоз",
    text: "Забрать заказ можно самостоятельно из нашего пункта выдачи по адресу: г. Воронеж, ул. Плехановская, д. 18.",
  },
  {
    title: "Доставка транспортными компаниями",
    text: "Отправляем заказы по РФ и СНГ транспортными компаниями по вашему выбору, оплата производится при получении или онлайн заранее.",
  },
  {
    title: "Оплата наличными курьеру при доставке",
    text: "Доступна в пределах города Воронежа при оформлении заказа с доставкой.",
  },
  {
    title: "Оплата онлайн на сайте",
    text: "Принимаем к оплате карты Visa, MasterCard и МИР через защищённое соединение.",
  },
];

export default function Delivery() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Доставка и оплата</h1>
      <div className="bg-white rounded-lg border divide-y">
        {sections.map((s) => (
          <div key={s.title} className="p-6">
            <h2 className="font-medium mb-2">{s.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

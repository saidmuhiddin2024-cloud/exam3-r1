import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

export default function Checkout() {
  const { cart, clearCart } = useShop();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [delivery, setDelivery] = useState("delivery");
  const [payment, setPayment] = useState("cash");
  const [done, setDone] = useState(false);

  const itemsTotal = cart.reduce((sum, item) => sum + item.discountPrice * item.qty, 0);
  const deliveryFee = delivery === "delivery" ? 300 : 0;
  const total = itemsTotal + deliveryFee;

  function handleSubmit(e) {
    e.preventDefault();
    setDone(true);
    clearCart();
  }

  if (done) {
    return (
      <div className="max-w-md mx-auto text-center bg-white border rounded-lg p-10">
        <div className="text-4xl mb-4">✅</div>
        <h1 className="text-xl font-semibold mb-2">Заказ оформлен!</h1>
        <p className="text-gray-500 mb-6">
          Скоро с Вами свяжется наш менеджер.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-brand text-white px-6 py-2 rounded hover:bg-brand-dark"
        >
          На главную
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return <p className="text-gray-500">Корзина пуста, оформлять нечего.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
        <h1 className="text-xl font-semibold">Оформление заказа</h1>

        <div className="bg-white border rounded-lg p-5">
          <h2 className="font-medium mb-3">Контактные данные</h2>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ФИО"
            className="w-full border rounded px-3 py-2 text-sm mb-3"
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="bg-white border rounded-lg p-5">
          <h2 className="font-medium mb-3">Способ получения</h2>
          <label className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="radio"
              checked={delivery === "delivery"}
              onChange={() => setDelivery("delivery")}
            />
            Доставка (300 ₽)
          </label>
          <label className="flex items-center gap-2 mb-3 text-sm">
            <input
              type="radio"
              checked={delivery === "pickup"}
              onChange={() => setDelivery("pickup")}
            />
            Самовывоз (бесплатно)
          </label>
          {delivery === "delivery" && (
            <input
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Адрес доставки"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          )}
        </div>

        <div className="bg-white border rounded-lg p-5">
          <h2 className="font-medium mb-3">Способ оплаты</h2>
          <label className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="radio"
              checked={payment === "cash"}
              onChange={() => setPayment("cash")}
            />
            Оплата при получении
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={payment === "online"}
              onChange={() => setPayment("online")}
            />
            Онлайн-оплата
          </label>
        </div>

        <button className="bg-brand text-white px-6 py-3 rounded hover:bg-brand-dark w-full">
          Подтвердить заказ
        </button>
      </form>

      <div className="bg-white border rounded-lg p-5 h-max">
        <h2 className="font-medium mb-3">Ваш заказ</h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Сумма товаров</span>
          <span>{itemsTotal} ₽</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Доставка</span>
          <span>{deliveryFee} ₽</span>
        </div>
        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Итого</span>
          <span>{total} ₽</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext.jsx";

export default function Cart() {
  const { cart, changeQty, removeFromCart } = useShop();

  const total = cart.reduce((sum, item) => sum + item.discountPrice * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">Ваша корзина пуста.</p>
        <Link to="/" className="text-brand">На главную →</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Ваша корзина</h1>

      <div className="bg-white rounded-lg border divide-y mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4">
            <div className="h-16 w-16 bg-gray-100 rounded flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm">{item.title}</div>
              <div className="text-xs text-gray-400">Артикул: SN00{item.id}</div>
            </div>
            <div className="flex items-center border rounded">
              <button
                onClick={() => changeQty(item.id, item.qty - 1)}
                className="px-2 py-1"
              >
                −
              </button>
              <span className="px-3">{item.qty}</span>
              <button
                onClick={() => changeQty(item.id, item.qty + 1)}
                className="px-2 py-1"
              >
                +
              </button>
            </div>
            <div className="w-24 text-right font-medium">
              {item.discountPrice * item.qty} ₽
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gray-400 hover:text-red-500"
              aria-label="Удалить"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center gap-6">
        <div className="text-lg">
          Итого: <span className="font-bold">{total} ₽</span>
        </div>
        <Link
          to="/checkout"
          className="bg-brand text-white px-6 py-2 rounded hover:bg-brand-dark"
        >
          Оформить заказ
        </Link>
      </div>
    </div>
  );
}

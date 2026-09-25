import React, { createContext, useContext, useEffect, useState } from "react";

// Контексти умумии дӯкон: сабад (cart) ва интихобшудаҳо (favorites).
// useEffect барои сабт кардани маълумот дар localStorage истифода мешавад,
// то ҳангоми боз кардани саҳифа маълумот гум нашавад.

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function changeQty(id, qty) {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  }

  function clearCart() {
    setCart([]);
  }

  function toggleFavorite(product) {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  }

  const value = {
    cart,
    favorites,
    addToCart,
    removeFromCart,
    changeQty,
    clearCart,
    toggleFavorite,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  return useContext(ShopContext);
}

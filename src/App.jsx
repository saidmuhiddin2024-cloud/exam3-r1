import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import CategoryProducts from "./pages/CategoryProducts.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Favorites from "./pages/Favorites.jsx";
import Checkout from "./pages/Checkout.jsx";
import Promotions from "./pages/Promotions.jsx";
import Sale from "./pages/Sale.jsx";
import About from "./pages/About.jsx";
import Delivery from "./pages/Delivery.jsx";
import Warranty from "./pages/Warranty.jsx";
import Contacts from "./pages/Contacts.jsx";
import Search from "./pages/Search.jsx";
import NotFound from "./pages/NotFound.jsx";

// Ҳамаи роҳҳои (routes) сомона дар ин ҷо ҷамъ шудаанд.
// Layout қолаби умумист, дигар саҳифаҳо чун "фарзанд"-и он кор мекунанд.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog/:brand" element={<Catalog />} />
        <Route path="category/:categorySlug" element={<CategoryProducts />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="sale" element={<Sale />} />
        <Route path="about" element={<About />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="warranty" element={<Warranty />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

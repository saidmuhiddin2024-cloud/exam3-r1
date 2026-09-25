import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// Layout - қолаби умумӣ барои ҳамаи саҳифаҳо (Header + мундариҷаи саҳифа + Footer).
// <Outlet /> ҷои саҳифаи ҷориро нишон медиҳад, ки React Router онро иваз мекунад.
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

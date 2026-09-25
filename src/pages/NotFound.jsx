import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-24">
      <h1 className="text-2xl font-semibold mb-4">Страница не найдена</h1>
      <Link to="/" className="text-brand">На главную →</Link>
    </div>
  );
}

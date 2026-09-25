import React from "react";
import { perks } from "../data/data.js";

// Сатри имтиёзҳо (доставка, гарантия ва ғ.), ки дар якчанд саҳифа такрор мешавад.
export default function PerksRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8 text-center text-xs text-gray-600">
      {perks.map((p, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-brand-light text-brand flex items-center justify-center">
            ✓
          </div>
          <div>{p.title}</div>
        </div>
      ))}
    </div>
  );
}

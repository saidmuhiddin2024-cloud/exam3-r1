import React from "react";

export default function Contacts() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">Контакты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 text-sm">
          <div>
            <div className="text-gray-400 mb-1">Телефон</div>
            <div>+7 (965) 237-44-49</div>
          </div>
          <div>
            <div className="text-gray-400 mb-1">Адрес</div>
            <div>г. Воронеж, ул. Плехановская, д. 18</div>
          </div>
          <div>
            <div className="text-gray-400 mb-1">Соцсети</div>
            <div>vk.com/no_doors</div>
            <div>instagram.com/no_doors</div>
          </div>
          <div>
            <div className="text-gray-400 mb-1">Реквизиты</div>
            <div>ООО «No Doors Technology»</div>
            <div>ИНН 3123386455</div>
            <div>ОГРН 1163123062222</div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg h-72 flex items-center justify-center text-gray-400 text-sm">
          карта
        </div>
      </div>
    </div>
  );
}

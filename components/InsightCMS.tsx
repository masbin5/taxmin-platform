"use client";

import { useState } from "react";

export default function InsightCMS() {
  const [items, setItems] = useState([
    { id: 1, title: "Pajak Penghasilan (PPh)" },
    { id: 2, title: "Pajak Pertambahan Nilai (PPN)" },
  ]);

  const addItem = () =>
    setItems([...items, { id: Date.now(), title: "Insight Baru" }]);

  const updateItem = (id: number, title: string) =>
    setItems(items.map(i => i.id === id ? { ...i, title } : i));

  const removeItem = (id: number) =>
    setItems(items.filter(i => i.id !== id));

  return (
    <div className="mt-20">
      <h2 className="text-xl font-semibold mb-4">
        CMS Insight
      </h2>

      <div className="space-y-3">
        {items.map(i => (
          <div key={i.id} className="flex gap-2">
            <input
              value={i.title}
              onChange={(e) => updateItem(i.id, e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg"
            />
            <button
              onClick={() => removeItem(i.id)}
              className="px-3 py-2 bg-red-500 text-white rounded-lg"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addItem}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
      >
        + Tambah Insight
      </button>
    </div>
  );
}

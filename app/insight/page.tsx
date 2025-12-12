"use client";

import { useState } from "react";

const INSIGHTS = [
  {
    id: 1,
    title: "Pajak Penghasilan (PPh)",
    description: "Pembahasan lengkap Pajak Penghasilan.",
  },
  {
    id: 2,
    title: "Pajak Pertambahan Nilai (PPN)",
    description: "Dasar dan penerapan PPN.",
  },
];

export default function InsightPage() {
  const [query, setQuery] = useState("");

  const filtered = INSIGHTS.filter((i) =>
    i.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Insight Pajak</h1>
      <p className="mt-3 text-gray-700">
        Materi pajak disusun bertahap dan mudah dipahami.
      </p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari topik pajak…"
        className="mt-8 w-full md:w-1/2 px-4 py-3 border rounded-xl"
      />

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {item.description}
            </p>

            <button
              className="mt-4 text-sm font-medium text-orange-600 hover:underline"
              onClick={() => alert("Detail insight akan segera tersedia")}
            >
              Baca selengkapnya →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

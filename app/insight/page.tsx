"use client";

import { useState } from "react";
import Link from "next/link";
import { highlight } from "@/lib/highlight";

const INSIGHTS = [
  {
    slug: "pph",
    chapter: "pengertian",
    title: "Pengertian Pajak Penghasilan",
    content: "Pajak Penghasilan dikenakan atas penghasilan yang diterima wajib pajak.",
  },
  {
    slug: "ppn",
    chapter: "dasar",
    title: "Dasar Pajak Pertambahan Nilai",
    content: "PPN adalah pajak atas konsumsi barang dan jasa.",
  },
];

export default function InsightPage() {
  const [query, setQuery] = useState("");

  const filtered = INSIGHTS.filter(
    (i) =>
      i.title.toLowerCase().includes(query.toLowerCase()) ||
      i.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold">Insight Pajak</h1>
        <p className="mt-3 text-gray-700">
          Materi pembelajaran pajak yang disusun bertahap dan mudah dipahami.
        </p>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari insight pajak..."
          className="mt-8 w-full md:w-1/2 px-4 py-3 border rounded-xl"
        />

        <div className="mt-10 space-y-4">
          {filtered.map((item) => (
            <Link
              key={item.title}
              href={`/insight/${item.slug}/${item.chapter}?q=${query}`}
              className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <div
                className="text-sm text-gray-600 mt-2"
                dangerouslySetInnerHTML={{
                  __html: highlight(item.content, query),
                }}
              />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

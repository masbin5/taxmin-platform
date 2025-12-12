import type { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  return {
    title: `${params.slug.toUpperCase()} | Insight Pajak | Taxmin`,
    description: `Materi pembelajaran ${params.slug.toUpperCase()} yang disusun bertahap.`,
  };
}

export default function InsightBookPage({ params }: PageProps) {
  const { slug } = params;

  const chapters = [
    { slug: "pengertian", title: "Pengertian Pajak" },
    { slug: "subjek-objek", title: "Subjek & Objek Pajak" },
    { slug: "tarif", title: "Tarif Pajak" },
  ];

  return (
    <div className="px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold">{slug.toUpperCase()}</h1>
        <p className="mt-4 text-gray-700">
          Pembahasan {slug.toUpperCase()} dari konsep dasar hingga penerapan.
        </p>

        <div className="mt-10 space-y-4">
          {chapters.map((c, i) => (
            <Link
              key={c.slug}
              href={`/insight/${slug}/${c.slug}`}
              className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md"
            >
              <div className="text-sm text-gray-400">Bab {i + 1}</div>
              <h2 className="font-semibold">{c.title}</h2>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

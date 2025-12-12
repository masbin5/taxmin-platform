import type { Metadata } from "next";
import Link from "next/link";
import { highlight } from "@/lib/highlight";

interface PageProps {
  params: { slug: string; chapter: string };
  searchParams: { q?: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  return {
    title: `${params.chapter.replace("-", " ")} | ${params.slug.toUpperCase()} | Taxmin`,
  };
}

export default function ChapterPage({ params, searchParams }: PageProps) {
  const { slug, chapter } = params;
  const keyword = searchParams.q || "";

  const content = `
Pajak Penghasilan adalah pajak yang dikenakan atas penghasilan
yang diterima atau diperoleh Wajib Pajak.

Pemahaman dasar sangat penting sebelum masuk ke perhitungan teknis.
`;

  const chapters = [
    { slug: "pengertian", title: "Pengertian Pajak" },
    { slug: "subjek-objek", title: "Subjek & Objek Pajak" },
    { slug: "tarif", title: "Tarif Pajak" },
  ];

  return (
    <div className="px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[3fr_1fr] gap-12">

        {/* MAIN */}
        <article>
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/insight">Insight</Link> /{" "}
            <Link href={`/insight/${slug}`}>{slug.toUpperCase()}</Link> /{" "}
            <span className="capitalize">{chapter.replace("-", " ")}</span>
          </nav>

          <h1 className="text-4xl font-bold capitalize">
            {chapter.replace("-", " ")}
          </h1>

          <div
            className="prose prose-lg mt-8"
            dangerouslySetInnerHTML={{
              __html: highlight(content, keyword),
            }}
          />

          <div className="mt-12 bg-[#F5E7C6] p-6 rounded-2xl">
            <h3 className="font-semibold">Masih bingung?</h3>
            <p className="mt-2">
              Kamu bisa ajukan pertanyaan dan taxmin akan bantu menjelaskan.
            </p>
            <Link
              href="/question"
              className="inline-block mt-4 px-6 py-3 bg-[#FF6D1F] text-white rounded-xl"
            >
              Tanya ke taxmin
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside>
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">Daftar Chapter</h4>
            <ul className="space-y-2 text-sm">
              {chapters.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/insight/${slug}/${c.slug}`}
                    className={`block px-3 py-2 rounded-lg ${
                      c.slug === chapter
                        ? "bg-[#F5E7C6] font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-[#FF6D1F] text-white px-6 py-28 rounded-b-[48px]">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hai, ada yang bisa <br />
            <span className="underline decoration-white/40">
              taxmin
            </span>{" "}
            bantu?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-white/90 text-lg"
          >
            taxmin.id adalah ruang belajar dan referensi pajak —  
            dibuat agar aturan terasa lebih masuk akal dan manusiawi.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/insight">
              <AnimatedButton className="px-6 py-3 bg-white text-[#FF6D1F] font-semibold rounded-xl shadow">
                Lihat Insight
              </AnimatedButton>
            </Link>

            <Link href="/question">
              <AnimatedButton className="px-6 py-3 border border-white rounded-xl font-semibold">
                Punya Pertanyaan?
              </AnimatedButton>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 py-24 bg-[#FAF3E1]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Insight Pajak",
              desc: "Materi belajar pajak yang disusun rapi dan mudah dipahami.",
            },
            {
              title: "Highlight & Opini",
              desc: "Berita dan sudut pandang seputar ekonomi dan perpajakan.",
            },
            {
              title: "Tanya Pajak",
              desc: "Ajukan pertanyaan dan dapatkan jawaban yang relevan.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#222]">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#222]">
          Bingung mulai dari mana?
        </h2>

        <p className="mt-4 text-gray-600">
          taxmin siap menemani kamu memahami pajak, pelan-pelan tapi pasti.
        </p>

        <Link href="/question">
          <AnimatedButton className="inline-block mt-8 px-8 py-4 bg-[#FF6D1F] text-white rounded-xl font-semibold shadow">
            Tanya ke taxmin
          </AnimatedButton>
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} taxmin.id — Trust and Verify
      </footer>

    </div>
  );
}

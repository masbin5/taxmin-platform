"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 py-5 backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <img src="/taxmin-logo.jpg" alt="TAXMIN" className="w-10 h-10 rounded" />
          <h1 className="font-bold text-xl text-taxmin-blue">TAXMIN</h1>
        </div>
        <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          Login
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="px-6 py-24 bg-animated text-white rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
              Trust and Verify <br />
              with <span className="text-taxmin-orange">TAXMIN</span>
            </h2>

            <p className="mt-4 text-lg opacity-90">
              Platform otomatisasi pemeriksaan pajak untuk insight yang cepat,
              akurat, dan efisien — tanpa ribet.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 px-6 py-3 bg-taxmin-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition"
            >
              Mulai Sekarang
            </motion.button>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg"
              alt="Illustration"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* WHY TAXMIN */}
      <section className="px-6 py-20 bg-white">
        <motion.h3
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Kenapa Memilih TAXMIN?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Analisis Otomatis",
              desc: "TAXMIN membaca pertanyaan Anda dan langsung membuat insight.",
            },
            {
              title: "Akurat & Cepat",
              desc: "Teknologi modern yang memproses data dengan presisi.",
            },
            {
              title: "Mudah Digunakan",
              desc: "UI simple — sangat nyaman digunakan di HP maupun laptop.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h4 className="text-xl font-semibold text-taxmin-blue">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 bg-gray-50">
        <motion.h3
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bagaimana Cara Kerjanya?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-12">
          {[
            "Masukkan pertanyaan pajak",
            "Sistem memproses secara otomatis",
            "TAXMIN memberikan insight terbaik",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-taxmin-blue text-4xl font-bold">
                {i + 1}
              </div>
              <p className="mt-3 text-gray-700 font-semibold">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center bg-white text-gray-600 mt-10 border-t">
        © {new Date().getFullYear()} TAXMIN – Trust and Verify
      </footer>

    </div>
  );
}

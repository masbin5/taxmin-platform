"use client";
import { useState } from "react";

export default function QuestionPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("Ticket berhasil dibuat! (belum tersambung DB)");
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Buat Ticket Pajak</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          className="border p-3 rounded w-full"
          placeholder="Nama lengkap"
        />

        <select 
          className="border p-3 rounded w-full"
        >
          <option>PPh</option>
          <option>PPN</option>
          <option>PBB</option>
          <option>Lainnya</option>
        </select>

        <textarea 
          className="border p-3 rounded w-full"
          rows={5}
          placeholder="Deskripsi masalah pajak"
        />

        <button className="bg-[#FF6D1F] w-full py-3 text-white rounded-lg font-medium">
          Kirim Ticket
        </button>
      </form>

      <p className="mt-4 text-green-700">{status}</p>
    </div>
  );
}

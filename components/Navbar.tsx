"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAF3E1] border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          tax<span className="text-orange-500">min</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/insight">Insight</Link>
          <Link href="/question">Question</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-64 bg-[#FAF3E1] p-6 space-y-4">
            <button
              onClick={() => setOpen(false)}
              className="text-right w-full text-xl"
            >
              ✕
            </button>

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/insight" onClick={() => setOpen(false)}>Insight</Link>
            <Link href="/question" onClick={() => setOpen(false)}>Question</Link>
            <Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF3E1]/90 backdrop-blur border-b border-orange-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-[#222]">
          taxmin
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/insight">Insight</Link>
          <Link href="/question">Question</Link>
        </div>

        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <Link href="/insight" onClick={() => setOpen(false)}>Insight</Link>
          <Link href="/question" onClick={() => setOpen(false)}>Question</Link>
        </div>
      )}
    </nav>
  );
}

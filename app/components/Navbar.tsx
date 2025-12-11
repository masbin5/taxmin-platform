"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FAF3E1] border-b border-orange-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <img src="/logo-taxmin.jpg" className="w-10 h-10 rounded" />
          <span className="font-bold text-lg text-[#222]">TAXMIN</span>
        </div>

        <div className="hidden md:flex gap-6 text-[#222] font-medium">
          <Link href="/">Home</Link>
          <Link href="/insight">Insight</Link>
          <Link href="/question">Question</Link>
        </div>

        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-[#222] font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/insight" onClick={() => setOpen(false)}>Insight</Link>
          <Link href="/question" onClick={() => setOpen(false)}>Question</Link>
        </div>
      )}
    </nav>
  );
}

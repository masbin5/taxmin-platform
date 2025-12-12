"use client";

import StatCard from "@/components/StatCard";
import ProgressBar from "@/components/ProgressBar";
import ScrollReveal from "@/components/ScrollReveal";
import InsightChart from "@/components/InsightChart";
import InsightCMS from "@/components/InsightCMS";

export default function DashboardPage() {
  return (
    <div className="px-6 py-24 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-10">
        Dashboard Admin
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ScrollReveal><StatCard label="Total Insight" value={42} /></ScrollReveal>
        <ScrollReveal delay={0.1}><StatCard label="Pertanyaan" value={128} /></ScrollReveal>
        <ScrollReveal delay={0.2}><StatCard label="User" value={356} /></ScrollReveal>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">
          Progress Konten
        </h2>
        <ProgressBar value={68} />
      </div>

      <InsightChart />
      <InsightCMS />

    </div>
  );
}

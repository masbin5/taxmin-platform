"use client";
import { motion } from "framer-motion";

export default function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-gray-500 text-sm">{label}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </motion.div>
  );
}

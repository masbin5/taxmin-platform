"use client";
import { motion } from "framer-motion";

export default function ProgressBar({
  value,
}: {
  value: number;
}) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 0.8 }}
        className="h-3 rounded-full bg-[#FF6D1F]"
      />
    </div>
  );
}

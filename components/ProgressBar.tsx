"use client";
import { motion } from "framer-motion";

export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 h-3 rounded overflow-hidden">
      <motion.div
        className="h-3 bg-orange-500"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}

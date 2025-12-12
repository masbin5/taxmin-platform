"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", insight: 5 },
  { name: "Feb", insight: 12 },
  { name: "Mar", insight: 18 },
  { name: "Apr", insight: 30 },
];

export default function InsightChart() {
  return (
    <div className="mt-20 bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Insight Growth
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="insight"
            stroke="#f97316"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

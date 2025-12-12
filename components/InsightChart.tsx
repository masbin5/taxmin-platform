"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", views: 400 },
  { name: "Feb", views: 700 },
  { name: "Mar", views: 900 },
  { name: "Apr", views: 1200 },
  { name: "Mei", views: 1500 },
];

export default function InsightChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-10">
      <h3 className="font-semibold mb-4">Insight Views</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#FF6D1F"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// components/Chart.tsx
"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  data: { date: string; amount: number }[];
};

export default function Chart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#7C3AED" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

import InsightCard from "@/components/InsightCard";
import Chart from "@/components/Chart";
import { getMonthlySleep } from "@/lib/sleepInsights";

export default async function MonthlyInsights({ userId }: { userId: string }) {
  const data = await getMonthlySleep(userId);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Monthly Sleep Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <InsightCard title="Total Sleep (hrs)" value={data.totalHours.toFixed(1)} />
        <InsightCard title="Average Sleep" value={data.avgHours.toFixed(1)} />
        <InsightCard title="Best Sleep" value={data.bestSleep.toFixed(1)} />
        <InsightCard title="Worst Sleep" value={data.worstSleep.toFixed(1)} />
      </div>
      <Chart data={data.records.map(r => ({ date: r.date.toISOString().split("T")[0], amount: r.amount }))} />
    </div>
  );
}

import InsightCard from "@/components/InsightCard";
import Chart from "@/components/Chart";
import { getWeeklySleep } from "@/lib/sleepInsights";

export default async function WeeklyInsights({ userId }: { userId: string }) {
  const data = await getWeeklySleep(userId);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Weekly Sleep Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InsightCard title="Total Sleep (hrs)" value={data.totalHours.toFixed(1)} />
        <InsightCard title="Average Sleep" value={data.avgHours.toFixed(1)} />
        <InsightCard title="Records" value={data.records.length} />
      </div>
      <Chart data={data.records.map(r => ({ date: r.date.toISOString().split("T")[0], amount: r.amount }))} />
    </div>
  );
}

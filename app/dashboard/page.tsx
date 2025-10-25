import WeeklyInsights from "./WeeklyInsights";
import MonthlyInsights from "./MonthlyInsights";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) return <Guest />;

  return (
    <main className="max-w-7xl mx-auto p-4 space-y-12">
      <h1 className="text-3xl font-bold text-purple-600">Sleep Dashboard</h1>
      <WeeklyInsights userId={user.id} />
      <MonthlyInsights userId={user.id} />
    </main>
  );
}

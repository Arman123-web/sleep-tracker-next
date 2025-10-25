import { db } from "./db";
import { subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from "date-fns";

export async function getWeeklySleep(userId: string) {
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 1 }); // Monday
  const end = endOfWeek(today, { weekStartsOn: 1 });

  const records = await db.record.findMany({
    where: {
      userId,
      date: { gte: start, lte: end },
    },
    orderBy: { date: "asc" },
  });

  const totalHours = records.reduce((sum, r) => sum + r.amount, 0);
  const avgHours = records.length ? totalHours / records.length : 0;

  return { records, totalHours, avgHours };
}

export async function getMonthlySleep(userId: string) {
  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);

  const records = await db.record.findMany({
    where: {
      userId,
      date: { gte: start, lte: end },
    },
    orderBy: { date: "asc" },
  });

  const totalHours = records.reduce((sum, r) => sum + r.amount, 0);
  const avgHours = records.length ? totalHours / records.length : 0;

  const bestSleep = records.reduce((max, r) => (r.amount > max ? r.amount : max), 0);
  const worstSleep = records.reduce((min, r) => (r.amount < min ? r.amount : min), Infinity);

  return { records, totalHours, avgHours, bestSleep, worstSleep };
}

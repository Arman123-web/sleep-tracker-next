import { NextResponse } from "next/server";
import { generateAISleepAdvice } from "@/lib/aiSleepAdvisor";

export async function GET() {
  try {
    const advice = await generateAISleepAdvice({
      avgSleep: 6.8,
      sleepQuality: 75,
      bedtime: "11:00 PM",
    });

    return NextResponse.json({ advice });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to get AI advice" }, { status: 500 });
  }
}

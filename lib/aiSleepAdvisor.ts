// lib/aiSleepAdvisor.ts
import { openai } from "./openai";

export async function generateAISleepAdvice(userData: {
  avgSleep: number;
  sleepQuality: number;
  bedtime: string;
}) {
  const prompt = `
  You are a friendly sleep coach. The user sleeps ${userData.avgSleep} hours
  with ${userData.sleepQuality}% sleep quality, usually goes to bed at ${userData.bedtime}.
  Give 3 short, personalized tips to improve their sleep quality.
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message?.content || "No advice available.";
}

// app/api/chatbot/route.ts
import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Send message to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use gpt-4o or gpt-4o-mini for efficiency
      messages: [
        {
          role: "system",
          content:
            "You are SleepMate, a friendly AI assistant that helps users improve sleep habits, manage stress, and track well-being.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.8,
      max_tokens: 150,
    });

    const reply = response.choices[0].message?.content || "I'm not sure about that.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch AI response" },
      { status: 500 }
    );
  }
}

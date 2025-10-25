"use client";
import { useState } from "react";

export default function SleepAdviceCard() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    const res = await fetch("/api/recommendations");
    const data = await res.json();
    setAdvice(data.advice);
    setLoading(false);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">💤 AI Sleep Coach</h2>
      <p className="text-sm mb-4">
        Get smart AI tips to improve your sleep habits.
      </p>
      <button
        onClick={fetchAdvice}
        className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200"
        disabled={loading}
      >
        {loading ? "Generating..." : "Get AI Recommendation"}
      </button>

      {advice && (
        <div className="mt-4 bg-white text-black p-3 rounded-lg">
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
}

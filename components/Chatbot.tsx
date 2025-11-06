// // components/Chatbot.tsx
// "use client";

// import { useState } from "react";

// export default function Chatbot() {
//   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);

//     const res = await fetch("/api/chatbot", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: input }),
//     });

//     const data = await res.json();
//     const aiMessage = { sender: "bot", text: data.reply };

//     setMessages((prev) => [...prev, aiMessage]);
//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-lg border p-4">
//       <h3 className="text-lg font-semibold text-purple-600 mb-2">
//         💤 SleepMate AI
//       </h3>
//       <div className="h-64 overflow-y-auto mb-3 space-y-2">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`p-2 rounded-lg ${
//               msg.sender === "user"
//                 ? "bg-purple-500 text-white self-end text-right"
//                 : "bg-gray-100 text-gray-800"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//         {loading && <p className="text-gray-500 text-sm">Thinking...</p>}
//       </div>
//       <div className="flex gap-2">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask about your sleep..."
//           className="flex-1 border border-gray-300 rounded-lg px-2 py-1 text-sm"
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-purple-600 text-white rounded-lg px-3 py-1 text-sm hover:bg-purple-700"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

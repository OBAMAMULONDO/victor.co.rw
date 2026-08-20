"use client";

import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent, FormEvent } from "react";
import { FiSend } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const STORAGE_KEY = "victor_ai_chat_history";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

interface AiModelProps {
  onClose?: () => void;
}

export default function AiModel({ onClose }: AiModelProps) {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (error) {
          console.error("Failed to parse stored chat history:", error);
        }
      }
    }
    return [];
  });

  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const hasStartedConversation = messages.length > 0;

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll conversation stream to latest message
  useEffect(() => {
    if (hasStartedConversation) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, hasStartedConversation]);

  // Dynamic height resizing for textarea
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120,
      )}px`;
    }
  };

  // Submit on Enter (Shift + Enter inserts a new line)
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const userMsg: Message = { id: Date.now(), sender: "user", text: userText };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        const aiReply: Message = {
          id: Date.now() + 1,
          sender: "ai",
          text: data.reply,
        };
        setMessages((prev) => [...prev, aiReply]);
      } else {
        throw new Error(data.message || "Failed to fetch response");
      }
    } catch (error) {
      console.error("API Error:", error);
      const errorReply: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: "Sorry, I couldn't process your request right now. Please try again later or reach Victor directly on WhatsApp at +250 787 8800 64!",
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/* Outer Card Container */}
      <div className="relative flex flex-col justify-between w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden h-[520px] max-h-[90vh] p-8">
        {/* Full Height & Width Image Banner */}
        {!hasStartedConversation && (
          <div className="absolute inset-0 w-full h-full z-0">
            <img
              src="./image.webp"
              alt="AI Banner"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/60" />
          </div>
        )}

        {/* Action Controls (Close & Clear) */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
          {hasStartedConversation && (
            <button
              onClick={handleClearHistory}
              className="text-xs text-zinc-400 hover:text-red-400 bg-zinc-900/80 px-2.5 py-1 rounded-lg border border-zinc-700 transition cursor-pointer"
              title="Clear chat history"
            >
              Clear
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="text-zinc-300 hover:text-white text-2xl transition cursor-pointer"
              aria-label="Close modal"
            >
              <IoMdClose />
            </button>
          )}
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col gap-1 text-left">
          <p className="font-thin tracking-wide text-white text-4xl sm:text-5xl drop-shadow-md">
            Meet the
          </p>
          <span className="text-orange-500 font-bold text-4xl sm:text-5xl drop-shadow-md">
            Victor AI
          </span>
        </div>

        {/* Middle Chat Stream */}
        {hasStartedConversation && (
          <div className="relative z-10 flex-1 overflow-y-auto space-y-3 my-4 pr-1 text-sm max-h-[300px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-orange-500 text-white rounded-br-none font-medium"
                      : "bg-zinc-900/90 text-zinc-100 rounded-bl-none border border-zinc-700 backdrop-blur-md whitespace-pre-wrap"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900/90 border border-zinc-700 text-zinc-400 px-4 py-2 rounded-2xl rounded-bl-none text-xs animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Form */}
        <div className="relative z-10 mt-auto pt-2">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <textarea
              ref={textareaRef}
              rows={1}
              name="QUESTION"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Your Question ?"
              id="user_question_to_ai"
              className="w-full bg-white/95 text-black placeholder:text-zinc-500 rounded-2xl py-3 pl-4 pr-12 text-sm outline-none resize-none max-h-[120px] overflow-y-auto transition-all shadow-lg"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 disabled:opacity-40 transition cursor-pointer"
            >
              <FiSend className="text-base" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
"use client";

import {
  EnvelopeIcon,
  PhoneIcon,
  MapMarkerIcon,
  PaperPlaneIcon,
} from "./icons";
import { useEffect } from "react";
import { useState } from "react";
import SendMessageButton from "./sendMessage";

export default function Contactpage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  
  // Inside your component function:
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle"); // Or whatever your default/reset status value is (e.g., null)
      }, 4000); // Clears after 4 seconds

      return () => clearTimeout(timer); // Cleanup the timer if component unmounts or status changes
    }
  }, [status]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ username: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send message.");
    }
  };

  return (
    <div
      className="bg-white md:flex-row shadow-2xl justify-center items-center dark:shadow-white/30 dark:shadow-xl dark:bg-black p-4 sm:p-6 md:p-10 w-full max-w-6xl h-fit rounded-3xl flex flex-col gap-6 md:gap-10"
      id="contact"
    >
      <div className="flex flex-col w-full gap-6 md:gap-10">
        <div className="flex flex-row gap-3 items-center border-amber-600 dark:border-yellow-500 border-2 w-fit px-3 py-1.5 rounded-full">
          <div className="h-8 w-8 sm:h-10 sm:w-10 bg-black dark:bg-white rounded-full flex justify-center items-center">
            <EnvelopeIcon className="text-white dark:text-black w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <strong className="text-amber-600 dark:text-yellow-500 text-sm sm:text-base">
            Start A Project
          </strong>
        </div>

        <h2 className="font-[900] [-webkit-text-stroke:1.5px_black] dark:[-webkit-text-stroke:1.5px_white] text-2xl sm:text-3xl md:text-4xl w-full tracking-tight">
          Let&apos;s Build Your Digital Future
        </h2>

        <div>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl lg:text-2xl">
            Ready to launch your next project? Fill out the form below or reach
            out directly to start a conversation about your business needs and
            how we can help you grow.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-8">
          <div className="flex flex-row items-center gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10 bg-black dark:bg-white rounded-full flex justify-center items-center text-white dark:text-black shrink-0">
              <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="min-w-0">
              <a
                href="mailto:obamamulondo6@gmail.com"
                className="font-bold hover:underline text-sm sm:text-base break-all sm:break-normal text-zinc-900 dark:text-white"
              >
                obamamulondo6@gmail.com
              </a>
            </span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10 bg-black dark:bg-white rounded-full flex justify-center items-center text-white dark:text-black shrink-0">
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span>
              <a
                href="tel:+250787880064"
                className="hover:underline font-bold text-sm sm:text-base text-zinc-900 dark:text-white"
              >
                +250 787 8800 64
              </a>
            </span>
          </div>

          <div className="flex flex-row items-center gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10 bg-black font-bold dark:bg-white rounded-full flex justify-center items-center text-white dark:text-black shrink-0">
              <MapMarkerIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white">
              Rwanda, Kigali, Remera-Rukoma
            </span>
          </div>
        </div>
      </div>

      <div className="bg-amber-500 dark:bg-amber-500 w-full h-fit p-4 sm:p-6 md:p-10 rounded-3xl text-zinc-950">
        {status === "success" && (
          <div className="flex items-center justify-between gap-3 text-emerald-950 bg-emerald-100/90 h-fit w-fit p-3 sm:p-4 mb-4 sm:mb-5 rounded-2xl font-bold text-sm sm:text-base border border-emerald-300">
            <p>Message sent successfully! Thank you.</p>
            <button
              onClick={() => setStatus("idle")}
              className="text-emerald-800 hover:text-emerald-950 px-1.5 rounded-lg text-lg font-bold"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center justify-between gap-3 text-red-950 bg-red-100/90 font-bold text-sm sm:text-base p-3 rounded-2xl mb-3 border border-red-300">
            <p>{errorMsg}</p>
            <button
              onClick={() => setStatus("idle")}
              className="text-red-800 hover:text-red-950 px-1.5 rounded-lg text-lg font-bold"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:gap-4 w-full"
        >
          <div>
            <label
              htmlFor="username"
              className="ml-2 font-black text-sm sm:text-base text-zinc-950 block"
            >
              Your Name:
            </label>
            <input
              id="username"
              type="text"
              required
              className="bg-white/90 text-zinc-950 placeholder-zinc-500 pl-3 h-12 sm:h-14 md:h-15 rounded-2xl w-full mt-1.5 sm:mt-2 focus:outline-none focus:ring-2 focus:ring-zinc-950 text-sm sm:text-base font-medium"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="ml-2 font-black text-sm sm:text-base text-zinc-950 block"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              required
              className="bg-white/90 text-zinc-950 placeholder-zinc-500 pl-3 h-12 sm:h-14 md:h-15 rounded-2xl w-full mt-1.5 sm:mt-2 focus:outline-none focus:ring-2 focus:ring-zinc-950 text-sm sm:text-base font-medium"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="ml-2 font-black text-sm sm:text-base text-zinc-950 block"
            >
              Message:
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              className="bg-white/90 text-zinc-950 placeholder-zinc-500 pl-3 pt-3 h-40 sm:h-48 md:h-[223px] rounded-2xl w-full resize-none focus:outline-none focus:ring-2 focus:ring-zinc-950 text-sm sm:text-base font-medium"
              placeholder="Message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <SendMessageButton />
        </form>
      </div>
    </div>
  );
}

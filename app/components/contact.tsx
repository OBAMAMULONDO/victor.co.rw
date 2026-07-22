"use client";

import { EnvelopeIcon, PhoneIcon, MapMarkerIcon, PaperPlaneIcon } from "./icons";
import { useState } from "react";

export default function Contactpage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
        <div className="bg-white md:flex-row shadow-2xl justify-center items-center dark:shadow-white/30 dark:shadow-xl dark:bg-black p-4 sm:p-6 md:p-10 w-full max-w-6xl h-fit rounded-3xl flex flex-col gap-6 md:gap-10" id="contact">
            <div className="flex flex-col w-full gap-6 md:gap-10">
                <div className="flex flex-row gap-3 items-center border-yellow-500 border-2 w-fit px-3 py-1.5 rounded-full">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 bg-black dark:bg-white rounded-full flex justify-center items-center">
                        <EnvelopeIcon className="text-white dark:text-black w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <strong className="text-yellow-500 text-sm sm:text-base">Start A Project</strong>
                </div>

                <div className="font-[900] [-webkit-text-stroke:1.5px_black] dark:[-webkit-text-stroke:1.5px_white] text-2xl sm:text-3xl md:text-4xl w-full tracking-tight">
                    Let&apos;s Build Your Digital Future
                </div>

                <div>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl">
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
                            <a href="mailto:obamamulondo6@gmail.com" className="font-bold hover:underline text-sm sm:text-base break-all sm:break-normal">
                                obamamulondo6@gmail.com
                            </a>
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-3">
                        <div className="h-9 w-9 sm:h-10 sm:w-10 bg-black dark:bg-white rounded-full flex justify-center items-center text-white dark:text-black shrink-0">
                            <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span>
                            <a href="tel:+250787880064" className="hover:underline font-bold text-sm sm:text-base">
                                +250 787 8800 64
                            </a>
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-3">
                        <div className="h-9 w-9 sm:h-10 sm:w-10 bg-black font-bold dark:bg-white rounded-full flex justify-center items-center text-white dark:text-black shrink-0">
                            <MapMarkerIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="text-sm sm:text-base">Rwanda, Kigali, Remera-Rukoma</span>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-500 dark:bg-yellow-500 w-full h-fit p-4 sm:p-6 md:p-10 rounded-3xl">
                {status === "success" && (
                    <p className="text-green-700 dark:text-green-400 bg-green-400/20 h-fit w-fit p-3 sm:p-4 mb-4 sm:mb-5 rounded-2xl font-bold text-center text-sm sm:text-base">
                        Message sent successfully! Thank you {formData.username}.
                    </p>
                )}
                {status === "loading" && (
                    <p className="text-blue-700 dark:text-blue-400 font-bold text-center text-sm sm:text-base">
                        Sending message...
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-700 dark:text-red-400 font-bold text-center text-sm sm:text-base">
                        {errorMsg}
                    </p>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 w-full">
                    <div>
                        <p className="ml-2 font-bold text-sm sm:text-base">Your Name:</p>
                        <input
                            type="text"
                            required
                            className="bg-gray-50/30 dark:bg-zinc-800 pl-3 h-12 sm:h-14 md:h-15 rounded-2xl w-full mt-1.5 sm:mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                            placeholder="Username"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <p className="ml-2 font-bold text-sm sm:text-base">Email:</p>
                        <input
                            type="email"
                            required
                            className="bg-gray-50/30 dark:bg-zinc-800 pl-3 h-12 sm:h-14 md:h-15 rounded-2xl w-full mt-1.5 sm:mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <p className="ml-2 font-bold text-sm sm:text-base">Message:</p>
                        <textarea
                            required
                            value={formData.message}
                            className="bg-gray-50/30 dark:bg-zinc-800 pl-3 pt-3 h-40 sm:h-48 md:h-[223px] rounded-2xl w-full resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                            placeholder="Message"
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-fit flex flex-row items-center gap-4 sm:gap-5 dark:bg-black dark:text-white p-1.5 sm:p-2 rounded-full h-fit bg-white text-black font-bold hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
                    >
                        <p className="h-8 w-8 sm:h-10 sm:w-10 bg-black dark:bg-white dark:text-black text-white items-center flex rounded-full justify-center">
                            <PaperPlaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </p>
                        <span className="text-sm sm:text-base pr-2 sm:pr-3">{status === "loading" ? "Sending..." : "Submit"}</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

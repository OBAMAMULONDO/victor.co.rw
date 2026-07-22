"use client"; // To render the component on the client side

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt , FaPaperPlane } from "react-icons/fa";

export default function Contactpage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    // Async submit function to hit /api/contact
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
        <div className="bg-white md:flex-row shadow-2xl justify-center items-center dark:shadow-white/30 dark:shadow-xl dark:bg-black p-10 w-full h-fit rounded-3xl flex flex-col gap-10" id="contact">
            {/* Contact Information and description */}
            <div className="flex flex-col w-100 gap-10">
                <div className="flex flex-row gap-4 items-center text-center border-yellow-500  border-2 w-fit p-2 rounded-full">
                    <div className="h-10 w-10 bg-black dark:bg-white rounded-full flex justify-center items-center">
                        <FaEnvelope className="text-white dark:text-black" />
                    </div>
                    <strong className="text-yellow-500">Start A Project</strong>
                </div>

                <div className="font-[900] [-webkit-text-stroke:1.5px_black] dark:[-webkit-text-stroke:1.5px_white] text-4xl w-75 tracking-tight">
                    Let's Build Your Digital Future
                </div>

                <div>
                    <p className="text-gray-400 text-2xl">
                        Ready to launch your next project? Fill out the form below or reach
                        out directly to start a conversation about your business needs and
                        how we can help you grow.
                    </p>
                </div>

                {/* Contact info list — Changed outer <p> to <div> */}
                <div className="flex flex-col gap-10">

                    <div className="flex flex-row items-center gap-2">
                        <div className="h-10 w-10 bg-black dark:bg-white rounded-full flex justify-center items-center text-white dark:text-black shrink-0">
                            <FaEnvelope />
                        </div>
                        <span>
                            <a href="mailto:obamamulondo6@gmail.com" className=" font-bold hover:underline">
                                obamamulondo6@gmail.com
                            </a>
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <div className="h-10 w-10 bg-black dark:bg-white rounded-full flex justify-center items-center text-white dark:text-black shrink-0">
                            <FaPhone />
                        </div>
                        <span>
                            <a href="tel:+250787880064" className="hover:underline font-bold ">
                                +250 787 8800 64
                            </a>
                        </span>
                    </div>

                    <div className="flex flex-row items-center gap-2 col-span-2">
                        <div className="h-10 w-10 bg-black font-bold  dark:bg-white rounded-full flex justify-center items-center text-white dark:text-black shrink-0">
                            <FaMapMarkerAlt />
                        </div>
                        <span>Rwanda, Kigali, Remera-Rukoma</span>
                    </div>

                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-yellow-500 dark:bg-yellow-500 w-fit h-fit p-10 rounded-3xl">
                     {/* Feedback message */}
                    {status === "success" && (
                        <p className="text-green-700 dark:text-green-400 bg-green-400/20 h-fit w-fit p-4 mb-5 rounded-2xl  font-bold text-center">
                            Message sent successfully! Thank you {formData.username}.
                        </p>
                    )}
                    {status === "loading" && (
                        <p className="text-blue-700 dark:text-blue-400 font-bold text-center">
                            Sending message...
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-red-700 dark:text-red-400 font-bold text-center">
                            ❌ {errorMsg}
                        </p>
                    )}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                    <div>
                        <p className="ml-2 font-bold">Your Name:</p>
                        <input
                            type="text"
                            required
                            className="bg-gray-50/30 dark:bg-zinc-800 pl-3 h-15 rounded-2xl w-100 mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Username"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <p className="ml-2 font-bold">Email:</p>
                        <input
                            type="email"
                            required
                            className="bg-gray-50/30 dark:bg-zinc-800 pl-3 h-15 rounded-2xl w-100 mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <p className="ml-2 font-bold">Message:</p>
                        <textarea
                            required
                            value={formData.message}
                            className="bg-gray-50/30 dark:bg-zinc-800 pl-3 pt-3 h-[223px] rounded-2xl w-100 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Message"
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-fit flex flex-row items-center gap-5 dark:bg-black  dark:text-white p-2 rounded-full  h-fit bg-white text-black  font-bold hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
                    >
                        <p className="h-10 w-10 bg-black dark:bg-white dark:text-black text-white items-center flex rounded-full justify-center"><FaPaperPlane /></p>
                        {status === "loading" ? "Sending..." : "Submit"}
                    </button>

               
                </form>
            </div>
        </div>
    );
}
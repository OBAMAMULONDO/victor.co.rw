"use client";

import { FaWhatsapp } from "react-icons/fa"; // Swapped to official WhatsApp icon

export default function WhatsappCall() {
  // WhatsApp click-to-chat link format with country code (250786621037)
  const whatsappUrl = "https://wa.me/250787880064?text=Hello%20Victor Mulondo Obama,%20I'd%20like%20to%20start%20a%20project%202ith%20you!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Call or chat on WhatsApp"
      className="fixed  bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
    >
      <FaWhatsapp className="w-7 h-7 " />
    </a>
  );
}
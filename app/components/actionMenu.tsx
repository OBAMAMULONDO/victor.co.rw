"use client";

import { useState } from "react";
import { GrAction } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { RiRobot3Line } from "react-icons/ri";

import AiModelModal from "./aiModel"; // Capitalized import
import { WhatsAppIcon } from "./icons";

export default function ActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const WhatsappCall = () => {
    const whatsappUrl =
      "https://wa.me/250787880064?text=Hello%20Victor Mulondo Obama,%20I'd%20like%20to%20start%20a%20project%20with%20you!";

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsOpen(false);
    setActiveModal(null);
  };

  return (
    <>
      {/* Outer Fixed Positioning Container */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
        {/* Floating Action Circles Stack */}
        {isOpen && (
          <div className="flex flex-col items-center gap-3 transition-all duration-300">
            {/* AI Floating Button */}
            <button
              onClick={() => {
                setActiveModal("ai");
                setIsOpen(false);
              }}
              className="w-12 h-12 rounded-full bg-[#FF6B4A] hover:bg-[#F25A38] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              title="Ask Portfolio AI"
            >
              <RiRobot3Line className="text-xl" />
            </button>

            {/* WhatsApp Floating Button */}
            <button
              onClick={() => {
                WhatsappCall();
                setActiveModal(null);
                setIsOpen(false); // Fixed: Set to false on select
              }}
              className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6 fill-current" />
            </button>
          </div>
        )}

        {/* Main Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full border-2 border-black flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
            isOpen ? "bg-red-100" : "bg-white hover:bg-gray-100"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <IoMdClose className="text-black text-2xl font-bold" />
          ) : (
            <GrAction className="text-black text-2xl font-bold" />
          )}
        </button>
      </div>

      {/* Render Active Child Component Modals */}

      {activeModal === "ai" && (
        <AiModelModal onClose={() => setActiveModal(null)} />
      )}
     
    </>
  );
}

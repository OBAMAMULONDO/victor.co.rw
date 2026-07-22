import { WhatsAppIcon } from "./icons";

export default function WhatsappCall() {
  const whatsappUrl = "https://wa.me/250787880064?text=Hello%20Victor Mulondo Obama,%20I'd%20like%20to%20start%20a%20project%20with%20you!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Call or chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}

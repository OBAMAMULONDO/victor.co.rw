"use client";

import { LuUserCheck, LuClock, LuShieldCheck, LuPhoneCall, LuCalendar } from "react-icons/lu";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-white dark:bg-zinc-950 overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 py-12" id="#home">
      
      {/* 🎨 BACKGROUND SVG BLOB LAYER */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-0 opacity-80 dark:opacity-20 flex items-center justify-center">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          preserveAspectRatio="none"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="900" height="600" fill="transparent"></rect>
          <defs>
            <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
              <stop offset="20%" stopColor="#bdb7ae" stopOpacity="1"></stop>
              <stop offset="80%" stopColor="#bdb7ae" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          
          {/* Top Right Shapes */}
          <g transform="translate(900, 0)">
            <path
              d="M0 351.5C-23.5 351.7 -47 351.8 -68.6 344.8C-90.1 337.8 -109.7 323.8 -129.3 312.3C-149 300.8 -168.6 291.9 -187.8 281C-206.9 270.2 -225.5 257.4 -242.5 242.5C-259.5 227.7 -274.9 210.7 -285.2 190.6C-295.5 170.4 -300.7 147 -301.2 124.8C-301.7 102.5 -297.4 81.3 -305 60.7C-312.6 40.1 -332.1 20 -351.5 0L0 0Z"
              fill="#eeedea"
            ></path>
            <path
              d="M0 234.4C-15.7 234.4 -31.4 234.5 -45.7 229.9C-60.1 225.2 -73.1 215.8 -86.2 208.2C-99.3 200.5 -112.4 194.6 -125.2 187.4C-138 180.1 -150.4 171.6 -161.7 161.7C-173 151.8 -183.3 140.5 -190.1 127C-197 113.6 -200.5 98 -200.8 83.2C-201.1 68.3 -198.3 54.2 -203.3 40.4C-208.4 26.7 -221.4 13.4 -234.4 0L0 0Z"
              fill="#cdc9c2"
            ></path>
            <path
              d="M0 117.2C-7.8 117.2 -15.7 117.3 -22.9 114.9C-30 112.6 -36.6 107.9 -43.1 104.1C-49.7 100.3 -56.2 97.3 -62.6 93.7C-69 90.1 -75.2 85.8 -80.8 80.8C-86.5 75.9 -91.6 70.2 -95.1 63.5C-98.5 56.8 -100.2 49 -100.4 41.6C-100.6 34.2 -99.1 27.1 -101.7 20.2C-104.2 13.4 -110.7 6.7 -117.2 0L0 0Z"
              fill="#bdb7ae"
            ></path>
          </g>

          {/* Bottom Left Shapes */}
          <g transform="translate(0, 600)">
            <path
              d="M0 -351.5C21.5 -343.9 43 -336.3 66.1 -332.5C89.3 -328.7 114.1 -328.6 129 -311.3C143.9 -294.1 148.9 -259.6 159.4 -238.6C170 -217.7 186.2 -210.4 200.8 -200.8C215.5 -191.3 228.6 -179.4 254.4 -170C280.3 -160.6 318.8 -153.5 324.8 -134.5C330.7 -115.6 304 -84.7 303.1 -60.3C302.1 -35.9 326.8 -17.9 351.5 0L0 0Z"
              fill="#eeedea"
            ></path>
            <path
              d="M0 -234.4C14.3 -229.3 28.7 -224.2 44.1 -221.7C59.5 -219.1 76 -219.1 86 -207.6C95.9 -196 99.2 -173 106.3 -159.1C113.4 -145.1 124.1 -140.3 133.9 -133.9C143.6 -127.5 152.4 -119.6 169.6 -113.3C186.9 -107 212.6 -102.3 216.5 -89.7C220.5 -77 202.7 -56.5 202 -40.2C201.4 -23.9 217.9 -12 234.4 0L0 0Z"
              fill="#cdc9c2"
            ></path>
            <path
              d="M0 -117.2C7.2 -114.6 14.3 -112.1 22 -110.8C29.8 -109.6 38 -109.5 43 -103.8C48 -98 49.6 -86.5 53.1 -79.5C56.7 -72.6 62.1 -70.1 66.9 -66.9C71.8 -63.8 76.2 -59.8 84.8 -56.7C93.4 -53.5 106.3 -51.2 108.3 -44.8C110.2 -38.5 101.3 -28.2 101 -20.1C100.7 -12 108.9 -6 117.2 0L0 0Z"
              fill="#bdb7ae"
            ></path>
          </g>
        </svg>
      </div>

      {/* 🚀 FOREGROUND HERO CONTENT */}
      <div className="relative z-10 w-full w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Word Section */}
        <div className="flex flex-col gap-6">
          <span className="text-amber-600 dark:text-amber-400 font-extrabold text-xs tracking-widest uppercase">
            THE FASTER THE BETTER
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-[1.15] [-webkit-text-stroke:0.5px_currentColor]">
            FAST, SAFE AND SECURE DEVELOPMENT
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Entrust us with the development of your product to make it more efficient, scalable, and reliant. We build modern products that outperform others on the market through years of engineering experience and dedication to our customers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black px-4 sm:px-8 md:px-12 lg:px-16 py-3.5 rounded-full transition shadow-lg shadow-amber-500/20"
            >
              <LuCalendar className="w-4 h-4" />
              <span>Check Schedule</span>
            </a>
            <a
              href="tel:0786621037"
              className="flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 hover:border-amber-500 text-zinc-800 dark:text-zinc-200 font-bold px-4 sm:px-8 md:px-12 lg:px-16 py-3.5 rounded-full transition"
            >
              <LuPhoneCall className="w-4 h-4" />
              <span>Direct Contact</span>
            </a>
          </div>

          {/* Features List Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">
                <LuUserCheck className="w-4 h-4" />
              </span>
              <span>Customer-driven</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">
                <LuClock className="w-4 h-4" />
              </span>
              <span>Time-bound</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">
                <LuShieldCheck className="w-4 h-4" />
              </span>
              <span>Safety</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image/Graphic Section */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl flex items-center justify-center">
            <img
              src="/head_out_portrait.png"
              alt="Victor Dev Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
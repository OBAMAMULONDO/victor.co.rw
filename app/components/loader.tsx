"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="loader-spinner">
          <svg viewBox="25 25 50 50">
            <circle r={20} cy={50} cx={50} />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-black tracking-tight">
            Victor<span className="text-amber-500">.dev</span>
          </h1>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
            Loading Experience...
          </p>
        </div>
      </div>

      <style>{`
        .loader-spinner svg {
          width: 4em;
          height: 4em;
          transform-origin: center;
          animation: rotate4 2s linear infinite;
        }
        .loader-spinner circle {
          fill: none;
          stroke: #f59e0b;
          stroke-width: 3;
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          stroke-linecap: round;
          animation: dash4 1.5s ease-in-out infinite;
        }
        @keyframes rotate4 {
          100% { transform: rotate(360deg); }
        }
        @keyframes dash4 {
          0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 200; stroke-dashoffset: -35px; }
          100% { stroke-dashoffset: -125px; }
        }
      `}</style>
    </div>
  );
}

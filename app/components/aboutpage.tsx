"use client";

import { CodeIcon, TerminalIcon, SparklesIcon } from "./icons";

export default function Aboutpage() {
  const skills = [
    "Frontend Development (Vue 3, Next.js, React, Tailwind CSS)",
    "Backend & Databases (Node.js, Supabase, MongoDB)",
    "TypeScript & JavaScript Architecture",
    "Cybersecurity & System Diagnostics",
    "Network Administration & Linux Environments",
    "RESTful APIs & Responsive UI/UX Design",
  ];

  return (
    <section id="about" className="relative w-full py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-xs tracking-widest uppercase">
            <SparklesIcon className="w-4 h-4" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            ENGINEERING SCALABLE WEB APPS & SECURE SYSTEMS
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base sm:text-lg">
            <p>
              Hi, I&apos;m <strong className="text-zinc-900 dark:text-white font-bold">Victor</strong>—a dedicated developer driven by a passion for building high-performance web applications and robust digital infrastructure.
            </p>
            
            <p>
              My expertise spans the modern JavaScript ecosystem, crafting clean, responsive interfaces with <span className="text-amber-600 dark:text-amber-400 font-semibold">Vue, Next.js, and Tailwind CSS</span>, paired with reliable backend systems powered by <span className="text-amber-600 dark:text-amber-400 font-semibold">Node.js, Supabase, and MongoDB</span>.
            </p>

            <p>
              Beyond standard frontend development, I hold a deep curiosity for system diagnostics, network configurations, and cybersecurity—ensuring that every product I build isn&apos;t just fast and beautiful, but inherently secure and scalable for real-world growth.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-1">
                <span className="text-3xl font-black text-amber-500">100%</span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Client Focused</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-1">
                <span className="text-3xl font-black text-amber-500">Full</span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Stack Capability</span>
              </div>

              <div className="p-4 rounded-2xl sm:col-span-1 col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-1">
                <span className="text-3xl font-black text-amber-500">24/7</span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Security Mindset</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full bg-white dark:bg-zinc-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col gap-6">
            
            <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div className="p-3 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl">
                <TerminalIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Technical Arsenal</h3>
                <p className="text-xs text-zinc-500">Tools & Methodologies</p>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  <span className="mt-1 text-amber-500 flex-shrink-0">
                    <CodeIcon className="w-4 h-4" />
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-3">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                {["Next.js", "Vue 3", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Supabase", "Linux"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:border-amber-500 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { 
  LayoutGridIcon,
  DatabaseIcon, 
  ShieldCheckIcon, 
  CheckIcon, 
  ArrowRightIcon,
  SparklesIcon,
  SmartphoneIcon
} from "./icons";

export default function Servicepage() {
  const services = [
    {
      icon: <LayoutGridIcon className="w-7 h-7 text-amber-500" />,
      title: "Custom Frontend Engineering",
      subtitle: "Vue 3 • Next.js • React • Tailwind CSS",
      description:
        "Building pixel-perfect, lightning-fast, and responsive web applications tailored for mobile and desktop screens. Styled with custom components, smooth UI interactions, and optimized rendering.",
      features: [
        "Mobile-First Responsive Layouts",
        "Clean Component Architecture",
        "SEO & High-Speed Performance",
        "Tailwind CSS & Dynamic Animations"
      ],
    },
    {
      icon: <DatabaseIcon className="w-7 h-7 text-amber-500" />,
      title: "Full-Stack Development & APIs",
      subtitle: "Node.js • Supabase • MongoDB • REST APIs",
      description:
        "Developing scalable backends, seamless database integrations, and structured endpoints to powers complex business logic, inventory systems, and enterprise portals.",
      features: [
        "MongoDB & Supabase Data Architecture",
        "Secure User Auth & Access Control",
        "RESTful API Integration",
        "Real-Time Data Handling"
      ],
    },
    {
      icon: <ShieldCheckIcon className="w-7 h-7 text-amber-500" />,
      title: "System Diagnostics & Security Hardening",
      subtitle: "Network Security • Linux • Diagnostics",
      description:
        "Applying a security-first mindset to web apps and servers. Auditing code structures, configuring server parameters, and diagnosing performance bottlenecks before deployment.",
      features: [
        "Server & Nginx Hardening",
        "Security Best Practices & Audit",
        "System & Network Diagnostics",
        "Production Build Optimization"
      ],
    },
    {
      icon: <SmartphoneIcon className="w-7 h-7 text-amber-500" />,
      title: "Custom Software Utilities & Dashboards",
      subtitle: "Business Management • Tracking Systems",
      description:
        "Engineering custom web utilities, internal stock/management tools, and dynamic dashboards designed to streamline business workflows and reporting.",
      features: [
        "Real-Time Inventory & Sales Trackers",
        "Interactive Analytics Dashboards",
        "Custom Data Validation & Logic",
        "Smooth Cross-Device Usability"
      ],
    },
  ];

  const processSteps = [
    { step: "01", name: "Requirements & Scope", desc: "Understanding the exact problem and mapping out the full architecture." },
    { step: "02", name: "Clean Engineering", desc: "Writing clean, component-driven, modular code with modern frameworks." },
    { step: "03", name: "Testing & Hardening", desc: "Verifying logic, testing endpoints, and optimizing performance across screens." },
    { step: "04", name: "Deploy & Support", desc: "Launching smoothly to hosting environments like Vercel with zero downtime." },
  ];

  return (
    <section id="service" className="relative w-full py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-hidden">
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-20">
        
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <SparklesIcon className="w-4 h-4" />
            <span>Services & Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            WHAT I CAN BUILD FOR YOU
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            From modern web applications to secure database architectures, I deliver full-stack digital solutions built for speed, reliability, and real-world scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                    {item.subtitle}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-2" />

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      <CheckIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400 cursor-pointer">
                <span>Start a Project</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
            <div>
              <span className="text-amber-400 font-extrabold text-xs tracking-widest uppercase">
                Proven Development Process
              </span>
              <h3 className="text-2xl sm:text-4xl font-black mt-2">
                HOW WE GO FROM IDEA TO DEPLOYMENT
              </h3>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              A structured engineering pipeline ensures your project stays on schedule, bug-free, and optimized for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="text-4xl font-black text-amber-400/30">
                  {p.step}
                </span>
                <h4 className="text-lg font-bold text-white">{p.name}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-2xl">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h3 className="text-2xl font-black">Have a custom software or web project in mind?</h3>
            <p className="text-sm font-medium opacity-90">Let&apos;s build something fast, secure, and ready to scale.</p>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 bg-black text-white rounded-full font-extrabold text-sm hover:bg-zinc-900 transition flex-shrink-0"
          >
            Get In Touch Now
          </a>
        </div>

      </div>
    </section>
  );
}

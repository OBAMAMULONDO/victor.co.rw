This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

🚀 Victor Dev — Interactive Developer Portfolio
High-performance, secure, and interactive portfolio built for modern web applications and resilient systems engineering.

🌟 Overview
Welcome to the source repository for Victor Dev (victor.co.rw). This interactive web application showcases my work as a Full-Stack Developer & Network Systems Engineer based in Kigali, Rwanda.

Designed with a modern dark aesthetics theme, fluid micro-interactions, responsive grid layouts, and custom interactive components, this portfolio delivers a fast, secure, and memorable experience across desktop and mobile screens.

🛠️ Tech Stack & Architecture
Frontend & UI
Framework: Next.js (React 18 / App Router) & Vue 3

Styling: Tailwind CSS with custom backdrop-blur and ambient glow overlays

Icons: React Icons (Lucide & FontAwesome modules)

Fonts: Geist & Geist Mono via next/font

Backend & Security
Databases: MongoDB & Supabase

Runtime: Node.js

Security & Infrastructure: Nginx Server Hardening, System Diagnostics, Linux Environments

✨ Key Features
⚡ Animated Splash Screen Loader: Seamless SSR-compatible client layout wrapper that renders a custom vector SVG preloader before unmasking the app.

📱 Floating Action WhatsApp Integration: Direct one-tap WhatsApp contact trigger pre-configured with active chat parameters.

🎯 Dynamic About & Services Sections: Clean grid cards detailing full-stack web engineering, API integration, and security auditing workflows.

🔍 Complete SEO & JSON-LD Setup: Injected Schema.org Person structured data, Open Graph meta tags, canonical URL verification, and Twitter cards.

🌙 Dark Mode Design System: Styled using deep zinc tones (bg-zinc-950) paired with glowing amber accents (text-amber-500).

📂 Project Structure
Plaintext
├── app/
│   ├── components/
│   │   ├── Aboutpage.tsx          # Technical story, stats, and core competencies
│   │   ├── ClientLayoutWrapper.tsx # Client-side wrapper managing splash state
│   │   ├── loader.tsx             # Animated SVG preloader
│   │   ├── Navbar.tsx             # Fixed translucent header with flex alignment
│   │   ├── Servicepage.tsx        # Interactive service cards & development pipeline
│   │   └── WhatsappCall.tsx       # Floating WhatsApp quick-action button
│   ├── globals.css                # Tailwind directives and custom animation keyframes
│   ├── layout.tsx                 # Root layout with SEO metadata & JSON-LD injection
│   └── page.tsx                   # Main portfolio landing page
├── public/                        # Static assets, favicons, and portrait photos
└── package.json                   # Dependencies and scripts
🚀 Getting Started
Follow these steps to run the portfolio locally:

1. Prerequisites
Ensure you have Node.js 18+ and npm installed:

Bash
node -v
npm -v
2. Clone the Repository
Bash
git clone https://github.com/OBAMAMULONDO/victor-dev-portfolio.git
cd victor-dev-portfolio
3. Install Dependencies
Bash
npm install
4. Run the Development Server
Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.

🛠️ Build & Deployment
To create an optimized production build:

Bash
npm run build
npm run start
This project is configured for single-click deployment on Vercel or custom Linux/Nginx servers.

👤 Author
Obama Mulondo Victor (Victor Dev)

📍 Location: Kigali, Rwanda

🌐 Website: victor.co.rw

🐙 GitHub: @OBAMAMULONDO

📄 License
This project is open-source and available under the MIT License.

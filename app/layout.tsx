import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. Core SEO Identity
  title: {
    default: "Obama Mulondo Victor | Full-Stack Developer & Systems Student",
    template: "%s | Obama Mulondo Victor",
  },
  description:
    "Portfolio of Obama Mulondo Victor, a Junior Frontend Developer studying software development at College Appec. Specializing in Next.js, Vue 3, Supabase, and Network Administration.",
  keywords: [
    "Obama Mulondo Victor",
    "College Appec Remera-Rukoma",
    "Frontend Developer Rwanda",
    "Next.js Portfolio",
    "Supabase Developer",
    "Network Administrator Portfolio",
  ],
  authors: [{ name: "Obama Mulondo Victor" }],
  creator: "Obama Mulondo Victor",

  // 2. Deployment Canonical URL Verification
  metadataBase: new URL("https://victor-co-rw.vercel.app"),
  alternates: {
    canonical: "/",
  },

  // 3. Open Graph (Social Previews)
  openGraph: {
    title: "Obama Mulondo Victor | Full-Stack Developer & Systems Student",
    description:
      "Explore responsive, secure web applications and resilient network architectures engineered by Victor.",
    url: "https://victor-co-rw.vercel.app",
    siteName: "Victor Dev Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Obama Mulondo Victor Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  // 4. Robot Crawler Permissions
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // AI-Targeted Structured Data Graph (Person and Educational Organization)
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://victor-co-rw.vercel.app/#person",
        "name": "Obama Mulondo Victor",
        "jobTitle": "Junior Frontend Developer",
        "url": "https://victor-co-rw.vercel.app",
"sameAs": [
           "https://github.com/OBAMAMULONDO",
           "https://linkedin.com/in/obamamulondo"
         ],
        "knowsAbout": [
          "Frontend Development",
          "Next.js",
          "React",
          "Vue 3",
          "Tailwind CSS",
          "Supabase",
          "Node.js",
          "Network Administration",
          "Cisco Packet Tracer"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "College Appec Remera-Rukoma"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://victor-co-rw.vercel.app/#profile",
        "url": "https://victor-co-rw.vercel.app",
        "mainEntity": { "@id": "https://victor-co-rw.vercel.app/#person" }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="7l0I4aE8orbD_tB08ieTY_24Ow8Ch1R0pp9NXUtJ5mo"
        />
        {/* Injecting the clean structured data for LLM Context Parsing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./components/clientLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://victor-rw.de5.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Victor Dev | Full-Stack Software Developer in Rwanda",
  description:
    "A Software Development student building responsive, secure web apps with Next.js, Node.js, TypeScript, and Tailwind CSS. Based in Kigali, Rwanda.",
  keywords: [
    "Victor Dev",
    "Obama Mulondo Victor",
    "full-stack developer in Rwanda",
    "software developer Kigali",
    "frontend developer",
    "network engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Linux",
    "Kigali",
    "Rwanda",
    "portfolio",
  ],
  authors: [{ name: "Obama Mulondo Victor" }],
  robots: "index, follow",

  // Canonical URL
  alternates: {
    canonical: BASE_URL,
  },

  // Open Graph / Facebook Meta
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Victor Dev | Full-Stack Software Developer in Rwanda",
    description:
      "Building responsive, secure web applications and scalable API architecture. Based in Kigali, Rwanda.",
    siteName: "Victor Dev Portfolio",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/head_out_portrait.png`,
        width: 1200,
        height: 630,
        alt: "Victor Dev Portrait",
      },
    ],
  },

  // Twitter Card Meta
  twitter: {
    card: "summary_large_image",
    title: "Victor Dev | Full-Stack Software Developer in Rwanda",
    description:
      "Building responsive, secure web applications and scalable API architecture. Based in Kigali, Rwanda.",
    images: [`${BASE_URL}/head_out_portrait.png`],
  },

  // Favicons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

// Enhanced JSON-LD Structured Data for AI & Search Engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Obama Mulondo Victor",
  alternateName: "Victor Dev",
  givenName: "Victor",
  familyName: "Obama Mulondo",
  jobTitle: "Full-Stack Software Developer & Network Systems Engineer",
  description:
    "Software Development student in Rwanda building responsive web applications with Next.js, TypeScript, Node.js, and modern databases.",
  url: BASE_URL,
  sameAs: ["https://github.com/OBAMAMULONDO"],
  knowsAbout: [
    "Software Development",
    "Full-Stack Web Development",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Network Systems Engineering",
    "Database Management"
  ],
  knowsLanguage: ["en", "rw"],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "College Appec Remera-Rukoma"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Inject JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
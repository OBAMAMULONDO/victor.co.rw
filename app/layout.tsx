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

export const metadata: Metadata = {
  metadataBase: new URL("https://victor.co.rw"),
  title: "Victor Dev | Full-Stack Frontend Developer & Network Systems Engineer",
  description:
    "A 2nd-year Software Development student at College Appec Remera-Rukoma building responsive, secure web apps with Next.js, Vue 3, and Tailwind CSS. Based in Kigali, Rwanda.",
  keywords: [
    "Victor Dev",
    "Obama Mulondo Victor",
    "full-stack developer",
    "frontend developer",
    "network engineer",
    "Next.js",
    "Vue 3",
    "React",
    "Tailwind CSS",
    "Supabase",
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
    canonical: "https://victor.co.rw/",
  },

  // Open Graph / Facebook Meta
  openGraph: {
    type: "website",
    url: "https://victor.co.rw/",
    title: "Victor Dev | Full-Stack Frontend Developer & Network Systems Engineer",
    description:
      "Building responsive, secure web apps and engineering resilient network architectures. Based in Kigali, Rwanda.",
    siteName: "Victor Dev",
    locale: "en_US",
    images: [
      {
        url: "https://victor.co.rw/head_out_portrait.png",
        width: 1200,
        height: 630,
        alt: "Victor Dev Portrait",
      },
    ],
  },

  // Twitter Card Meta
  twitter: {
    card: "summary_large_image",
    title: "Victor Dev | Full-Stack Frontend Developer & Network Systems Engineer",
    description:
      "Building responsive, secure web apps and engineering resilient network architectures. Based in Kigali, Rwanda.",
    images: ["https://victor.co.rw/head_out_portrait.png"],
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Obama Mulondo Victor",
  alternateName: "Victor Dev",
  givenName: "Victor",
  familyName: "Obama Mulondo",
  jobTitle: "Full-Stack Frontend Developer & Network Systems Engineer",
  description:
    "A 2nd-year Software Development student at College Appec Remera-Rukoma building responsive, secure web apps and engineering resilient network architectures.",
  url: "https://victor.co.rw/",
  sameAs: ["https://github.com/OBAMAMULONDO"],
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
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rahul Kumar | Full Stack Developer",
  description:
    "Senior Full Stack Developer with 8+ years building enterprise applications using React.js, Next.js, NestJS, and GraphQL. Open to opportunities in Dubai, UAE, USA, Canada, UK, Germany, Australia, New Zealand and Europe.",
  keywords: [
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "NestJS",
    "GraphQL",
    "TypeScript",
    "Senior Developer Dubai",
    "Full Stack Developer UAE",
    "Full Stack Developer Dubai",
    "Software Engineer Dubai",
    "React Developer UAE",
    "Full Stack Developer Canada",
    "Full Stack Developer UK",
    "Full Stack Developer Germany",
    "Full Stack Developer Australia",
    "Enterprise Web Development",
    "Technical Consultant",
  ],
  authors: [{ name: "Rahul Kumar" }],
  openGraph: {
    title: "Rahul Kumar | Full Stack Developer",
    description:
      "Senior Full Stack Developer with 8+ years building enterprise applications using React.js, Next.js, NestJS, and GraphQL. Open to opportunities in Dubai, UAE, USA, Canada, UK, Germany, Australia, New Zealand and Europe.",
    type: "website",
    url: "https://www.rahuljavascript.xyz",
    images: [
      {
        url: "https://www.rahuljavascript.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Kumar | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar | Full Stack Developer",
    description:
      "Senior Full Stack Developer with 8+ years in React.js, Next.js, NestJS & GraphQL. Open to Dubai, UAE, USA, Canada, UK, Germany, Australia & Europe.",
    images: ["https://www.rahuljavascript.xyz/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

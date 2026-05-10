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
    "Senior Full Stack Developer specializing in React.js, Next.js, NestJS, GraphQL and scalable enterprise applications.",
  keywords: [
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "NestJS",
    "GraphQL",
    "TypeScript",
    "Bengaluru",
  ],
  authors: [{ name: "Rahul Kumar" }],
  openGraph: {
    title: "Rahul Kumar | Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in React.js, Next.js, NestJS, GraphQL and scalable enterprise applications.",
    type: "website",
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

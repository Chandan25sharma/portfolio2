import type { Metadata } from "next";
import { Inter, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Chandan Sharma — Full-Stack & AI Engineer",
  description:
    "Portfolio of Chandan Sharma — building AI agents, e-commerce platforms, internal tools, Dynamics 365 and ERP systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ubuntuMono.variable} antialiased bg-bg text-fg`}
      >
        {children}
      </body>
    </html>
  );
}

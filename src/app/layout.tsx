import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CartCloudy - Premium Digital Subscriptions",
  description:
    "Your one-stop shop for premium digital subscriptions at unbeatable prices. Get Canva Pro, ChatGPT Plus, Netflix, and more!",
  keywords: [
    "digital subscriptions",
    "premium accounts",
    "Canva Pro",
    "ChatGPT Plus",
    "Netflix",
    "software subscriptions",
  ],
  authors: [{ name: "CartCloudy" }],
  openGraph: {
    title: "CartCloudy - Premium Digital Subscriptions",
    description:
      "Your one-stop shop for premium digital subscriptions at unbeatable prices.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CartCloudy - Premium Digital Subscriptions",
    description:
      "Your one-stop shop for premium digital subscriptions at unbeatable prices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

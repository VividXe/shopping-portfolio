import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop-Wise",
  description:
    " ShopWise is your intelligent shopping companion designed to simplify your shopping experience. From groceries to gadgets, fashion to furniture, ShopWise empowers you with smart features to make informed decisions effortlessly. Explore curated collections, compare prices across stores, and track your orders seamlessly—all in one app. Whether you're hunting for deals or stocking up on essentials, ShopWise ensures you shop wisely every time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Analytics />
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}

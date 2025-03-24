import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InfluencerIQ - The Ultimate Influencer Data Platform",
  description: "Access comprehensive influencer analytics and insights across social media platforms. Find the perfect influencers for your marketing campaigns with detailed engagement metrics, audience demographics, and performance data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equals - The Connected Spreadsheet",
  description: "Track ARR, SaaS metrics, and more with live data from Stripe, Salesforce, Hubspot, and SQL—no CSVs required. Build live dashboards and pivot tables in seconds.",
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

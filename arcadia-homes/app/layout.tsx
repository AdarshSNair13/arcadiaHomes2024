import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcadia Homes",
  description: "CONSTRUCTION COMPANY at THIRUVANANTHAPURAM"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body suppressHydrationWarning={true}>
        {children}
        </body>
    </html>
  );
}

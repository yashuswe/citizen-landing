import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Citizenwave",
  description: "The wave that moves forward",
  icons : {
    icon : "/assets/image.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/public/favicon.ico" sizes="any"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

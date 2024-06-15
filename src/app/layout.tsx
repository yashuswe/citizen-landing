import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Citizenwave",
  description: "The wave that moves forward",
  icons : {
    icon : "/favicon.ico"
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
      <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" sizes="any"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";
import { Header } from "@/shared/components";

const myFont = localFont({src: '../fonts/VelaSans-GX.ttf'})

export const metadata: Metadata = {
  title: "Edu Future"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

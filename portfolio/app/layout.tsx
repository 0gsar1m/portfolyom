import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Emir Kaan Oğşarim | Portfolio",
  description: "Software Engineering Student - Backend & AI projects",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-[#F5F1E9] text-[#2B2D42]">
        <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
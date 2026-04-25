import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const graffitiFont = localFont({
  src: "../../public/font/GraffitiXenoa-Regular.otf",
  variable: "--font-graffiti",
});

export const metadata: Metadata = {
  title: "Luewire | Frontend Developer",
  description: "Experienced curator of digital user experiences. Specializing in modern web platforms.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className={`${plusJakartaSans.variable} ${graffitiFont.variable}`}>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Providers from "~/app/Providers";
import Header from "~/app/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webify",
  description: "A fake website to showcase my web development skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <Providers>
          <div className="mx-auto grid min-h-dvh grid-cols-trick grid-rows-[1fr_auto]">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

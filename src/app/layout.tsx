import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";

import type { Metadata } from "next";
import { headers } from "next/headers";

import { Toaster } from "@/components/ui/toaster";

import { CookiesConsent } from "@/components/cookies-consent";
import GoogleAnalytics from "@/components/google-analytics";
import "./globals.css";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import Web3ModalProvider from "@/context/wallet";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SmartWhales AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html className={inter.variable} lang="en">
      <body className="bg-black text-white">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
        <Toaster />
        <CookiesConsent />
      </body>
    </html>
  );
}

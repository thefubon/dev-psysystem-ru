// /app/layout.tsx
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { PlayerProvider } from "@/context/PlayerContext";
import Navbar from "@/components/Navbar";
import PanelPlayer from "@/components/PanelPlayer";
import TabBar from "@/components/TabBar";
import Footer from "@/components/Footer";
import TailwindIndicator from "@/components/Tailwind-Indicator";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "PsySystem Records | v2.0 (Beta 2)",
  description: "Сделано в Fubon",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-foreground font-stolzl text-background antialiased",
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PlayerProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <PanelPlayer />
              <TabBar />

              <TailwindIndicator />
            </PlayerProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moe Kyaw Aung | Android Senior Developer",
  description:
    "Android Senior Developer with 12 years of experience building secure, scalable, and user‑friendly mobile applications with Kotlin, Jetpack Compose, Firebase, and CI/CD.",
  openGraph: {
    title: "Moe Kyaw Aung",
    description:
      "Android Senior Developer | Kotlin | Jetpack Compose | Clean Architecture | Firebase | CI/CD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@moekyawaung",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-bg-dark text-text-light`}
        style={{
          "--bg-dark": "#0b0b1a",
          "--bg-card": "#1a1a2e",
          "--primary": "#00d9ff",
          "--accent": "#ff00aa",
          "--text-light": "#ffffff",
          "--text-muted": "#a8b3c5",
          "--border-glow": "rgba(0, 217, 255, 0.3)",
          "--primary-shadow": "0 0 15px #00d9ff",
          "--accent-shadow": "0 0 15px #ff00aa",
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}

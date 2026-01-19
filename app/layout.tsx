import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "FASDiagnostics - Professional Medical Laboratory Services",
  description:
    "FASDiagnostics offers comprehensive medical laboratory testing services including clinical chemistry, hematology, histopathology, immunology, microbiology, and parasitology. Quality testing, quick results, trusted professionals.",
  keywords:
    "medical laboratory, diagnostics, clinical chemistry, hematology, histopathology, immunology, microbiology, parasitology, medical testing, lab services, healthcare diagnostics",
  generator: "Next.js",
  metadataBase: new URL("https://fasdiagnostics.com"),

    icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  
  openGraph: {
    title: "FASDiagnostics - Professional Medical Laboratory Services",
    description: "Comprehensive medical laboratory testing with quality results and trusted professionals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FASDiagnostics - Professional Medical Laboratory Services",
    description: "Comprehensive medical laboratory testing with quality results and trusted professionals.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${dmSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

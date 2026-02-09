import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteNav } from "@/components/site-nav"
import { ContactFooter } from "@/components/contact-footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Melissa Karam | Cinematographer & Camera Assistant",
  description:
    "Portfolio of Melissa Karam -- Cinematographer, Camera Assistant, and Lighting Technician. Crafting visual stories through light and motion.",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <SiteNav />
        <main>{children}</main>
        <ContactFooter />
        <Analytics />
      </body>
    </html>
  )
}

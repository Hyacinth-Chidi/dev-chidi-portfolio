import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CursorEffects from "@/components/cursor-effects"
import CursorTest from "@/components/cursor-test"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dev Chidi | Web & Mobile Developer",
  description:
    "Professional portfolio of Dev Chidi, a web and mobile app developer specializing in creating stunning digital experiences.",
  icons: {
    icon: [
      {
        url: "/placeholder-logo.png",
        href: "/placeholder-logo.png",
      },
    ],
    apple: [
      {
        url: "/placeholder-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/placeholder-logo.png" />
        <link rel="apple-touch-icon" href="/placeholder-logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <CursorEffects />
          <CursorTest />
        </ThemeProvider>
      </body>
    </html>
  )
}

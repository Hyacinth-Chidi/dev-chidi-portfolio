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
  metadataBase: new URL("https://dev-chidi.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3B82F6"
      }
    ]
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Dev Chidi | Web & Mobile Developer",
    description: "Professional portfolio of Dev Chidi, a web and mobile app developer specializing in creating stunning digital experiences.",
    siteName: "Dev Chidi Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Dev Chidi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Chidi | Web & Mobile Developer",
    description: "Professional portfolio of Dev Chidi, a web and mobile app developer specializing in creating stunning digital experiences.",
    images: ["/logo.png"],
    creator: "@hyacinth_jeo",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

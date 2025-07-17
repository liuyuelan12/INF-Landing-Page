import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Infinite Alliance - Web3 Investment & Incubation",
  description:
    "Leading Web3 investment and incubation institution focused on blockchain innovation, DeFi, and emerging technologies. Professional investment strategies for the decentralized future.",
  keywords: "Web3, blockchain, investment, incubation, DeFi, cryptocurrency, venture capital, startup funding",
  authors: [{ name: "Infinite Alliance" }],
  creator: "Infinite Alliance",
  publisher: "Infinite Alliance",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Infinite Alliance - Web3 Investment & Incubation",
    description:
      "Leading Web3 investment and incubation institution focused on blockchain innovation, DeFi, and emerging technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Alliance - Web3 Investment & Incubation",
    description:
      "Leading Web3 investment and incubation institution focused on blockchain innovation, DeFi, and emerging technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}

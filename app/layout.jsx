import React from "react"
import { Metadata } from "next"
import { Barlow } from "next/font/google"
import "./globals.css"


const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
})

export const metadata = {
  title: "NextGen Technologies",
  description: "Simplifying Operations, Enabling Growth, and Enhancing Productivity Through Expert Virtual Assistance.",
  icons: {
    icon: "/TabLogo/logo.JPG", // or "/favicon.png" depending on your file
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${barlow.variable} font-sans`} suppressHydrationWarning={true}>
          <div className="relative overflow-hidden">
            <main className="min-h-screen">{children}</main>
          </div>
      </body>
    </html>
  )
}


import './globals.css'
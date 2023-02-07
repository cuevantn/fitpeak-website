"use client"

import { Inter as FontSans } from "@next/font/google"

import "@/styles/globals.css"

import Header from "@/components/Header"
import NextThemeProvider from "@/components/NextThemeProvider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

interface MainLayoutProps {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <html lang="es" className={fontSans.className}>
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50">
        <NextThemeProvider>
          <Header />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  )
}

export default Layout

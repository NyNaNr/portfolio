"use client"
import "./globals.css"
import { Inter } from "next/font/google"
import { useLocalStorage } from "../../hooks"
import { useReducer } from "react"
import { initialState, reducer } from "./reducer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [storedTheme] = useLocalStorage("theme", "dark")
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

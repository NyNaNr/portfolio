"use client"
import { useState, createContext } from "react"
import { ThemeProvider } from "../../components/ThemeProvider"

import Navbar from "@/components/Navbar/Navbar"

export const themeContext = createContext()

export default function HomeLayout({ children }) {
  const [themeId, setThemeId] = useState("light")
  const value = {
    themeId,
    setThemeId,
  }
  return (
    <>
      <ThemeProvider themeId={themeId}>
        <themeContext.Provider value={value}>
          <Navbar />
          {/*<Intro /> */}
          {children}
          {/*<Intro /> */}

          {/*<web紹介 /> */}
          {/*<技術紹介 /> */}
        </themeContext.Provider>
      </ThemeProvider>
    </>
  )
}

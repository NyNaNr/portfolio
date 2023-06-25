"use client"
import { useState } from "react"
import { ThemeProvider } from "../../components/ThemeProvider"
import { ThemeContext } from "@/components/themeContext"
import Navbar from "@/components/Navbar/Navbar"
import AboutMe from "./about_me"

export default function HomeLayout({ children }) {
  const [themeId, setThemeId] = useState("light")
  const value = {
    themeId,
    setThemeId,
  }
  return (
    <>
      <ThemeProvider themeId={themeId}>
        <ThemeContext.Provider value={value}>
          <Navbar />
          {/*<Intro /> */}
          {children}
          {/*<Intro /> */}
          <AboutMe />

          {/*<web紹介 /> */}
          {/*<技術紹介 /> */}
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}

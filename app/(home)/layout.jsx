"use client"
import { useState } from "react"
import { ThemeProvider } from "../../components/ThemeProvider"
import { ThemeContext } from "@/components/themeContext"
import Navbar from "@/components/Navbar/Navbar"
import { Footer } from "@/components/Footer/Footer"

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
          {/* navbar.footerをdivで囲みスタイスと充てているのは、ふぉったーがページの一番下に来るようにするため */}
          <div
            className="flex flex-col"
            style={{
              minHeight: "100dvh",
            }}
          >
            <div className="flex-grow">
              <Navbar />
              {children}
            </div>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}

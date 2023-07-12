"use client"
import { useState } from "react"
import { ThemeProvider } from "../../components/ThemeProvider"
import { ThemeContext } from "@/components/themeContext"
import Navbar from "@/components/Navbar/Navbar"
import { Footer } from "@/components/Footer/Footer"
import HomeButton from "@/components/homeButton/homeButton"

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
          {/* navbar.footerをdivで囲みスタイルと充てているのは、フッターがページの一番下に来るようにするため。「Sticky Footer」パターン */}
          <div
            className="flex flex-col"
            style={{
              minHeight: "100dvh",
            }}
          >
            <div className="flex-grow">
              <div
                className="flex fixed top-0 left-0  mx-3 my-1 md:m-3 lg:m-10 lg:ml-12"
                style={{ zIndex: 60 }} //z-index tailwindCSSの上限50対策
              >
                <div className="ml-safe">
                  <HomeButton />
                </div>
              </div>

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

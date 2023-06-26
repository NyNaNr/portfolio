"use client"
import { useState } from "react"
import { ThemeProvider } from "../../components/ThemeProvider"
import { ThemeContext } from "@/components/themeContext"
import Navbar from "@/components/Navbar/Navbar"
import AboutMe from "./00_about_me"
import Works from "./00_works"

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
          <div className="">
            {/* tracking-wider leading-relaxed 見やすい行間調べて調整すべし＆以下の行をchildrenに移したほうがいいかも*/}
            <div className="flex flex-col justify-center tracking-wider leading-loose dark:text-white">
              <AboutMe />

              <Works />

              {/*<web紹介 /> */}
              {/*<技術紹介 /> */}
            </div>
          </div>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}

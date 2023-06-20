"use client"

import dynamic from "next/dynamic"
import { useState, createContext } from "react"
import { ThemeProvider } from "../../components/ThemeProvider"
import { Transition } from "@/components/Transition"
import DarkModeButton from "@/components/DarkModeButton"

export const themeContext = createContext()

const DisplacementSphere = dynamic(
  () =>
    import("app/(home)/DisplacementSphere").then(
      (mod) => mod.DisplacementSphere,
    ),
  { ssr: false },
)

export default function Home() {
  const [themeId, setThemeId] = useState("light")
  const value = {
    themeId,
    setThemeId,
  }

  return (
    <Transition in key={themeId} timeout={3000}>
      {(visible, status) => (
        <ThemeProvider themeId={themeId}>
          <themeContext.Provider value={value}>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
              <DarkModeButton setThemeId={setThemeId} themeId={themeId} />

              <DisplacementSphere />

              <div className="z-20 dark:text-white text-9xl font-bold ">
                <p>Yu Nishioka</p>
              </div>
            </main>
          </themeContext.Provider>
        </ThemeProvider>
      )}
    </Transition>
  )
}

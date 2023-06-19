"use client"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, useEffect, useReducer } from "react"
import { ThemeProvider } from "../../components/ThemeProvider"
import { Transition } from "@/components/Transition"

const DisplacementSphere = dynamic(
  () =>
    import("app/(home)/DisplacementSphere").then(
      (mod) => mod.DisplacementSphere,
    ),
  { ssr: false },
)

export default function Home() {
  const [themeId, setThemeId] = useState("light")

  const toggleTheme = () => {
    setThemeId((currentThemeId) =>
      currentThemeId === "dark" ? "light" : "dark",
    )
  }

  //これで、CSSがモードに切り替かえられる
  useEffect(() => {
    // themeに応じて.darkを追加または削除
    if (themeId === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeId])

  return (
    <Transition in key={themeId} timeout={3000}>
      {(visible, status) => (
        <ThemeProvider themeId={themeId}>
          <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
            <button
              className="z-20 dark:text-white text-3xl font-semibold"
              onClick={toggleTheme}
            >
              テーマを切り替え
            </button>
            <DisplacementSphere />

            <div className="z-20 dark:text-white text-9xl font-bold ">
              <p>Ayumi Nishioka</p>
            </div>
          </main>
        </ThemeProvider>
      )}
    </Transition>
  )
}

"use client"

import dynamic from "next/dynamic"

import DarkModeButton from "@/components/DarkModeButton"
import { useContext } from "react"
import { themeContext } from "./layout"

const DisplacementSphere = dynamic(
  () =>
    import("app/(home)/DisplacementSphere").then(
      (mod) => mod.DisplacementSphere,
    ),
  { ssr: false },
)

export default function Home() {
  const { themeId, setThemeId } = useContext(themeContext)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <DarkModeButton setThemeId={setThemeId} themeId={themeId} />

      <DisplacementSphere />

      <div className="z-20 dark:text-white text-9xl font-bold ">
        <p>Yu Nishioka</p>
      </div>
    </main>
  )
}

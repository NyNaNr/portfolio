"use client"

import dynamic from "next/dynamic"
import { Transition } from "@/components/Transition"
import { useContext } from "react"
import DarkModeButton from "@/components/Navbar/DarkModeButton"
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
    <Transition in key={themeId} timeout={3000}>
      {(visible, status) => (
        <>
          <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
            <DisplacementSphere />

            <div className="z-20 dark:text-white text-9xl font-bold ">
              <p>Yu Nishioka</p>
            </div>
          </main>
        </>
      )}
    </Transition>
  )
}

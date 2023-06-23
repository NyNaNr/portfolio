"use client"

import dynamic from "next/dynamic"
import { Transition } from "@/components/Transition"
import { useContext } from "react"

import { ThemeContext } from "@/components/themeContext"

const DisplacementSphere = dynamic(
  () =>
    import("app/(home)/DisplacementSphere").then(
      (mod) => mod.DisplacementSphere,
    ),
  { ssr: false },
)

export default function Home() {
  const { themeId, setThemeId } = useContext(ThemeContext)
  return (
    <Transition in key={themeId} timeout={3000}>
      {(visible, status) => (
        <>
          <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
            <DisplacementSphere />

            <div className="z-0 dark:text-white sm:text-3xl md:text-6xl lg:text-9xl font-bold ">
              <p>Yu Nishioka</p>
            </div>
          </main>
        </>
      )}
    </Transition>
  )
}

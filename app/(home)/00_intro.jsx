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

export default function Intro() {
  const { themeId, setThemeId } = useContext(ThemeContext)
  return (
    <Transition in key={themeId} timeout={3000}>
      {(visible, status) => (
        <>
          <main
            className="flex flex-col items-center justify-between p-24"
            style={{ height: "calc(1.3 * 100vh)" }}
          >
            <DisplacementSphere />

            <div
              className="flex z-10 w-full justify-center items-center  "
              style={{ height: "100dvh" }}
            >
              <p className="dark:text-white text-3xl md:text-6xl lg:text-9xl font-bold">
                Yu&apos;s Portfolio
              </p>
            </div>
          </main>
        </>
      )}
    </Transition>
  )
}
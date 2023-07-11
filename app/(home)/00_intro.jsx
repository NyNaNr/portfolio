// "use client"
// ↑削除してもいい？

import dynamic from "next/dynamic"
import { Transition } from "@/components/Transition"
import { useContext } from "react"
import { ThemeContext } from "@/components/themeContext"
import ScroolDown from "@/components/ScroolDown/ScroolDown"

const DisplacementSphere = dynamic(
  () =>
    import("app/(home)/DisplacementSphere").then(
      (mod) => mod.DisplacementSphere,
    ),
  // { ssr: false }, 削除する。様子見よう
)

export default function Intro() {
  const { themeId, setThemeId } = useContext(ThemeContext)
  return (
    <Transition in key={themeId} timeout={3000}>
      {(visible, status) => (
        <>
          <div
            className="flex flex-col items-center justify-between"
            style={{ height: "calc(1.3 * 100vh)" }}
            id="intro"
          >
            <DisplacementSphere />

            <p className="absolute top-1/2 z-30 dark:text-white text-2xl sm:text-3xl md:text-6xl lg:text-9xl font-bold">
              Yu&apos;s Portfolio
            </p>
          </div>

          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-30">
            <ScroolDown />
          </div>
        </>
      )}
    </Transition>
  )
}

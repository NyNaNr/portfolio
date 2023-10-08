"use client"

import dynamic from "next/dynamic"
import { Transition } from "@/components/Transition"
import { useContext } from "react"
import { ThemeContext } from "@/components/themeContext"
import ScroolDown from "@/components/ScroolDown/ScroolDown"
import { Julius_Sans_One } from "next/font/google"

const DisplacementSphere = dynamic(
  () =>
    import("app/(home)/DisplacementSphere").then(
      (mod) => mod.DisplacementSphere,
    ),
  // { ssr: false }, 削除する。様子見よう
)
const JuliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
})

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

            <div className="absolute top-1/2 z-30 dark:text-white text-2xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
              <div className={JuliusSansOne.className}>Yu&apos;s Portfolio</div>
            </div>
          </div>

          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-30">
            <ScroolDown />
          </div>
        </>
      )}
    </Transition>
  )
}

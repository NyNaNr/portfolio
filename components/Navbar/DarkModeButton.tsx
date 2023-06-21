import React, { useEffect, useContext } from "react"
import { themeContext } from "@/app/(home)/layout"
import Sun from "./svgs/sun.svg"
import Moon from "./svgs/moon.svg"

export default function DarkModeButton() {
  const { themeId, setThemeId } = useContext(themeContext)

  const toggleTheme = () => {
    setThemeId((currentThemeId: "dark" | "light") =>
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
    <>
      <button
        onClick={toggleTheme}
        className="flex z-20 dark:text-white hover:bg-gray-300 hover:bg-opacity-25"
      >
        <div className="dark:hidden">
          <Sun width={38} height={38} strokeWidth={"1.2px"} />
        </div>
        <div className="hidden dark:flex">
          <Moon width={38} height={38} strokeWidth={"1.2px"} />
        </div>
      </button>
    </>
  )
}

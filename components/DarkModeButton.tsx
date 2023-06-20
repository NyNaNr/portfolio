import React, { useEffect, Dispatch, SetStateAction, useContext } from "react"
import { themeContext } from "@/app/(home)/page"

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
    <button
      onClick={toggleTheme}
      className="z-20 dark:text-white text-3xl font-semibold "
    >
      テーマを切り替え
    </button>
  )
}

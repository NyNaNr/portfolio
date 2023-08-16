import React, { useEffect, useContext } from "react"
import { ThemeContext } from "@/components/themeContext"
import Sun from "./svgs/sun.svg"
import Moon from "./svgs/moon.svg"
interface DarkModeButtonProps {
  onClick?: () => void
}

export default function DarkModeButton({ onClick }: DarkModeButtonProps) {
  const { themeId, setThemeId } = useContext(ThemeContext)

  const toggleTheme = () => {
    setThemeId(themeId === "dark" ? "light" : "dark")
  }

  const handleClick = () => {
    toggleTheme()
    if (onClick) {
      onClick()
    }
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
        onClick={handleClick}
        className="flex justify-center items-center z-20 dark:text-white transition-all duration-500 ease-out  h-14 w-14 mr-safe
        hover:active:bg-gray-300 hover:active:bg-opacity-25
        md:hover:bg-gray-300 md:hover:bg-opacity-25
        "
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

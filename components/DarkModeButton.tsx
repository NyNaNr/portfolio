import React, { useEffect, Dispatch, SetStateAction } from "react"

type DarkModeButtonProps = {
  setThemeId: Dispatch<SetStateAction<string>>
  themeId: string
}

export default function DarkModeButton({
  setThemeId,
  themeId,
}: DarkModeButtonProps) {
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
    <button
      onClick={toggleTheme}
      className="text-4xl z-20 font-bold dark:text-white"
    >
      テーマを切り替え2
    </button>
  )
}

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
      className="z-20 dark:text-white text-3xl font-semibold "
    >
      テーマを切り替え
    </button>
  )
}

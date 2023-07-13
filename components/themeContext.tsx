"use client"
import { createContext } from "react"

export const ThemeContext = createContext({
  themeId: "light", //デフォルト値
  setThemeId: (value: "light" | "dark") => {},
} as {
  themeId: "light" | "dark"
  setThemeId: (value: "light" | "dark") => void
})

"use client"
import { useState, createContext } from "react"
import { ThemeProvider } from "../../components/ThemeProvider"
import { Transition } from "@/components/Transition"

export const themeContext = createContext()

export default function HomeLayout({ children }) {
  const [themeId, setThemeId] = useState("light")
  const value = {
    themeId,
    setThemeId,
  }
  return (
    <>
      <ThemeProvider themeId={themeId}>
        <themeContext.Provider value={value}>
          {/*<NavBar　（これはコンポーネントで） /> */}
          {/*<Home　（これはページで） /> */}
          <Transition in key={themeId} timeout={3000}>
            {(visible, status) => (
              <>
                <div className="fixed left-0 z-20 bg-slate-600 h-full w-20 dark:bg-blue-300"></div>

                {children}
              </>
            )}
          </Transition>
          {/*<web紹介 /> */}
          {/*<技術紹介 /> */}
        </themeContext.Provider>
      </ThemeProvider>
    </>
  )
}

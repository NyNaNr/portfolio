"use client"
import { useEffect, useState } from "react"

import "./ScroolDown.css"

export default function ScroolDown() {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div
      className={`w-full transition-opacity duration-500 ${
        isTop ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="s_container">
        <div className="chevron dark:before:bg-white dark:after:bg-white"></div>
        <div className="chevron dark:before:bg-white dark:after:bg-white"></div>
        <div className="chevron dark:before:bg-white dark:after:bg-white"></div>
        <span className="text dark:text-white">Scroll down</span>
      </div>
    </div>
  )
}

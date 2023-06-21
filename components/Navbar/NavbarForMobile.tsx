import DarkModeButton from "./DarkModeButton"
import { useState } from "react"

export default function NavbarForMobile() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <div className="md:hidden">
        <div className="m-3">
          <button
            onClick={handleMenuOpen}
            type="button"
            className="flex  z-20 space-y-2"
          >
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "opacity-0 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />
          </button>
        </div>
        <div className="fixed right-0 top-0 z-20 bg-slate-600 h-20 w-20 dark:bg-blue-300"></div>
        <div className="flex absolute top-0 right-0">
          <DarkModeButton />
        </div>
      </div>
    </>
  )
}

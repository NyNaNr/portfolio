import DarkModeButton from "./DarkModeButton"
import { useState } from "react"

// hamburgerボタンとかをそれぞれコンポネント化するのもあり。でも、useStateの共有忘れすに

export default function NavbarForMobile() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <div className="md:hidden">
        <div className="flex">
          {/*↑のflexは必要。親コンポーネントにflexないと子コンポーネント消える */}
          <button
            onClick={handleMenuOpen}
            type="button"
            className={`fixed top-0 right-0 flex justify-center items-center flex-col z-20 m-3 w-12 h-12
            active:bg-gray-300 active:bg-opacity-25
              ${openMenu ? "space-y-1" : "space-y-2"}`}
          >
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "opacity-0 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 -rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out"
              }
            />
          </button>
          <nav
            className={`fixed ease-in duration-300 ${
              openMenu
                ? "z-10 text-left top-0 right-0  w-full bg-slate-50 bg-opacity-40 backdrop-blur-lg dark:bg-black dark:bg-opacity-40"
                : "z-10 top-[-100dvh] w-full"
            }`}
            style={{ height: "100dvh" }}
          >
            <div className="flex flex-col justify-center items-center space-y-10 text-3xl">
              <a href="#">About me</a>
              <a href="#">Works</a>
              <a href="#">Skills</a>
              <a href="#">Contact</a>
            </div>
            <div className="absolute bottom-0 right-0 m-2">
              <DarkModeButton />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

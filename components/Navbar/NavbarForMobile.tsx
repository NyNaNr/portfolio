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
            hover:bg-gray-300 hover:bg-opacity-25 active:bg-gray-300 active:bg-opacity-25
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
                ? "z-10 text-left top-0 right-0  w-full bg-slate-50 bg-opacity-50 backdrop-blur-lg dark:bg-black dark:bg-opacity-40"
                : "z-10 top-[-100dvh] w-full"
            }`}
            style={{ height: "100dvh" }}
          >
            <div className="flex flex-col sticky top-1/3 left-1/2 text-center space-y-10 text-3xl whitespace-nowrap dark:text-white">
              <p className="relative group mx-16 sm:mx-64">
                <a href="#" className="">
                  About me
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-2 bg-strongCyan transition-all group-hover:w-full group-active:w-full"></span>
              </p>

              <a href="#" className="">
                Works
              </a>
              <a href="#" className="">
                Skills
              </a>
              <a href="#" className="">
                Contact
              </a>
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

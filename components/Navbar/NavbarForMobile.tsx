import DarkModeButton from "./DarkModeButton"
import { useState } from "react"
import NavLink from "./NavLink"

// hamburgerボタンとかをそれぞれコンポネント化するのもあり。でも、useStateの共有忘れすに

export default function NavbarForMobile() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <div className="lg:hidden">
        <div className="flex">
          {/*↑のflexは必要。親コンポーネントにflexないと子コンポーネント消える */}
          <button
            onClick={handleMenuOpen}
            type="button"
            className={`fixed top-0 right-0 flex justify-center items-center flex-col z-30 m-3 w-12 h-12
            hover:active:bg-gray-300 hover:active:bg-opacity-25
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
                ? "z-20 text-left top-0 right-0  w-full bg-slate-50 bg-opacity-50 backdrop-blur-lg dark:bg-black dark:bg-opacity-40"
                : "z-20 top-[-100dvh] w-full"
            }`}
            style={{ height: "100dvh" }}
          >
            <div className="flex justify-center items-center h-full ">
              <div className="flex flex-col mx-16 sm:mx-40 text-center space-y-10 text-3xl">
                <NavLink text="About me" id="about-me" />
                <NavLink text="Works" id="works" />
                <NavLink text="Skills" id="skills" />
                <NavLink text="Contact" id="contact" />
              </div>
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

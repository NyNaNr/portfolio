import DarkModeButton from "./DarkModeButton"
import { useState } from "react"
import NavHomeLink from "./NavHomeLink"
import NavGlobalLink from "./NavGlobalLink"
import { usePathname } from "next/navigation"

// hamburgerボタンとかをそれぞれコンポネント化するのもあり。でも、useStateの共有忘れすに

export default function NavbarForMobile() {
  const [openMenu, setOpenMenu] = useState(false)

  const pathname = usePathname()

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <div className="lg:hidden">
        <div className="flex">
          {/*↑のflexは必要。親コンポーネントにflexないと子コンポーネント消える */}
          <div
            className="header-bg z-10 fixed top-0 w-full h-16 bg-light dark:bg-dark
           md:bg-transparent drop-shadow-md"
          ></div>
          <div className="mr-safe">
            <button
              onClick={handleMenuOpen}
              type="button"
              className={`fixed top-0 right-0 flex justify-center items-center flex-col z-50 my-2 mx-3 md:m-3 w-12 h-12
            
            hover:active:bg-gray-300 hover:active:bg-opacity-25
              ${openMenu ? "space-y-1" : "space-y-2"}`}
            >
              <div
                className={
                  openMenu
                    ? "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out backdrop-invert sm:filter-none"
                }
              />
              <div
                className={
                  openMenu
                    ? "opacity-0 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out backdrop-invert sm:filter-none"
                }
              />
              <div
                className={
                  openMenu
                    ? "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 -rotate-45 transition duration-500 ease-in-out"
                    : "w-8 h-0.5 bg-gray-600 dark:bg-gray-50 transition duration-500 ease-in-out backdrop-invert sm:filter-none"
                }
              />
            </button>
          </div>
          <nav
            className={`fixed z-40 ease-in duration-300 ${
              openMenu
                ? "text-left top-0 right-0  w-full bg-slate-50 bg-opacity-50 backdrop-blur-lg dark:bg-black dark:bg-opacity-40"
                : "top-[-100dvh] w-full"
            }`}
            style={{ height: "100dvh" }}
          >
            <div className="flex justify-center items-center h-full ">
              <div className="flex z-40 flex-col mx-16 sm:mx-40 text-center space-y-10 text-3xl">
                {pathname === "/" ? (
                  <>
                    <NavHomeLink text="About me" id="about-me" />
                    <NavHomeLink text="Works" id="works" />
                    <NavHomeLink text="Skills" id="skills" />
                    <NavHomeLink text="Contact" id="contact" />
                  </>
                ) : (
                  <>
                    <NavGlobalLink text="About me" id="about-me" />
                    <NavGlobalLink text="Works" id="works" />
                    <NavGlobalLink text="Skills" id="skills" />
                    <NavGlobalLink text="Contact" id="contact" />
                  </>
                )}
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

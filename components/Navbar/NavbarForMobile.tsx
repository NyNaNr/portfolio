import DarkModeButton from "./DarkModeButton"
import { useState } from "react"
import NavHomeLink from "./NavHomeLink"
import NavGlobalLink from "./NavGlobalLink"
import { usePathname } from "next/navigation"
import MobileMenuButton from "./MobileMenuButton"

export default function NavbarForMobile() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const pathname = usePathname()

  const handleMenuOpen = () => {
    setIsOpenMenu(!isOpenMenu)
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
            <div className="fixed top-0 z-50 right-0 my-2 mx-3 md:m-3">
              <MobileMenuButton
                handleMenuOpen={handleMenuOpen}
                isOpenMenu={isOpenMenu}
              />
            </div>
          </div>
          <nav
            className={`fixed z-40 ease-in duration-300 ${
              isOpenMenu
                ? "text-left top-0 right-0  w-full bg-slate-50 bg-opacity-50 backdrop-blur-lg dark:bg-black dark:bg-opacity-40"
                : "top-[-100dvh] w-full"
            }`}
            style={{ height: "100dvh" }}
          >
            <div className="flex justify-center items-center h-full ">
              <div className="flex z-40 flex-col mx-16 sm:mx-40 text-center space-y-10 text-3xl">
                {pathname === "/" ? (
                  <>
                    <NavHomeLink
                      text="About me"
                      id="about-me"
                      onClick={handleMenuOpen}
                    />
                    <NavHomeLink
                      text="Works"
                      id="works"
                      onClick={handleMenuOpen}
                    />
                    <NavHomeLink
                      text="Skills"
                      id="skills"
                      onClick={handleMenuOpen}
                    />
                    <NavHomeLink
                      text="Contact"
                      id="contact"
                      onClick={handleMenuOpen}
                    />
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
            <div>
              <div className="mr-safe">
                <div className="absolute bottom-0 right-0 m-3 ">
                  <DarkModeButton onClick={handleMenuOpen} />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

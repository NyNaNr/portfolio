import DarkModeButton from "./DarkModeButton"
import NavHomeLink from "./NavHomeLink"
import NavGlobalLink from "./NavGlobalLink"
import { usePathname } from "next/navigation"

export default function NavbarForPC() {
  const pathname = usePathname()
  return (
    <>
      <div className="hidden lg:flex">
        <div className="fixed z-50 bg-transparent  h-full w-48 ">
          <div className="fixed top-72 -left-28 flex flex-row-reverse -rotate-90 space-x-10 space-x-reverse text-lg font-medium">
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
        <div className="fixed top-0 right-0 flex z-50  m-10">
          <DarkModeButton />
        </div>
      </div>
    </>
  )
}

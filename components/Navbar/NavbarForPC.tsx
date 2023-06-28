import DarkModeButton from "./DarkModeButton"
import NavLink from "./NavLink"

export default function NavbarForPC() {
  return (
    <>
      <div className="hidden lg:flex">
        <div className="fixed z-20 bg-transparent  h-full w-48 ">
          <div className="fixed top-72 -left-28 flex flex-row-reverse -rotate-90 space-x-10 space-x-reverse text-lg font-medium">
            <NavLink text="About me" id="about-me" />
            <NavLink text="Works" id="works" />
            <NavLink text="Skills" id="skills" />
            <NavLink text="Contact" id="contact" />
          </div>
        </div>
        <div className="fixed top-0 right-0 flex z-20  m-10">
          <DarkModeButton />
        </div>
      </div>
    </>
  )
}

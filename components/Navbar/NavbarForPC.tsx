import DarkModeButton from "./DarkModeButton"
import NavLink from "./NavLink"

export default function NavbarForPC() {
  return (
    <>
      <div className="hidden md:flex">
        <div className="fixed z-20 bg-transparent border-2 h-full w-50 ">
          <div className="fixed top-72 flex flex-row-reverse -rotate-90 space-x-10 space-x-reverse text-lg">
            <NavLink text="About me" />
            <NavLink text="Works" />
            <NavLink text="Skills" />
            <NavLink text="Contact" />
          </div>
        </div>
        <div className="fixed top-0 right-0 flex z-20  m-10">
          <DarkModeButton />
        </div>
      </div>
    </>
  )
}

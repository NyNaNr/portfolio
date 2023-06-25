import DarkModeButton from "./DarkModeButton"
import NavLink from "./NavLink"
import Yu from "./svgs/yu.svg"

export default function NavbarForPC() {
  return (
    <>
      <div className="hidden md:flex">
        <div className="fixed z-20 bg-transparent  h-full w-48 ">
          <div className="fixed top-72 -left-28 flex flex-row-reverse -rotate-90 space-x-10 space-x-reverse text-lg font-medium">
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

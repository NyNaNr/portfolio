import DarkModeButton from "./DarkModeButton"

export default function NavbarForMobile() {
  return (
    <>
      <div className="md:invisible">
        <div className="fixed right-0 top-0 z-20 bg-slate-600 h-20 w-20 dark:bg-blue-300"></div>
        <div className="flex">
          <DarkModeButton />
        </div>
      </div>
    </>
  )
}

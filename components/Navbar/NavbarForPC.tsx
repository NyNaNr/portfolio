import DarkModeButton from "./DarkModeButton"
export default function NavbarForPC() {
  return (
    <>
      <div className="invisible md:visible">
        <div className="fixed left-0 z-20 bg-slate-600 h-full w-20 dark:bg-blue-300"></div>
        <div className="flex z-20 absolute top-0 right-0 m-10">
          <DarkModeButton />
        </div>
      </div>
    </>
  )
}

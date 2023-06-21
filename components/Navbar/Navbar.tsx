import DarkModeButton from "./DarkModeButton"

export default function Navbar() {
  //SSR対策、初回レンダリングされた際にisMobileが実行され、正しい値がステートに保存される

  return (
    <>
      <div className="mobile md:invisible">
        <div className="fixed right-0 top-0 z-20 bg-slate-600 h-20 w-20 dark:bg-blue-300"></div>
      </div>
      <div className="pc invisible md:visible">
        <div className="fixed left-0 z-20 bg-slate-600 h-full w-20 dark:bg-blue-300"></div>
        <div className="flex z-20 absolute top-0 right-0 p-2">
          <DarkModeButton />
        </div>
      </div>
    </>
  )
}

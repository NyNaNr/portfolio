import { isMobile } from "@/app/utils/isMobile"
import DarkModeButton from "./DarkModeButton"
import { useState, useLayoutEffect } from "react"

export default function Navbar() {
  //SSR対策、初回レンダリングされた際にisMobileが実行され、正しい値がステートに保存される
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  useLayoutEffect(() => {
    setIsMobileDevice(isMobile())
  }, [])

  return (
    <>
      {isMobileDevice ? (
        <div></div>
      ) : (
        <>
          <div className="fixed left-0 z-20 bg-slate-600 h-full w-20 dark:bg-blue-300"></div>
          <div className="flex z-20 absolute top-0 right-0 p-2">
            <DarkModeButton />
          </div>
        </>
      )}
    </>
  )
}

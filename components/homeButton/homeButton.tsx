import React from "react"
import Home from "@/components/homeButton/svgs/home.svg"
import { usePathname } from "next/navigation"
import { Link as Scroll } from "react-scroll"

export default function HomeButton() {
  const pathname = usePathname()
  return (
    <>
      <button
        className="flex  justify-center items-center dark:text-white transition-all duration-500 ease-out  h-14 w-14
        hover:active:bg-gray-300 hover:active:bg-opacity-25
        md:hover:bg-gray-300 md:hover:bg-opacity-25
        "
      >
        <div className="">
          {pathname === "/" ? (
            <Scroll to={"intro"} smooth={true}>
              <Home width={38} height={38} strokeWidth={"1.2px"} />
            </Scroll>
          ) : (
            <a href={`/#intro`}>
              <Home width={38} height={38} strokeWidth={"1.2px"} />
            </a>
          )}
        </div>
      </button>
    </>
  )
}

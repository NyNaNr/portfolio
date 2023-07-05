import React from "react"
import Home from "@/components/homeButton/svgs/home.svg"

export default function HomeButton() {
  return (
    <>
      <button
        className="flex  justify-center items-center z-40 dark:text-white transition-all duration-500 ease-out  h-14 w-14
        hover:active:bg-gray-300 hover:active:bg-opacity-25
        md:hover:bg-gray-300 md:hover:bg-opacity-25
        "
      >
        <div className="">
          <Home width={38} height={38} strokeWidth={"1.2px"} />
        </div>
      </button>
    </>
  )
}

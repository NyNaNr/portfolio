import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

export const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <div className="flex flex-col justify-center items-center w-full mt-52 border-t-4 border-black dark:border-strongCyan ">
      <div
        className="relative flex group items-end justify-center h-14 w-48 bg-black dark:bg-strongCyan rounded-lg rounded-t-none hover:bg-opacity-75"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="absolute top-0 mt-1 transition-all duration-200 ease-in-out group-hover:-translate-y-1 ">
          <FontAwesomeIcon icon={faChevronUp} style={{ color: "#ffffff" }} />
        </div>
        <p className="text-white font-semibold text-sm mb-2 relative bottom-0 text-center dark:text-black">
          Back to Top
        </p>
      </div>
      <p className="text-center dark:text-white my-2">{`©${year} Yu`}</p>
    </div>
  )
}

export default Footer

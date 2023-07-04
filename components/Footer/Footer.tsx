import React, { useEffect } from "react"

export const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <div className="flex flex-col justify-center items-center w-full mt-52 border-t-4 border-black dark:border-strongCyan">
      <div
        className="flex items-end justify-center h-14 w-48 bg-black dark:bg-strongCyan rounded-lg rounded-t-none"
        onClick={() => window.scrollTo(0, 0)}
      >
        <p className="text-white font-semibold text-sm mb-2 relative bottom-0 text-center dark:text-black">
          Back to Top
        </p>
      </div>
      <p className="text-center dark:text-white">{`©${year} Yu`}</p>
    </div>
  )
}

export default Footer

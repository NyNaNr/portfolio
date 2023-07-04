import React, { useEffect } from "react"

export const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <div className="flex justify-center bottom-0 w-full bg-strongCyan bg-opacity-40 mt-52">
      {`©${year} Yu`}
    </div>
  )
}

export default Footer

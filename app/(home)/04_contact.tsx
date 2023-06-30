import React, { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState("")

  const labelVariant = {
    focus: {
      scale: 0.7,
      y: -10,
      x: 20,
      color: "#2563eb",
      transition: { duration: 0.2, ease: "linear" },
    },
    blur: {
      scale: 1,
      y: 10,
      x: 20,
      color: "#6b7280",
      transition: { duration: 0.2, ease: "linear" },
    },
  }

  return (
    <>
      <div
        className="mx-auto w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl mt-72"
        id="contact"
      >
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          Contact
        </h2>
        <div className="flex items-center justify-center h-screen">
          <div className="p-6  relative">
            <motion.label
              htmlFor="email"
              className="absolute left-2 pointer-events-none origin-left transition-transform duration-200"
              initial={false}
              animate={isFocused || value !== "" ? "focus" : "blur"}
              variants={labelVariant}
            >
              Your Email
            </motion.label>
            <input
              id="email"
              type="email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full p-2 border-b-2 border-gray-400 outline-none text-lg transition-colors duration-200 focus:border-blue-500 bg-transparent"
            />
          </div>
        </div>
      </div>
    </>
  )
}

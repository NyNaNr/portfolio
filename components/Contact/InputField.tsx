import React, { useState, useContext } from "react"
import { motion } from "framer-motion"
import { ThemeContext } from "@/components/themeContext"

interface Props {
  type: string
  name: string
  register: any
  error: any
  isTextArea?: boolean
}

const InputField: React.FC<Props> = ({
  type,
  name,
  register,
  error,
  isTextArea = false,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState("")
  const { themeId, setThemeId } = useContext(ThemeContext)

  const labelVariant = {
    focus: {
      scale: 0.7,
      y: -15,
      x: 5,

      color: themeId === "light" ? "#6b7280" : "#B3B3B3",
      transition: { duration: 0.2, ease: "linear" },
    },
    blur: {
      scale: 1,
      y: 10,
      x: 5,

      color: themeId === "light" ? "#666666" : "#ffffff",
      transition: { duration: 0.2, ease: "linear" },
    },
  }

  return (
    <>
      <div className="flex w-full items-center justify-center ">
        <div className="py-6 w-full relative ">
          <motion.label
            htmlFor={name}
            className="absolute pointer-events-none origin-left transition-transform ease-out duration-200 "
            initial={false}
            animate={isFocused || value !== "" ? "focus" : "blur"}
            variants={labelVariant}
          >
            {["email", "name"].includes(name)
              ? `Your ${name.charAt(0).toUpperCase() + name.slice(1)}`
              : `${name.charAt(0).toUpperCase() + name.slice(1)}`}
          </motion.label>
          {isTextArea ? (
            <div
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <textarea
                {...register(name, { required: true })}
                id={name}
                rows={5}
                wrap={"soft"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`w-full mt-3 p-2 border-b-2  outline-none text-lg transition-colors duration-200 
                focus:border-black dark:focus:border-strongCyan bg-transparent 
                ${error ? "border-red-400" : "border-gray-400"}`}
              />
            </div>
          ) : (
            <div
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            >
              <input
                {...register(name, { required: true })}
                id={name}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`w-full p-2 border-b-2  outline-none text-lg transition-colors duration-200 
                focus:border-black dark:focus:border-strongCyan bg-transparent
                ${error ? "border-red-400" : "border-gray-400"}`}
              />
            </div>
          )}
          {error && <p className="text-red-600">{error.message}</p>}
        </div>
      </div>
    </>
  )
}

export default InputField

import React, { useState } from "react"
import { motion } from "framer-motion"

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

  const labelVariant = {
    focus: {
      scale: 0.7,
      y: -15,
      x: 5,

      color: "#2563eb",
      transition: { duration: 0.2, ease: "linear" },
    },
    blur: {
      scale: 1,
      y: 10,
      x: 5,

      color: "#6b7280",
      transition: { duration: 0.2, ease: "linear" },
    },
  }

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="p-6 w-full relative">
          <motion.label
            htmlFor={name}
            className="absolute pointer-events-none origin-left transition-transform ease-out duration-200"
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
                className="w-full p-2 border-b-2 border-gray-400 outline-none text-lg transition-colors duration-200 focus:border-blue-500 bg-transparent"
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
                className="w-full p-2 border-b-2 border-gray-400 outline-none text-lg transition-colors duration-200 focus:border-blue-500 bg-transparent"
              />
            </div>
          )}
          {error && <p>{error.message}</p>}
        </div>
      </div>
    </>
  )
}

export default InputField

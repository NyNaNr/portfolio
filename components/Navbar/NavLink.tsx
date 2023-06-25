import React from "react"

interface NavLinkProps {
  text: string
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <p className="relative group mx-16 sm:mx-40">
    <a href="#" className="">
      {text}
    </a>
    <span className="absolute -bottom-1 left-0 w-0 h-2 bg-strongCyan transition-all group-hover:w-full group-active:w-full"></span>
  </p>
)

export default NavLink

import React from "react"

interface NavLinkProps {
  text: string
}

//リンク（位置）を受け取れるように改良する

const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <p className="relative group whitespace-nowrap dark:text-white">
    <a href="#" className="">
      {text}
    </a>
    <span className="absolute -bottom-1 left-0 w-0 h-2 bg-strongCyan transition-all  group-hover:w-full group-active:w-full"></span>
  </p>
)

export default NavLink

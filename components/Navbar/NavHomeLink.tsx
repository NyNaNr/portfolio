import React from "react"
import { Link as Scroll } from "react-scroll"

interface NavHomeLinkProps {
  text: string
  id: string
  onClick?: () => void
}

//リンク（位置）を受け取れるように改良する

const NavHomeLink: React.FC<NavHomeLinkProps> = ({ text, id, onClick }) => (
  <p className="relative group whitespace-nowrap cursor-pointer dark:text-white">
    <Scroll to={id} smooth={true} offset={0} onClick={onClick}>
      {text}
    </Scroll>
    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-strongCyan transition-all  group-hover:w-full group-active:w-full"></span>
  </p>
)

export default NavHomeLink

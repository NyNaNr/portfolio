import Link from "next/link"

interface LinkCssProps {
  internal_link: string
  title: string
}

const LinkCss: React.FC<LinkCssProps> = ({ internal_link, title }) => {
  return (
    <div className="">
      <Link href={internal_link} className="p-2 text-blue-600 underline">
        {title}
      </Link>
    </div>
  )
}

export default LinkCss

import Image from "next/image"
import Link from "next/link"

// リンクも受け取れるようにする

interface ImageCardProps {
  src: string
  title: string
  href: string
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, href }) => {
  return (
    <>
      <Link href={href}>
        <div className="relative mb-10 ">
          <Image
            src={src}
            alt={title}
            width={500}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="drop-shadow-xl hover:scale-105  transform duration-300 "
          />
          <div className="flex justify-center underline underline-offset-4 hover:text-blue-600 mt-5">
            {title}
          </div>
        </div>
      </Link>
    </>
  )
}

export default ImageCard

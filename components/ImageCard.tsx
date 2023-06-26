import Image from "next/image"

interface ImageCardProps {
  src: string
  title: string
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title }) => {
  return (
    <div className="relative mb-10 hover:scale-105  transform duration-300 ">
      <Image
        src={src}
        alt={title}
        width={500}
        height={0}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="shadow-lg"
      />
      <div className="flex justify-center">{title}</div>
    </div>
  )
}

export default ImageCard

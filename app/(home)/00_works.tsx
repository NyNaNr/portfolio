import Image from "next/image"
import ImageCard from "@/components/ImageCard"

export default function Works() {
  return (
    <>
      <div className="mx-auto w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl">
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 mx-5 ">
          {/* 一行目 */}

          <ImageCard src="/randomNameApp32.png" title="Random Name App" />
          <ImageCard src="/yu_portfolio32.png" title="Yu's Portfolio" />
        </div>
      </div>
    </>
  )
}

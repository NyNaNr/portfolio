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
          <div className="bg-red-300">02</div>
          <div className="bg-red-400 h-96">03</div>
          {/* 二行目 */}
          <div className="bg-orange-100">04</div>
          <div className="bg-orange-200 ">05</div>
          {/* 一部を縦長にしてみる */}
          <div className="bg-orange-300">06</div>
          <div className="bg-orange-400">07</div>
          <div className="bg-orange-500 ">08</div>
          {/* 三行目 */}
          <div className="bg-blue-300">09</div>
          <div className="bg-orange-400">10</div>

          {/* 四行名 */}
          <div className="bg-blue-400">11</div>
        </div>
      </div>
    </>
  )
}

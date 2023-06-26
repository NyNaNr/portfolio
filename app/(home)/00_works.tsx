import Image from "next/image"

export default function Works() {
  return (
    <>
      <div className="mx-auto w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl">
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 mx-5 ">
          {/* 一行目 */}

          <div className="relative overflow-hidden mb-10">
            <Image
              src="/randomNameApp.png"
              alt="randomNameApp Sample"
              width={500}
              height={200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="shadow-lg"
            />
            <div className="flex justify-center">Random Name App</div>
          </div>
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

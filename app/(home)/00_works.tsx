export default function Works() {
  return (
    <>
      <div className="">
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4  ">
          {/* 一行目 */}

          <div className="bg-blue-200 h-32">01</div>
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
        <div className="grid grid-cols-2 gap-4 ">
          <div className="">01</div>
          <div className="">02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div>
          <div>10</div>
        </div>
      </div>
    </>
  )
}

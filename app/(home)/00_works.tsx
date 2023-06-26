export default function Works() {
  return (
    <>
      <div className="h-screen grid grid-cols-5 grid-rows-4">
        {/* 一行目 */}
        <div className=""></div>
        <div className="bg-blue-200 col-span-2"></div>
        <div className="bg-red-300"></div>
        <div className="bg-red-400"></div>
        {/* 二行目 */}
        <div className="bg-orange-100"></div>
        <div className=""></div>
        {/* 一部を縦長にしてみる */}
        <div className="bg-orange-300"></div>
        <div className="bg-orange-400"></div>
        <div className="bg-orange-500 row-span-2"></div>
        {/* 三行目 */}
        <div className="bg-blue-300"></div>
        <div className="bg-orange-400"></div>
        <div className="bg-red-400"></div>
        {/* 四行名 */}
        <div className="bg-blue-400"></div>
      </div>
    </>
  )
}

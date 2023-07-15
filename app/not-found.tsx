import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <h2 className="text-3xl text-center font-semibold">
            <span className="inline-block">ページが</span>
            <span className="inline-block">見つかりません</span>
          </h2>
          <div className="flex justify-center mt-32 underline text-blue-700">
            <Link href="/">ホームに戻る</Link>
          </div>
        </div>
      </div>
    </>
  )
}

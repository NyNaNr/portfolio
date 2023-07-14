"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold">
        <span className="inline-block">ページが</span>
        <span className="inline-block">見つかりません</span>
      </h2>
      <div className="flex justify-center mt-32 underline text-blue-700">
        <Link href="/">ホームに戻る</Link>
      </div>
    </div>
  )
}

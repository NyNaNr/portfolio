"use client" // Error components must be Client Components

import { useEffect } from "react"

import LinkCss from "@/components/LinkCSS"

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
      <div className="flex justify-center mt-32">
        <LinkCss internal_link="/" title="ホームに戻る" />
      </div>
    </div>
  )
}

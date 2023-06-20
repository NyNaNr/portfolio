"use client"

import dynamic from "next/dynamic"

import DarkModeButton from "@/components/DarkModeButton"

const DisplacementSphere = dynamic(
  () =>
    import("app/(home)/DisplacementSphere").then(
      (mod) => mod.DisplacementSphere,
    ),
  { ssr: false },
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <DarkModeButton />

      <DisplacementSphere />

      <div className="z-20 dark:text-white text-9xl font-bold ">
        <p>Yu Nishioka</p>
      </div>
    </main>
  )
}

"use client"
import React, { useLayoutEffect, useState } from "react"

type ElapsedTimeProps = {
  startDate: Date | string
}
// Reactのハイドレーションエラ-を回避すべし
const ElapsedTime: React.FC<ElapsedTimeProps> = ({ startDate }) => {
  const [now, setNow] = useState<Date | null>(null)

  useLayoutEffect(() => {
    setNow(new Date()) // 現在時刻を設定するのはクライアントサイドのみ

    const intervalId = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(intervalId) // cleanup on unmount
  }, [])

  if (!now) {
    return <div></div> // SSR時や初期描画時に表示される
  }

  const start = new Date(startDate)
  const diffInMonths =
    now.getMonth() -
    start.getMonth() +
    12 * (now.getFullYear() - start.getFullYear())

  const years = Math.floor(diffInMonths / 12)
  const months = diffInMonths % 12

  if (years > 0) {
    return <div>{years} 年</div>
  } else {
    return <div>{months} ヶ月</div>
  }
}

export default ElapsedTime

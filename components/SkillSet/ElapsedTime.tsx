import React from "react"

type ElapsedTimeProps = {
  startDate: Date | string
}

const ElapsedTime: React.FC<ElapsedTimeProps> = ({ startDate }) => {
  const now = new Date()
  const start = new Date(startDate)
  // monthで計算しているのでおおさっぱです。
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

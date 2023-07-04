"use client"

export default function WorksLayout({ children }) {
  return (
    <div
      className="flex flex-col mx-auto w-screen xs:w-11/12 sm:max-w-2xl lg:max-w-3xl rounded-lg mt-24 lg:mt-10 bg-blue-200"
      style={{
        minHeight: "calc(100dvh - 170px)",
        // フッターの高さを引いた(フッター117px)
      }}
    >
      <div className="flex-grow py-8 px-4 xs:m-8 bg-light">{children}</div>
    </div>
  )
}

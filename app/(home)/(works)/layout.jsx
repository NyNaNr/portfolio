"use client"

export default function WorksLayout({ children }) {
  return (
    <div className="mx-auto w-screen xs:w-11/12 sm:max-w-2xl lg:max-w-3xl rounded-lg mt-24 lg:mt-10 bg-blue-200">
      <div className="py-8 px-4 xs:m-8">{children}</div>
    </div>
  )
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="fixed left-0 z-20 bg-slate-600 h-full w-20 dark:bg-blue-300"></div>
      {children}
    </>
  )
}

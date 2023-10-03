import ImageCard from "@/components/works/ImageCard"

export default function Works() {
  return (
    <>
      <div
        className="mx-auto w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl"
        id="works"
      >
        <div className="title max-w-fit mx-auto">
          <h2 className="flex z-0 justify-center text-3xl font-medium mt-20">
            Works
          </h2>
          <div className="flex z-0 justify-center mx-auto bg-strongCyan h-1  mb-5"></div>
        </div>
        <p className="flex justify-center mb-3 mx-6">
          私が制作した成果物です。クリックすると紹介記事に飛べます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 mx-5">
          {/* 一行目 */}

          <ImageCard
            src="/randomNameApp32.png"
            title="Random Name App"
            href="/works/random-name-app"
          />
          <div className="hidden dark:block">
            <ImageCard
              src="/yu_portfolio_light_32.png"
              title="Yu's Portfolio"
              href="/works/yu-portfolio"
            />
          </div>
          <div className=" dark:hidden">
            <ImageCard
              src="/yu_portfolio_dark_32.png"
              title="Yu's Portfolio"
              href="/works/yu-portfolio"
            />
          </div>
          <ImageCard
            src="/effective-teaching-32.png"
            title="【教育】音楽会の問題解決！"
            href="/works/effective-teaching-methods-for-a-music-program"
          />
        </div>
      </div>
    </>
  )
}

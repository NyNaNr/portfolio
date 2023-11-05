import Profile_Links from "@/components/About_me/profile_Links"

export default function AboutMe() {
  return (
    <>
      <div
        className="mx-auto w-screen flex flex-col max-w-xs sm:max-w-md md:max-w-lg mt-32"
        id="about-me"
      >
        <div className="title max-w-fit mx-auto">
          <h2 className="flex z-0 justify-center text-3xl font-medium mt-20">
            About me
          </h2>
          <div className="flex z-0 justify-center mx-auto bg-strongCyan h-1  mb-5"></div>
        </div>

        <p className="flex flex-wrap text-justify mx-5 mb-16 z-0">
          エンジニアになりたいYuです。
          <br />
          大学で英語と英語教育を学んだ後、小学校教員になる。ICT主任となりエクセルで業務効率改善をしていくうちにPythonに興味が湧く。全国の教員の役に立ちたいと思い、名前をランダムに表示するWebアプリを作る。より多くの人に貢献したいという思いが強くなり、IT業界への転職を決意。
        </p>
        <Profile_Links />
      </div>
    </>
  )
}

import Profile_Links from "@/components/About_me/Profile_Links"

export default function AboutMe() {
  return (
    <>
      <div
        className="mx-auto w-screen flex flex-col max-w-xs sm:max-w-md md:max-w-lg mt-32"
        id="about-me"
      >
        <div className="title max-w-fit mx-auto">
          <h2 className="flex z-0 justify-center text-3xl font-medium">
            About me
          </h2>
          <div className="flex z-0 justify-center mx-auto bg-strongCyan h-1  mb-5"></div>
        </div>

        <p className="flex flex-wrap text-justify mx-5 mb-16 z-0">
          こんにちは、私の名前は田中です。現在は、ソフトウェアエンジニアとして働いています。私のスキルセットはフロントエンドからバックエンドまで幅広く、特にReact.jsとNode.jsを用いた開発が得意です。大学でコンピューターサイエンスを学び、その後数年間の実務経験を経て、フルスタックの開発者として多様なプロジェクトに携わってきました。
          仕事だけでなく、個人的な趣味としてもプログラミングに取り組んでいます。特にオープンソースプロジェクトに貢献することを楽しんでおり、自分のスキルを共有し、他の開発者から学ぶことに情熱を傾けています。
          また、趣味は音楽と旅行です。空き時間にはギターを弾いたり、新しい場所を探検したりしています。これらの活動が創造性を刺激し、新たな視点から問題を見つめる手助けになっています。
          これからも、技術の進歩を追求し、革新的なソリューションを生み出すことを目指しています。よろしくお願いいたします。
        </p>
        <Profile_Links />
      </div>
    </>
  )
}

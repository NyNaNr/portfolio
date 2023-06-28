import StarRating from "@/components/StarRating"
export default function SkillSet() {
  return (
    <>
      <div className="mx-auto w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl">
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          My skill set
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-5 ">
          <div className="bg-red-500">
            {/* コンポーネント化しましょう */}
            <div className="flex justify-center font-semibold my-3">
              デザイン・コーディング
            </div>
            <div className="flex justify-center m-3">
              基本的なことは一通りできます。CSSフレームワークはTailwindCSSを使っています。
            </div>

            <table className="w-full table-auto mx-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">技術</th>
                  <th className="px-4 py-2">経過年数</th>
                  <th className="px-4 py-2">スキル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border  px-4 py-2">HTML5</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <StarRating rate={4} />
                  </td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="border px-4 py-2">CSS3</td>
                  <td className="border px-4 py-2">Adam</td>
                  <td className="border px-4 py-2">112</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Intro to JavaScript</td>
                  <td className="border px-4 py-2">Chris</td>
                  <td className="border px-4 py-2">1,280</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-100">2</div>
          <div className="bg-orange-100">3</div>
          <div className="bg-amber-100">4</div>
          <div className="bg-yellow-100">5</div>
          <div className="bg-lime-100">6</div>
        </div>
      </div>
    </>
  )
}

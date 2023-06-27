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
            <div className="flex justify-center my-3">
              基本的なことは一通りできます。CSSフレームワークはTailwindCSSを使っています。
            </div>
            <table>
              <tr>
                <th>果物</th>
                <th>味</th>
              </tr>
              <tr>
                <td>イチゴ</td>
                <td>甘い</td>
              </tr>
              <tr>
                <td>レモン</td>
                <td>酸っぱい</td>
              </tr>
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

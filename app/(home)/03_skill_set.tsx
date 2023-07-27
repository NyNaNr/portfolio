import TableRow from "@/components/SkillSet/TableRow"
import TableHeader from "@/components/SkillSet/TableHeader"

export default function SkillSet() {
  return (
    <>
      <div
        className="mx-auto  w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl "
        id="skills"
      >
        <div className="title max-w-fit mx-auto">
          <h2 className="flex z-0 justify-center text-3xl font-medium">
            My skill set
          </h2>
          <div className="flex z-0 justify-center mx-auto bg-strongCyan h-1  mb-5"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-5 ">
          {/* 背景色変更はここ↓ */}
          <div className="design-cording">
            <div className="flex justify-center font-semibold my-3">
              デザイン・コーディング
            </div>
            <div className="flex justify-center m-3">
              基本的なことは一通りできます。CSSフレームワークはTailwindCSSを使っています。
            </div>

            <table className="w-full table-auto mx-auto">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                <TableRow title={"HTML5"} startDate={"2023-03-01"} rate={4} />
                <TableRow title={"CSS3"} startDate={"2023-03-01"} rate={4} />
              </tbody>
            </table>
          </div>

          <div className="front-end">
            <div className="flex justify-center font-semibold my-3">
              フロントエンド
            </div>
            <div className="flex justify-center m-3">
              Next.jsをよく使います。ポートフォリオはApp
              Routerで実装しています。
            </div>

            <table className="w-full table-auto mx-auto">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                <TableRow
                  title={"JavaScript"}
                  startDate={"2023-04-01"}
                  rate={3}
                />
                <TableRow
                  title={"TypeScript"}
                  startDate={"2023-04-01"}
                  rate={3}
                />
                <TableRow title={"React"} startDate={"2023-03-01"} rate={3} />
                <TableRow title={"Next.js"} startDate={"2023-04-01"} rate={4} />
              </tbody>
            </table>
          </div>

          <div className="back-end">
            <div className="flex justify-center font-semibold my-3">
              バックエンド
            </div>
            <div className="flex justify-center m-3">
              力を入れているところです。
            </div>
            <table className="w-full table-auto mx-auto">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                <TableRow title={"Node.js"} startDate={"2022-11-01"} rate={2} />
                <TableRow title={"Python"} startDate={"2019-12-01"} rate={4} />
              </tbody>
            </table>
          </div>

          <div className="date-base">
            <div className="flex justify-center font-semibold my-3">
              データベース
            </div>
            <div className="flex justify-center m-3">
              直近では〇〇を使用しました。
            </div>
            <table className="w-full table-auto mx-auto">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                <TableRow title={"MySQL"} startDate={"2022-11-01"} rate={0} />
                <TableRow title={"MongoDB"} startDate={"2022-11-01"} rate={0} />
              </tbody>
            </table>
          </div>

          <div className="etc">
            <div className="flex justify-center font-semibold my-3">その他</div>
            <div className="flex justify-center m-3">
              開発等で使用したツールです。
            </div>
            <table className="w-full table-auto mx-auto">
              <thead>
                <TableHeader />
              </thead>
              <tbody>
                <TableRow title={"Git"} startDate={"2023-01-27"} rate={3} />
                <TableRow title={"Docker"} startDate={"2023-06-01"} rate={2} />
                <TableRow
                  title={"Photoshop"}
                  startDate={"2010-04-01"}
                  rate={4}
                />
                <TableRow title={"Excel"} startDate={"2019-04-01"} rate={4} />
              </tbody>
            </table>
          </div>

          <div className="qualification">
            <div className="flex justify-center font-semibold my-3">
              保有資格
            </div>
            <div className="flex justify-center m-3">
              大学でも英語を専攻していました。
            </div>

            <table className="w-full table-auto mx-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-sm sm:text-base">技術</th>
                  <th className="px-4 py-2 text-sm sm:text-base">取得年月</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    英検2級
                  </td>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    平成27年3月
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    小学校一種免許
                  </td>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    平成31年3月
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    中学校英語一種免許
                  </td>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    平成31年3月
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    高等学校英語一種免許
                  </td>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    平成31年3月
                  </td>
                </tr>
                <tr>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    特別支援学校一種免許
                  </td>
                  <td className="border-t border-b border-gray-300 px-4 py-2 text-center">
                    平成31年3月
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          ※独学で勉強してきた私にとって実務経験を伴っていないため、☆の数は主観です。
        </div>
      </div>
    </>
  )
}

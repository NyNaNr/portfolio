import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"

type ParamsType = {
  params: {
    slug: string
  }
}

// ブログ記事ページ
export default async function BlogPost({ params }: ParamsType) {
  // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
  const { slug } = params
  const filePath = path.join(process.cwd(), "contents", `${slug}.md`)

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)
  const title = data.title // 記事のタイトル
  const postDate = data.date
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content)
  const contentHtml = processedContent.toString() // 記事の本文をHTMLに変換

  return (
    <div>
      <h1>{title}</h1>
      <h2>{postDate}</h2>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </div>
  )
}

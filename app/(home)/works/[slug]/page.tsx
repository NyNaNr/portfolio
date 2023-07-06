import fs from "fs"
import path from "path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { MarkdownRenderer } from "@/components/Markdown/MarkdownRenderer"

type ParamsType = {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: ParamsType) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "contents", `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, "utf8")

  // gray-matterを使ってマークダウンメタデータを解析
  const { data, content } = matter(fileContents)

  const title = data.title
  const created_at = data.created_at
  const updated_at = data.updated_at

  return (
    <div>
      <div className="flex space-x-2">
        <h2>投稿日 {created_at}</h2>
        <h2>更新日 {updated_at}</h2>
      </div>

      <h1 className="mt-6 mb-2 text-2xl font-bold border-b border-gray-300">
        {title}
      </h1>

      <MarkdownRenderer>{content}</MarkdownRenderer>
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}></ReactMarkdown> */}
    </div>
  )
}

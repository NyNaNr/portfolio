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
  const postDate = data.date

  return (
    <div>
      <h1>{title}</h1>
      <h2>{postDate}</h2>
      <MarkdownRenderer>{content}</MarkdownRenderer>
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}></ReactMarkdown> */}
    </div>
  )
}

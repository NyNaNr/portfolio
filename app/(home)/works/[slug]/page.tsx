import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MarkdownRenderer } from "@/components/Markdown/MarkdownRenderer"

type ParamsType = {
  params: {
    slug: string
  }
}

// 記事の変更で、更新日も書き変るようにできる？

export default function BlogPost({ params }: ParamsType) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "contents", `${slug}.md`)

  const fileContents = fs.readFileSync(filePath, "utf8")

  // gray-matterを使ってマークダウンメタデータを解析
  const { data, content } = matter(fileContents)

  const title = data.title
  const created_at = data.created_at
  const updated_at = data.updated_at
  const description = data.description
  const tags = data.tags

  return (
    <div>
      <div className="flex space-x-2">
        <h2>投稿日 {created_at}</h2>
        {updated_at !== "" ? <h2>更新日 {updated_at}</h2> : ""}
      </div>
      <div className="flex flex-col space-y-3 border-b border-gray-300 pb-2">
        <h1 className="mt-6 mb-2 text-2xl font-bold ">{title}</h1>
        {description === "" ? "" : <p>{description}</p>}

        {tags.length === 0 ? (
          ""
        ) : (
          <div className="space-x-2 ">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="tag bg-strongCyan bg-opacity-40 py-1 px-2 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <MarkdownRenderer>{content}</MarkdownRenderer>
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}></ReactMarkdown> */}
    </div>
  )
}

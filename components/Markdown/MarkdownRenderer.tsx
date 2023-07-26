import React from "react"
import ReactMarkdown, { Components } from "react-markdown"
import remarkSlug from "remark-slug"
import remarkGfm from "remark-gfm"
import { SyntaxHighlighter } from "./SyntaxHighlighter"

import Link from "next/link"
// import { ArticleTweetCard } from "./ArticleTweetCard"
import { RichLinkCard } from "./RichLinkCard"
type Props = { children: string }

export const MarkdownRenderer: React.FC<Props> = ({ children }) => {
  return (
    <div className={"root"}>
      <ReactMarkdown
        remarkPlugins={[remarkSlug, remarkGfm]}
        components={{
          a: MDLink,
          h1: Heading1,
          h2: Heading2,
          h3: Heading3,
          h4: Heading4,
          h5: Heading5,
          h6: Heading6,
          code: Code,
          p: Paragraph,
          ul: UnorderedList,
          ol: OrderedList,
          li: ListItem,
          blockquote: Blockquote,
          table: Table,
          thead: Thead,
          tbody: Tbody,
          tr: Tr,
          th: Th,
          td: Td,
          hr: Hr,
          img: Img,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

const MDLink: Components["a"] = ({ node, href, ...props }) => {
  // a link to same domain
  if (href?.startsWith("#") || href?.startsWith("/")) {
    return (
      <Link
        {...props}
        href={href}
        className={"text-blue-400 visited:text-purple-600"}
      />
    )
  }

  return (
    <a
      {...props}
      href={href}
      className={"text-blue-400 visited:text-purple-600"}
      target="_blank"
      rel="noreferrer"
    />
  )
}

const Heading1: Components["h1"] = ({ level, node, ...props }) => {
  return (
    <h1
      {...props}
      className="mt-24 mb-8 text-2xl font-bold border-b border-gray-300"
    />
  )
}

const Heading2: Components["h2"] = ({ level, node, ...props }) => {
  return (
    <h2
      {...props}
      className="mt-16 mb-6 text-xl font-bold border-b border-gray-300"
    />
  )
}

const Heading3: Components["h3"] = ({ level, node, ...props }) => {
  return (
    <h3
      {...props}
      className="mt-12 mb-4 text-lg font-bold border-b border-gray-300"
    />
  )
}

const Heading4: Components["h4"] = ({ level, node, ...props }) => {
  return (
    <h4
      {...props}
      className="mt-8 mb-3 text-md font-bold border-b border-gray-300"
    />
  )
}

const Heading5: Components["h5"] = ({ level, node, ...props }) => {
  return (
    <h5
      {...props}
      className="mt-6 mb-3 text-sm font-bold border-b border-gray-300"
    />
  )
}

const Heading6: Components["h6"] = ({ level, node, ...props }) => {
  return (
    <h6
      {...props}
      className="mt-4 mb-3 text-xs font-bold border-b border-gray-300"
    />
  )
}

const Code: Components["code"] = ({
  node,
  inline,
  className,
  children,

  ...props
}) => {
  const match = /language-(\w+):?(.+)*/.exec(className || "")
  const fileName = match && match[2] ? match[2] : ""
  return !inline && match ? (
    <div className="p-1 my-2 rounded-lg bg-codeBack relative">
      {fileName && (
        <div
          className="fileName flex absolute top-0 left-0 mb-3 px-2 bg-strongCyan bg-opacity-70
        rounded-lg rounded-tr-none rounded-bl-none"
        >
          {fileName}
        </div>
      )}
      {/* ファイル名とコードの被りを以下のコードで回避する */}
      {fileName && <div className="h-7"></div>}
      <SyntaxHighlighter
        code={String(children).replace(/\n$/, "")}
        language={match?.[1] ?? "plain-text"}
      />
    </div>
  ) : (
    <span className="px-1 bg-strongCyan bg-opacity-40 rounded-lg ">
      <code className={className} {...props}>
        {children}
      </code>
    </span>
  )
}

const UnorderedList: Components["ul"] = ({
  node,
  depth,
  ordered,
  ...props
}) => {
  return <ul {...props} className={"pl-8 mt-4 mb-4 list-disc"} />
}

const OrderedList: Components["ol"] = ({ node, depth, ordered, ...props }) => {
  return <ol {...props} className={"pl-8 mt-4 mb-4 list-decimal"} />
}

const ListItem: Components["li"] = ({
  node,
  checked,
  index,
  ordered,
  ...props
}) => {
  return <li {...props} className={"leading-relaxed mt-2 mb-2"} />
}

const Paragraph: Components["p"] = ({ node, ...props }) => {
  const child = node.children[0]
  if (
    node.children.length === 1 &&
    child.type === "element" &&
    child.tagName === "a" &&
    typeof child.properties?.href === "string" &&
    child.children[0].type === "text" &&
    child.properties.href === child.children[0].value
  ) {
    // if (
    //   // Twitter の Tweet URL
    //   /https?:\/\/(www\.)?twitter.com\/\w{1,15}\/status\/.*/.test(
    //     child.properties.href,
    //   )
    // ) {
    //   return (
    //     <div className={"embeded"}>
    //       <ArticleTweetCard url={child.properties.href} />
    //     </div>
    //   )
    // }

    return (
      <div className={"embeded"}>
        <RichLinkCard href={child.properties.href} />
      </div>
    )
  }
  return <p {...props} className={"mt-6 leading-relaxed tracking-wide"} />
}

const Blockquote: Components["blockquote"] = ({ node, ...props }) => {
  return (
    <blockquote
      {...props}
      className={
        "mt-4 mb-4 pl-4 pt-1 pb-1 border-l-4 border-gray-200 dark:border-gray-600"
      }
    />
  )
}

const Table: Components["table"] = ({ node, ...props }) => {
  return <table {...props} className="mt-6 mb-6 border-collapse " />
}

const Thead: Components["thead"] = ({ node, ...props }) => {
  return <thead {...props} />
}

const Tbody: Components["tbody"] = ({ node, ...props }) => {
  return <tbody {...props} />
}

const Tr: Components["tr"] = ({ node, isHeader, ...props }) => {
  return <tr {...props} />
}

const Th: Components["th"] = ({ node, isHeader, ...props }) => {
  return (
    <th
      {...props}
      className="font-heading font-bold uppercase tracking-wider px-6 py-3 text-xs text-gray-600 border-b border-gray-200"
    />
  )
}

const Td: Components["td"] = ({ node, isHeader, ...props }) => {
  return (
    <td {...props} className="px-6 py-4 leading-7 border-b border-gray-200" />
  )
}

const Hr: Components["hr"] = ({ node, ...props }) => {
  // Tailwind CSS does not support pseudo-elements. Additional custom CSS is required.
  return <hr {...props} className="hr" />
}

const Img: Components["img"] = ({ src, alt }) => {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src ?? "/images/no-image.png"} alt={alt ?? ""} />
    </a>
  )
}

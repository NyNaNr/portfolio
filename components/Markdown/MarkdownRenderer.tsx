import React from "react"
import ReactMarkdown, { Components } from "react-markdown"
import remarkSlug from "remark-slug"
import remarkGfm from "remark-gfm"

import Link from "next/link"
// import classes from "./MarkdownRenderer.module.scss"
// import { ArticleTweetCard } from "./ArticleTweetCard"
// import { SyntaxHighlighter } from "./SyntaxHighlighter"
// import { RichLinkCard } from "./RichLinkCard"
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
          // code: Code,
          // p: Paragraph,
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
  if (
    href?.startsWith("#") ||
    href?.startsWith("/") ||
    href?.includes("stin.ink")
  ) {
    // @ts-expect-error
    return <Link {...props} href={href} className={"textLink"} />
  }

  return (
    <a
      {...props}
      href={href}
      className={"textLink"}
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

// const Code: Components["code"] = ({
//   node,
//   inline,
//   className,
//   children,
//   ...props
// }) => {
//   const match = /language-(\w+)/.exec(className || "")
//   return !inline ? (
//     <div className={"codeBlock"}>
//       <SyntaxHighlighter
//         code={String(children).replace(/\n$/, "")}
//         language={match?.[1] ?? "plain-text"}
//       />
//     </div>
//   ) : (
//     <code className={"inlineCode"}>{children}</code>
//   )
// }

const UnorderedList: Components["ul"] = ({
  node,
  depth,
  ordered,
  ...props
}) => {
  return <ul {...props} className={"list"} />
}

const OrderedList: Components["ol"] = ({ node, depth, ordered, ...props }) => {
  return <ol {...props} className={"list"} />
}

const ListItem: Components["li"] = ({
  node,
  checked,
  index,
  ordered,
  ...props
}) => {
  return <li {...props} className={"listItem"} />
}

// const Paragraph: Components["p"] = ({ node, ...props }) => {
//   const child = node.children[0]
//   if (
//     node.children.length === 1 &&
//     child.type === "element" &&
//     child.tagName === "a" &&
//     typeof child.properties?.href === "string" &&
//     child.children[0].type === "text" &&
//     child.properties.href === child.children[0].value
//   ) {
//     if (
//       // Twitter の Tweet URL
//       /https?:\/\/(www\.)?twitter.com\/\w{1,15}\/status\/.*/.test(
//         child.properties.href,
//       )
//     ) {
//       return (
//         <div className={"embeded"}>
//           <ArticleTweetCard url={child.properties.href} />
//         </div>
//       )
//     }

//     return (
//       <div className={"embeded"}>
//         <RichLinkCard href={child.properties.href} isExternal />
//       </div>
//     )
//   }

//   return <p {...props} className={"paragraph"} />
// }

const Blockquote: Components["blockquote"] = ({ node, ...props }) => {
  return <blockquote {...props} className={"blockquote"} />
}

const Table: Components["table"] = ({ node, ...props }) => {
  return <table {...props} className={"table"} />
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
  return <th {...props} className={"th"} />
}

const Td: Components["td"] = ({ node, isHeader, ...props }) => {
  return <td {...props} className={"td"} />
}

const Hr: Components["hr"] = ({ node, ...props }) => {
  return <hr {...props} className={"hr"} />
}

const Img: Components["img"] = ({ src, alt }) => {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src ?? "/images/no-image.png"} alt={alt ?? ""} />
    </a>
  )
}

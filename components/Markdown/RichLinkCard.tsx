import Image from "next/image"
import { Suspense } from "react"
import { getFaviconUrl } from "./getFaviconUrl"
import { fetchSiteMetadata } from "./fetchSiteMetadata"
// import ""./"RichLinkCard.module.scss"

type Props = {
  href: string
}

export const RichLinkCard: React.FC<Props> = ({ href }) => {
  return (
    <Suspense fallback={<RichLinkCardSkeleton />}>
      <RichLinkCardInner href={href} />
    </Suspense>
  )
}

const RichLinkCardInner: React.FC<Props> = async ({ href }) => {
  const url = new URL(href)
  const metadata = await fetch(
    `/api/metadata?url=${encodeURIComponent(url.href)}`,
  ).then((res) => res.json())

  if (!metadata) {
    return <RichLinkCardError href={href} />
  }

  return (
    <a
      className={
        "cardRoot my-3 flex gap-2 h-36 w-full rounded-lg border border-gray-200 overflow-hidden transition-colors duration-300"
      }
      href={metadata.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className={"loadedMetadata flex flex-col p-2 h-full"}>
        <div className={"loadedMetadataTitle font-bold break-all"}>
          {metadata.title ? metadata.title : metadata.url}
        </div>
        <div className={"loadedMetadataDescriptionContainer flex-grow mt-2"}>
          <div
            className={
              "loadedMetadataDescription text-xs text-secondary break-all"
            }
          >
            {metadata.description}
          </div>
        </div>
        <div className={"loadedMetadataSite flex items-center gap-2"}>
          <Image
            src={getFaviconUrl(url.hostname)}
            alt=""
            width={16}
            height={16}
          />
          <span className={"loadedMetadataSiteName text-sm"}>
            {url.hostname}
          </span>
        </div>
      </div>
      {metadata.image && (
        <div className={"loadedMetadataImageContainer max-w-2/5 h-36"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={"loadedMetadataImage w-full h-full object-cover"}
            src={metadata.image}
            alt=""
          />
        </div>
      )}
    </a>
  )
}

const RichLinkCardError: React.FC<{ href: string }> = ({ href }) => {
  return (
    <a className={"error"} href={href} target="_blank" rel="noreferrer">
      <p className={"errorTitle"}>ページを読み込めませんでした</p>
      <div className={"errorDescription"}>{href}</div>
    </a>
  )
}

const RichLinkCardSkeleton: React.FC = () => {
  return (
    <div className={"cardRoot"}>
      <div className={"skeletonMetadata"}>
        <div className={"skeletonTextContainer"}>
          <div className={"skeletonText"} />
          <div className={"skeletonTextShorter"} />
        </div>
        <div className={"skeletonTextContainer"}>
          <div className={"skeletonText"} />
          <div className={"skeletonTextShorter"} />
        </div>
        <div className={"skeletonSiteIcon"} />
      </div>
      <div className={"skeletonImage"} />
    </div>
  )
}

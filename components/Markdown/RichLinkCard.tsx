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
      className={"cardRoot"}
      href={metadata.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className={"loadedMetadata"}>
        <div className={"loadedMetadataTitle"}>
          {metadata.title ? metadata.title : metadata.url}
        </div>
        <div className={"loadedMetadataDescriptionContainer"}>
          <div className={"loadedMetadataDescription"}>
            {metadata.description}
          </div>
        </div>
        <div className={"loadedMetadataSite"}>
          <Image
            src={getFaviconUrl(url.hostname)}
            alt=""
            width={16}
            height={16}
          />
          <span className={"loadedMetadataSiteName"}>{url.hostname}</span>
        </div>
      </div>
      {metadata.image && (
        <div className={"loadedMetadataImageContainer"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={"loadedMetadataImage"} src={metadata.image} alt="" />
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

import Image from "next/image"
import { Suspense } from "react"
import { getFaviconUrl } from "./getFaviconUrl"
import { fetchSiteMetadata } from "./fetchSiteMetadata"

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
  console.log(`Fetching metadata for URL: ${href}`)
  const url = new URL(href)
  // const metadata = await fetch(
  //   `/api/metadata?url=${encodeURIComponent(url.href)}`,
  // ).then((res) => res.json())

  const metadata = await fetchSiteMetadata(url.href)

  if (!metadata) {
    return <RichLinkCardError href={href} />
  }

  return (
    <a
      className={
        "cardRoot my-3 flex gap-2 h-36 w-full rounded-lg border hover:bg-gray-500 hover:bg-opacity-5 border-gray-200 overflow-hidden transition-colors duration-300"
      }
      href={metadata.url}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={
          "loadedMetadata flex flex-1 flex-col justify-between p-2 h-full "
        }
      >
        <div>
          <div
            className={"loadedMetadataTitle font-bold break-all line-clamp-2"}
          >
            {metadata.title ? metadata.title : metadata.url}
          </div>
          <div className={"loadedMetadataDescriptionContainer flex-grow mt-2"}>
            <div
              className={
                "loadedMetadataDescription text-xs text-secondary break-all line-clamp-2"
              }
            >
              {metadata.description}
            </div>
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
        <div className={"loadedMetadataImageContainer max-w-[40%] h-36"}>
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
    <a
      className="error flex flex-col gap-2 p-4 border border-gray-200 rounded-lg transition-colors duration-300 hover:bg-black hover:bg-opacity-50 focus-visible:bg-black focus-visible:bg-opacity-50 dark:border-gray-700 dark:hover:bg-white dark:hover:bg-opacity-10 dark:focus-visible:bg-white dark:focus-visible:bg-opacity-10"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <p className="errorTitle font-bold">ページを読み込めませんでした</p>
      <div className="errorDescription text-sm text-secondary">{href}</div>
    </a>
  )
}

const RichLinkCardSkeleton: React.FC = () => {
  return (
    <div
      className={
        "cardRoot  my-3 flex gap-2 h-36 w-full rounded-lg border border-gray-200 overflow-hidden transition-colors duration-300"
      }
    >
      <div className="skeletonMetadata flex flex-col h-full w-4/5 space-y-2 p-2">
        <div className="skeletonTextContainer flex flex-col space-y-2 mt-2 flex-1">
          <div className="skeletonText w-full h-4 bg-gray-300 animate-pulse rounded-full" />
          <div className="skeletonTextShorter w-4/5 h-4 bg-gray-300 animate-pulse rounded-full" />
        </div>
        <div className="skeletonTextContainer flex flex-col space-y-2 mt-6 flex-1">
          <div className="skeletonText w-full h-4 bg-gray-300 animate-pulse rounded-full" />
          <div className="skeletonTextShorter w-4/5 h-4 bg-gray-300 animate-pulse rounded-full" />
        </div>
        <div className="skeletonSiteIcon w-4 h-4 bg-gray-300 animate-pulse rounded-xs" />
      </div>
      <div className="skeletonImage w-1/5 h-full bg-gray-300 animate-pulse " />
    </div>
  )
}

import GithubSvgLight from "@/public/External_link/github-96_light.svg"
import GithubSvgDark from "@/public/External_link/github-96_dark.svg"
import Image from "next/image"

const Profile_Links = () => {
  return (
    <>
      <a
        href="https://github.com/NyNaNr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex mx-5 items-center"
      >
        <div className="mr-2 dark:hidden">
          <GithubSvgLight width={16} height={16} />
        </div>
        <div className="mr-2 hidden dark:flex">
          <GithubSvgDark width={16} height={16} />
        </div>
        <div className="text-blue-600 dark:text-blue-400 hover:underline">
          https://github.com/NyNaNr
        </div>
      </a>
      <a
        href="https://qiita.com/N_oka"
        target="_blank"
        rel="noopener noreferrer"
        className="flex mx-5 items-center"
      >
        <div className="mr-2">
          <Image
            src={"/External_link/Qiita_favicon300.png"}
            alt={"QiitaLogo"}
            width={16}
            height={16}
          />
        </div>
        <div className="overflow-hidden text-overflow-ellipsis whitespace-nowrap text-blue-600 hover:underline dark:text-blue-400 ">
          https://qiita.com/N_oka
        </div>
      </a>
    </>
  )
}

export default Profile_Links

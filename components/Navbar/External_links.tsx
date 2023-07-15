import React from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const External_links = () => {
  return (
    <>
      <div className="space-y-2">
        <a
          href="https://github.com/NyNaNr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-5 items-center"
        >
          <div className="mr-2">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </div>
        </a>
        <a
          href="https://qiita.com/KariKariMentaiFrance"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-5 items-center"
        >
          <div className="flex h-full mr-2">
            <Image
              src={"/Qiita_favicon.png"}
              alt={"Qiita_favicon.png"}
              width={16}
              height={16}
            />
          </div>
        </a>
      </div>
    </>
  )
}

export default External_links

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
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
        <div className="mr-2">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="text-blue-600 hover:underline">
          https://github.com/NyNaNr
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
        <div className="text-blue-600 hover:underline">
          https://qiita.com/KariKariMentaiFrance
        </div>
      </a>
    </>
  )
}

export default Profile_Links

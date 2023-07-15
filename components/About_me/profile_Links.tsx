import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Profile_Links = () => {
  return (
    <>
      <a
        href="https://github.com/NyNaNr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex"
      >
        <div className="mr-2">
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="text-blue-600 hover:underline">
          https://github.com/NyNaNr
        </div>
      </a>
    </>
  )
}

export default Profile_Links

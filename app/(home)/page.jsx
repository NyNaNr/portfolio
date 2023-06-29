"use client"
import Intro from "@/app/(home)/00_intro"
import AboutMe from "./00_about_me"
import Works from "./00_works"
import SkillSet from "./00_skill_set"
import Contact from "./00_contact"

export default function Home() {
  return (
    <>
      <Intro />
      <div className="">
        {/* tracking-wider leading-relaxed 見やすい行間調べて調整すべし＆以下の行をchildrenに移したほうがいいかも*/}
        <div className="flex flex-col justify-center tracking-wider leading-loose dark:text-white">
          <AboutMe />

          <Works />
          <SkillSet />
          <Contact />

          {/*<web紹介 /> */}
          {/*<技術紹介 /> */}
        </div>
      </div>
    </>
  )
}

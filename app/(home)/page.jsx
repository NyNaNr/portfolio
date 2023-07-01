"use client"
import Intro from "@/app/(home)/00_intro"
import AboutMe from "./01_about_me"
import Works from "./02_works"
import SkillSet from "./03_skill_set"
import Contact from "./04_contact"
import { Contact2 } from "./05_contact_text"

export default function Home() {
  return (
    <>
      <Intro />
      <div className="">
        {/* tracking-wider leading-relaxed 見やすい行間調べて調整すべし*/}
        <div className="flex flex-col justify-center tracking-wider leading-loose dark:text-white">
          <AboutMe />

          <Works />
          <SkillSet />
          <Contact />
          <Contact2 />
        </div>
      </div>
    </>
  )
}

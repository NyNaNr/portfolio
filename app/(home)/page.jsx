import Intro from "@/app/(home)/00_intro"
import AboutMe from "./01_about_me"
import Works from "./02_works"
import SkillSet from "./03_skill_set"
import Contact from "./04_contact"

export default function Home() {
  return (
    <>
      <Intro />

      {/* tracking-wider leading-relaxed 見やすい行間調べて調整すべし*/}
      <div className="flex flex-col justify-center tracking-wide leading-loose space-y-52 dark:text-white">
        <AboutMe />
        <Works />
        <SkillSet />
        <Contact />
      </div>
    </>
  )
}

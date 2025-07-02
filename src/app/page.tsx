import { Header } from "@/components/header"
import { Work } from "@/components/work"
import { Projects } from "@/components/projects"
import { Blog } from "@/components/blog"
import { Links } from "@/components/links"

export default function HomePage() {
  return (
    <>
      <Header />
      <Work />
      <Projects />
      <Blog />
      <Links />
    </>
  )
}
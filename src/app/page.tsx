import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Connect } from "@/components/connect";

export default function HomePage() {
  return (
    <>
      <Header />
      <Projects />
      <Experience />
      <Connect />
    </>
  );
}

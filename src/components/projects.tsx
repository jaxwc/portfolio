import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="flex items-start justify-between mb-1">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        {project.link && (
          <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-snug">
        {project.description}
      </p>
    </>
  );

  if (project.link) {
    return (
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2 px-3 -mx-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200 group"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="py-2 px-3 -mx-3">
      {content}
    </div>
  );
}

export function Projects() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium text-primary tracking-wider">
          projects
        </h2>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
        >
          view all
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </Link>
      </div>
      <div className="space-y-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

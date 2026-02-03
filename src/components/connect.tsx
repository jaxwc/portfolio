import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "github",
    href: "https://github.com/jaxwc",
    icon: Github,
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/jackson-clark-73620a34b/",
    icon: Linkedin,
  },
  {
    title: "email",
    href: "mailto:jacksonw.clark@ttu.edu",
    icon: Mail,
  },
];

export function Connect() {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-sm font-medium text-primary tracking-wider">
        connect
      </h2>
      <div className="flex flex-wrap gap-5">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <link.icon className="w-4 h-4" />
            <span className="text-sm">{link.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

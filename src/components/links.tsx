import Link from "next/link";

const links = [
  {
    title: "github",
    href: "https://github.com/jaxwc",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/jackson-clark-73620a34b/",
  },
  {
    title: "resume",
    href: "/resume.pdf",
  },
];

export function Links() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold text-rose-400">
        <span className="mr-2">*</span>
        <span>links</span>
      </h1>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="flex items-center gap-2 text-indigo-400 transition-transform duration-200 hover:-translate-y-1"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  );
}

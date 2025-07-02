import Link from "next/link";

type Post = {
  name: string;
  date: string;
};

const posts: Post[] = [
  {
    name: "ricing macos",
    date: "may 28, 2025",
  },
  {
    name: "mdsd",
    date: "may 28, 2025",
  },
];

export function Markdown() {
  return (
    <section className="mb-4 space-y-4">
      {posts.map((post, idx) => {
        const slug = post.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");

        return (
          <span
            key={idx}
            className="flex items-center justify-between text-indigo-300"
          >
            <Link href={`/posts/${slug}`}>{post.name}</Link>
            <p>{post.date}</p>
          </span>
        );
      })}
    </section>
  );
}

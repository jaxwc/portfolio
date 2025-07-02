import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Markdown } from "@/components/markdown";

export function Blog() {
  return (
    <section className="mb-8 space-y-4">
      <h1 className="mb-4 text-2xl font-bold">
        <span className="mr-2 text-rose-400">*</span>
        <span className="text-rose-400">blog</span>
      </h1>
      <Markdown />
      <Link href="/blog" className="inline-flex items-center gap-2 group ">
        <span className="text-indigo-400">all rants</span>
        <ArrowUpRight className="w-4 h-4 text-indigo-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </section>
  );
}

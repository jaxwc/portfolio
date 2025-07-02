"use client";

import { Markdown } from "@/components/markdown";
import { useScramble } from "use-scramble";

export default function BlogPage() {
  const { ref } = useScramble({
    text: "blog",
    speed: 0.5,
  });

  return (
    <section className="mb-8 space-y-4">
      <h1 className="mb-4 text-4xl font-bold text-rose-400">
        <span className="mr-2">*</span>
        <span ref={ref} />
      </h1>
      <Markdown />
    </section>
  );
}

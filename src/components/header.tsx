"use client";

import { useScramble } from "use-scramble";

export function Header() {
  const { ref } = useScramble({
    text: "jackson clark",
    speed: 0.5,
  });

  return (
    <header className="mb-8">
      <h1 className="mb-1 text-3xl font-bold tracking-tight">
        <span ref={ref} className="text-foreground" />
      </h1>
      <p className="text-sm text-primary mb-3">
        texas tech university
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        cs student with a passion for building things that work. interested in
        systems programming, security, and creating tools that make
        developers&apos; lives easier.
      </p>
    </header>
  );
}

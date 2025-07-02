"use client";

import { School, Code } from "lucide-react";
import { useScramble } from "use-scramble";

export function Header() {
  const { ref } = useScramble({
    text: "jackson clark",
    speed: 0.5,
  });

  return (
    <header className="mb-8 space-y-4">
      <h1 className="h-10 mb-4 text-4xl font-bold">
        <span ref={ref} className="text-rose-400" />
      </h1>
      <h2 className="space-y-2">
        <div className="flex items-center gap-2">
          <School className="w-4 h-4 text-orange-300" />
          <span className="text-orange-300">texas tech university</span>
        </div>
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-orange-300" />
          <span className="text-orange-300">aspiring developer</span>
        </div>
      </h2>
      <p className="leading-relaxed text-indigo-300">
        i'm a 21 y/o cs undergrad student at texas tech university. i love
        building things and solving problems. i enjoy math, programming, and
        cybersecurity. if i'm not coding, i'm probably riding mountain bikes,
        exploring new tech, or finding ways to optimize my workspace.{" "}
      </p>
    </header>
  );
}

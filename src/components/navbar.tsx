"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case "h":
          router.push("/");
          break;
        case "b":
          router.push("/blog");
          break;
        case "p":
          router.push("/projects");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return (
    <nav className="flex items-center justify-between mb-8 ">
      <div className="flex space-x-4">
        <Link href="/" className="text-indigo-400 hover:animate-wiggle text-md">
          [h] home
        </Link>
        <Link
          href="/projects"
          className="text-indigo-400 hover:animate-wiggle text-md"
        >
          [p] projects
        </Link>
        <Link
          href="/blog"
          className="text-indigo-400 hover:animate-wiggle text-md"
        >
          [b] blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

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
        case "p":
          router.push("/projects");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return (
    <nav className="flex items-center justify-between mb-6">
      <div className="flex space-x-6 text-sm">
        <Link
          href="/"
          className={`transition-colors duration-200 ${
            pathname === "/"
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          [h] home
        </Link>
        <Link
          href="/projects"
          className={`transition-colors duration-200 ${
            pathname === "/projects"
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          [p] projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

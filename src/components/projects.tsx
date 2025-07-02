import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section className="mb-8 space-y-4">
      <h1 className="mb-4 text-2xl font-bold">
        <span className="mr-2 text-rose-400">*</span>
        <span className="text-rose-400">projects</span>
      </h1>
      <h2>
        <div className="flex flex-col gap-2 text-orange-300">
          <span className="flex items-center gap-2">
            instrument calibration
          </span>
          <span className="flex items-center gap-2">creator (dec. 2024)</span>
        </div>
      </h2>
      <ol className="pl-4 leading-relaxed text-indigo-300 list-disc list-outside">
        <li>
          applied regression models using scikit-learn to predict compressive
          strength of concrete based on its composition
        </li>
        <li>
          leveraged matplotlib to visualize data trends and model performance
          for enhanced interpretability
        </li>
        <li>
          built an automated python interface to input new concrete mix data and
          update strength predictions in real time
        </li>
      </ol>
      <Link href="/blog" className="inline-flex items-center gap-2 group ">
        <span className="text-indigo-400">all projects</span>
        <ArrowUpRight className="w-4 h-4 text-indigo-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </section>
  );
}

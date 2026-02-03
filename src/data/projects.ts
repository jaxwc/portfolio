export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "mapmyhealth",
    description:
      "ai-powered healthcare assistant using bayesian predictors and google gemini to visualize treatment paths.",
    tags: ["next.js", "typescript", "mastra", "gemini", "mermaid"],
    link: "https://github.com/jaxwc/MapMyHealth",
  },
  {
    title: "instrument calibration",
    description:
      "automated regression pipeline using scikit-learn to predict concrete strength with real-time data interfaces.",
    tags: ["pandas", "scikit-learn", "matplotlib", "python"],
  },
  {
    title: "homelab",
    description:
      "self-hosted infrastructure running 10+ containerized services, secured via tailscale and wireguard.",
    tags: ["docker", "linux", "tailscale", "wireguard", "networking"],
  },
];

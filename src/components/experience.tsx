type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "texas tech university",
    role: "student assistant - support and information center",
    period: "sept 2025 - present",
    description:
      "first-line technical support for campus hardware/software and user account management.",
  },
  {
    company: "double seven wealth group",
    role: "full stack engineer",
    period: "aug 2025 - present",
    description:
      "architecting a secure full-stack financial services platform with next.js and typescript.",
  },
  {
    company: "paradigm technologies",
    role: "intern",
    period: "may 2023 - july 2023",
    description:
      "enterprise it support, system configuration, and rmm automation for managed clients.",
  },
];

export function Experience() {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-sm font-medium text-primary tracking-wider">
        experience
      </h2>
      <div className="space-y-2">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-medium text-foreground">{exp.company}</h3>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-sm text-primary mb-1">{exp.role}</p>
            <p className="text-sm text-muted-foreground leading-snug">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

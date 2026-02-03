type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    company: "paradigm technologies",
    role: "intern",
    period: "may 2023 - july 2023",
    bullets: [
      "delivered technical support services and configured computer systems for clients",
      "troubleshoot hardware/software issues and resolved user-reported problems",
      "managed remote monitoring and management (rmm) software, ninja, to streamline client systems.",
    ],
  },
];

export function Work() {
  return (
    <section className="mb-8 space-y-4">
      <h1 className="mb-4 text-2xl font-bold">
        <span className="mr-2 text-primary">*</span>
        <span className="text-primary">work</span>
      </h1>

      {experiences.map((exp, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="flex flex-col gap-2 text-muted-foreground">
            <span className="flex items-center gap-2">{exp.company}</span>
            <span className="flex items-center gap-2">
              {exp.role} ({exp.period})
            </span>
          </h2>
          <ol className="pl-4 leading-relaxed text-muted-foreground list-disc list-outside">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}

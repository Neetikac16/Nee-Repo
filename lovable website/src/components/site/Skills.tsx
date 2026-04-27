const groups = [
  {
    title: "Practical AI Fluency",
    items: [
      "AI Use-Case Research",
      "Workflow Diagnostics",
      "Copilot Testing",
      "AI Adoption Planning",
      "Automation Opportunity Mapping",
      "Change Management Support",
    ],
    tone: "bg-sage-soft",
  },
  {
    title: "Process & PMO",
    items: ["Process Mapping", "Risk Assessment", "Stakeholder Management", "Documentation", "Requirement Gathering"],
    tone: "bg-butter",
  },
  {
    title: "Automation & Tools",
    items: ["Power Query", "Power BI", "Advanced Excel", "Google Apps Script", "Microsoft Visio", "Monday.com"],
    tone: "bg-blush/60",
  },
];

const education = [
  {
    school: "University of Melbourne",
    degree: "Master of Management",
    location: "Melbourne, Australia",
    year: "Dec 2024",
  },
  {
    school: "Mumbai University",
    degree: "Bachelor of Management Studies",
    location: "Mumbai, India",
    year: "June 2022",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl" data-reveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            The toolkit
          </span>
          <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
            Built for <em className="text-sage">AI-aware operations delivery</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {groups.map((g, i) => (
            <div
              key={g.title}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`rounded-3xl ${g.tone} p-7 transition-transform hover:-translate-y-1`}
            >
              <h3 className="font-serif text-xl text-ink">{g.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-canvas/80 px-3.5 py-1.5 text-xs font-medium text-ink/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education + Leadership */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {education.map((e) => (
            <div key={e.school} className="rounded-3xl bg-canvas p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                Education
              </p>
              <h4 className="mt-3 font-serif text-xl text-ink">{e.degree}</h4>
              <p className="mt-1 text-sm text-ink-muted">
                {e.school} | {e.location}
              </p>
              <p className="mt-3 text-xs font-medium tabular-nums text-ink/55">{e.year}</p>
            </div>
          ))}
          <div className="rounded-3xl bg-terracotta p-7 text-terracotta-foreground">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-80">
              Leadership
            </p>
            <h4 className="mt-3 font-serif text-xl">President, Placement Cell</h4>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              Led a 40-member team across 2 campus recruitment events with 50+ companies
              and 1,000+ students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

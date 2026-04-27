const roles = [
  {
    company: "PrintStop India Pvt Ltd",
    role: "Management Associate",
    location: "Mumbai, India",
    period: "Aug 2025 to Present",
    points: [
      "Automated GST 2B reconciliation (300 to 600 invoices/month), cutting processing time from 2 days to 6 hours",
      "Designed factory job-planning automation projected to save 2+ hours daily and improve production turnaround",
      "Drafted ISO and ESG-aligned OHS policy for audit readiness",
      "Led enterprise risk assessments across IT, vendors, infrastructure, and data assets",
      "Trained 50 employees in structured communication and digital literacy",
    ],
    active: true,
  },
  {
    company: "University of Melbourne",
    role: "Business Analyst",
    location: "Melbourne, Australia",
    period: "Feb 2024 to Dec 2024",
    points: [
      "Led Monday.com implementation to streamline cross-functional coordination",
      "Designed LMS onboarding modules to standardize compliance processes",
      "Mapped and analyzed operational workflows to identify improvement opportunities",
    ],
  },
  {
    company: "RSM Australia",
    role: "Innovation Intern",
    location: "Melbourne, Australia",
    period: "Dec 2023 to Feb 2024",
    points: [
      "Evaluated internal innovation proposals and developed structured automation recommendations",
    ],
  },
  {
    company: "Innovizia Technologies Pvt. Ltd.",
    role: "Project Manager",
    location: "Mumbai, India",
    period: "Jan 2021 to Oct 2021",
    points: [
      "Led requirement gathering and roadmap planning for digital products",
      "Designed UI wireframes for 7 websites and 5 mobile apps",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              The journey
            </span>
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              A timeline of <em className="text-sage">curious detours</em> and quiet wins.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
              Four roles, three countries, and one thread holding it together: making
              operations work better for the people inside them.
            </p>
          </div>

          <div className="relative lg:col-span-8">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-sage/30 md:left-3" />
            <div className="space-y-12">
              {roles.map((r, i) => (
                <article
                  key={r.company + r.period}
                  data-reveal
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className="relative pl-10 md:pl-14"
                >
                  <span
                    className={`absolute left-0 top-2 size-5 rounded-full ring-4 ring-paper md:size-6 ${
                      r.active ? "bg-terracotta" : "bg-sage"
                    }`}
                  />
                  {r.active && (
                    <span className="absolute left-0 top-2 size-5 animate-ping rounded-full bg-terracotta/60 md:size-6" />
                  )}
                  <div className="rounded-3xl bg-canvas p-6 transition-shadow hover:shadow-soft md:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <div>
                        <h3 className="font-serif text-2xl text-ink md:text-3xl">{r.role}</h3>
                        <p className="mt-1 text-sm text-ink-muted">
                          {r.company} · {r.location}
                        </p>
                      </div>
                      <span className="rounded-full bg-paper px-3 py-1 text-xs font-medium tabular-nums text-ink/70">
                        {r.period}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-ink/80">
                      {r.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

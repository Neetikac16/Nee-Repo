const roles = [
  {
    company: "PrintStop India Pvt Ltd",
    role: "Management Associate",
    location: "Mumbai, India",
    period: "Aug 2025 to Present",
    points: [
      "Coordinated finance and operations stakeholders to automate GST 2B reconciliation for 500 to 1,000 invoices/month, reducing processing time from 2 days to 6 hours",
      "Supported factory job-planning automation by clarifying business rules, reviewing edge cases, and building controls for reliable adoption",
      "Drafted ISO and ESG-aligned OHS policy documentation for audit readiness and process governance",
      "Led enterprise risk assessments across IT, vendors, infrastructure, and data assets",
      "Trained 50 employees in structured communication and digital literacy to improve process adoption",
    ],
    active: true,
  },
  {
    company: "University of Melbourne",
    role: "Business Analyst",
    location: "Melbourne, Australia",
    period: "Feb 2024 to Dec 2024",
    points: [
      "Led Monday.com implementation planning to streamline cross-functional coordination and visibility",
      "Designed LMS onboarding modules to standardize compliance processes and improve user adoption",
      "Mapped operational workflows, documented pain points, and translated findings into improvement recommendations",
    ],
  },
  {
    company: "RSM Australia",
    role: "Innovation Intern",
    location: "Melbourne, Australia",
    period: "Dec 2023 to Feb 2024",
    points: [
      "Evaluated internal innovation proposals and developed structured recommendations for automation opportunities",
    ],
  },
  {
    company: "Innovizia Technologies Pvt. Ltd.",
    role: "Project Manager",
    location: "Mumbai, India",
    period: "Jan 2021 to Oct 2021",
    points: [
      "Led requirement gathering, stakeholder coordination, and roadmap planning for digital products",
      "Designed UI wireframes for 7 websites and 5 mobile apps, translating business needs into implementation-ready flows",
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
              PMO instincts, <em className="text-sage">operations depth</em>, and delivery follow-through.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
              My work has moved across operations, business analysis, innovation, and digital
              delivery, with one thread holding it together: making change structured enough to stick.
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
                          {r.company} | {r.location}
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

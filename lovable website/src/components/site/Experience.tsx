const roles = [
  {
    company: "PrintStop",
    role: "Management Associate",
    location: "Mumbai, India",
    period: "Aug 2025 to Mar 2026",
    points: [
      "Automated financial data reconciliation using Excel Power Query, processing 500–800 invoices monthly and reducing processing time from 2 days to 6 hours.",
      "Designed a production planning workflow projected to save 2+ hours daily and improve scheduling efficiency and production turnaround.",
      "Implemented a product price-tracking tool to support data-driven pricing decisions across a portfolio of 1,400+ products.",
      "Conducted operational risk assessments covering IT systems, third-party vendors, infrastructure, and data assets.",
      "Developed an occupational health and safety policy aligned with international standards and sustainability frameworks, and delivered training to 50+ employees.",
    ],
    active: true,
  },
  {
    company: "University of Melbourne",
    role: "Business Analyst",
    location: "Melbourne, Australia",
    period: "Feb 2024 to Dec 2024",
    points: [
      "Led the end-to-end implementation of Monday.com to improve cross-functional project coordination and workflow visibility.",
      "Designed and developed digital learning modules to standardize onboarding and compliance processes.",
      "Mapped and analyzed operational workflows to identify process gaps and opportunities for improvement.",
    ],
  },
  {
    company: "Astris Advisory",
    role: "Consultant",
    location: "Tokyo, Japan",
    period: "June 2024 to July 2024",
    points: [
      "Conducted detailed analysis across 9 Microsoft Copilot use cases, evaluating opportunities to improve productivity and automate business workflows.",
      "Translated business requirements into practical AI and automation opportunities, supporting technology evaluation and implementation planning.",
    ],
  },
  {
    company: "RSM Australia",
    role: "Innovation Intern",
    location: "Melbourne, Australia",
    period: "Dec 2023 to Feb 2024",
    points: [
      "Evaluated internal innovation proposals and developed structured automation recommendations to address business needs and improve operational efficiency.",
    ],
  },
  {
    company: "Innovizia Technologies",
    role: "Project Manager",
    location: "Mumbai, India",
    period: "Jan 2021 to Oct 2021",
    points: [
      "Led requirements gathering and product roadmap planning for digital products.",
      "Designed user interface wireframes for 7 websites and 5 mobile applications, translating business requirements into product concepts.",
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
              Structured AI delivery, <em className="text-sage">grounded in how work actually happens</em>.
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

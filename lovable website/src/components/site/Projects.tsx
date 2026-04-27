import { useState } from "react";
import gstImg from "@/assets/project-gst.jpg";
import dashImg from "@/assets/project-dashboard.jpg";
import achievementImg from "@/assets/achievement.jpg";

type Project = {
  id: string;
  index: string;
  tags: string[];
  title: string;
  hook: string;
  image: string;
  imageAlt: string;
  imageBg: string;
  context: string;
  role: string;
  approach: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
};

const projects: Project[] = [
  {
    id: "astris",
    index: "01",
    tags: ["AI Deployment", "Consulting", "PMO", "Change Management"],
    title: "Astris Advisory AI Transformation Proposal",
    hook: "A University of Melbourne consulting project for a Japanese financial advisory firm.",
    image: achievementImg,
    imageAlt: "Illustration of a trophy with a laurel wreath and certificate",
    imageBg: "bg-butter",
    context:
      "Astris Advisory, Japan, wanted to understand how AI could improve operations, workflows, and client service across corporate advisory, financial advisory, and investment advisory teams.",
    role:
      "Served as a consulting team member in a cross-functional group of business, IT, and AI-background master's students. I shaped frameworks, researched AI applications, tested solutions, built use cases, created the presentation, and presented the Microsoft Copilot leg of the solution.",
    approach: [
      "Mapped current workflows and pain points across advisory divisions, including repetitive content generation, manual research, CRM underuse, and inconsistent output quality.",
      "Applied gap analysis, SWOT analysis, benchmarking, and use-case testing to identify where AI and automation could add practical value.",
      "Developed Copilot use cases for reports, presentations, meetings, email, contract review, and payment reconciliation.",
      "Contributed to a phased roadmap covering IT capability, Azure/cloud foundations, CRM optimization, automation development, governance, risk, and change management.",
    ],
    outcome:
      "Delivered a structured AI transformation proposal that translated a broad ambition into practical workstreams, adoption risks, implementation phases, and business-ready recommendations.",
    metrics: [
      { value: "3 divisions", label: "workflow scope" },
      { value: "6 phases", label: "roadmap logic" },
      { value: "Copilot", label: "solution stream led" },
    ],
  },
  {
    id: "gst",
    index: "02",
    tags: ["Finance", "Automation", "Power Query", "Operations"],
    title: "GST Reconciliation Automation",
    hook: "From 2 working days to 6 hours per filing cycle.",
    image: gstImg,
    imageAlt: "Illustration of invoices, calculator and spreadsheet flowing through a workflow",
    imageBg: "bg-sage-soft",
    context:
      "At PrintStop, the finance team's monthly GST reconciliation was manual, spreadsheet-heavy, and error-prone, creating delays during filing cycles. Monthly invoice volumes ranged from 500 to 1,000.",
    role:
      "Improve speed, accuracy, and repeatability while creating a workflow the finance team could trust and continue using without constant hand-holding.",
    approach: [
      "Mapped the end-to-end reconciliation workflow with finance and operations stakeholders to understand bottlenecks and failure points.",
      "Sequenced the solution into data standardization, matching logic, Power Query automation, and exception handling.",
      "Built a structured dump-sheet so monthly invoices could be processed through a repeatable reconciliation flow.",
      "Added validation checks, exception flags, documentation, and feedback loops to improve confidence and adoption.",
    ],
    outcome:
      "Reconciliation time dropped from about 2 working days to about 6 hours, with fewer manual errors and a more scalable process for recurring filing cycles.",
    metrics: [
      { value: "~6 hrs", label: "down from 2 days" },
      { value: "500 to 1,000", label: "invoices / month" },
      { value: "Repeatable", label: "team-owned flow" },
    ],
  },
];

const moreProject = {
  tags: ["Google Apps Script", "Factory Operations", "Controls"],
  title: "Factory Planner Dashboard",
  hook: "A reliability and stakeholder-trust story for station-level planning.",
  body:
    "Built around a complex factory planning spreadsheet, this automation needed to be trusted by the team using it daily. I reviewed edge cases, paused rollout when discrepancies appeared, clarified business rules with stakeholders, added validation and exception flags, and supported a controlled adoption path.",
  metrics: [
    { value: "0 discrepancies", label: "after controls shipped" },
    { value: "2+ hrs/day", label: "projected savings" },
    { value: "Daily use", label: "factory workflow" },
  ],
};

export function Projects() {
  const [openProject, setOpenProject] = useState(projects[0].id);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Selected work
            </span>
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
              Proof I can turn <em className="text-sage">operations into delivery plans</em>.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-muted">
            These projects sit where PMO, operations, automation, and AI adoption meet:
            diagnosing messy workflows, shaping practical solutions, and making change usable.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((p, i) => {
            const isOpen = openProject === p.id;

            return (
              <article
                key={p.id}
                data-reveal
                className="case-card grid grid-cols-1 gap-10 rounded-[2.5rem] bg-paper p-5 md:p-8 lg:grid-cols-12 lg:gap-12"
              >
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`relative overflow-hidden rounded-[2.5rem] ${p.imageBg} p-6 md:p-10`}>
                    <div className="aspect-square overflow-hidden rounded-[1.75rem]">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        width={1024}
                        height={1024}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <span className="absolute left-8 top-6 font-serif text-7xl italic text-ink/15 md:text-8xl">
                      {p.index}
                    </span>
                  </div>

                  <div className="metric-strip mt-6 grid grid-cols-3 gap-3">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="rounded-2xl bg-canvas p-4 text-center">
                        <p className="font-serif text-lg leading-tight text-ink md:text-xl">
                          {m.value}
                        </p>
                        <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/55">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink/10 bg-canvas px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 font-serif text-xl italic text-terracotta md:text-2xl">
                    {p.hook}
                  </p>
                  <p className="mt-6 text-[15px] leading-relaxed text-ink/85 md:text-base">
                    {p.context}
                  </p>

                  <button
                    type="button"
                    onClick={() => setOpenProject(isOpen ? "" : p.id)}
                    className="mt-7 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-transform hover:scale-105"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "Hide details" : "Read case study"}
                  </button>

                  {isOpen && (
                    <div className="mt-8 space-y-6 border-l-2 border-sage/30 pl-6">
                      <Detail label="My role" body={p.role} />
                      <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                          The approach
                        </p>
                        <ol className="space-y-2.5">
                          {p.approach.map((step, idx) => (
                            <li key={step} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sage-soft font-serif text-xs text-ink">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <Detail label="The outcome" body={p.outcome} accent />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2.5rem] bg-canvas p-6 shadow-soft md:p-8" data-reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-blush/60">
                <img
                  src={dashImg}
                  alt="Illustration of a dashboard with charts, gauges and a workflow of cards"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                More work
              </span>
              <div className="mb-5 flex flex-wrap gap-2">
                {moreProject.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/10 bg-paper px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
                {moreProject.title}
              </h3>
              <p className="mt-3 font-serif text-xl italic text-terracotta">
                {moreProject.hook}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/85 md:text-base">
                {moreProject.body}
              </p>
              <div className="metric-strip mt-6 grid grid-cols-3 gap-3">
                {moreProject.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-paper p-4 text-center">
                    <p className="font-serif text-lg leading-tight text-ink md:text-xl">
                      {m.value}
                    </p>
                    <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/55">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({
  label,
  body,
  accent = false,
}: {
  label: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p
        className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${
          accent ? "text-terracotta" : "text-sage"
        }`}
      >
        {label}
      </p>
      <p className="text-[15px] leading-relaxed text-ink/85 md:text-base">{body}</p>
    </div>
  );
}

import gstImg from "@/assets/project-gst.jpg";
import dashImg from "@/assets/project-dashboard.jpg";

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
    id: "gst",
    index: "01",
    tags: ["Finance", "Automation", "Power Query"],
    title: "GST Reconciliation, Reimagined",
    hook: "From 2 working days to 6 hours per filing cycle.",
    image: gstImg,
    imageAlt: "Illustration of invoices, calculator and spreadsheet flowing through a workflow",
    imageBg: "bg-sage-soft",
    context:
      "At PrintStop, the finance team's monthly GST reconciliation was manual, spreadsheet-heavy, and error-prone, creating delays during filing cycles. Monthly invoice volumes ranged from 500 to 1,000.",
    role: "Improve speed and accuracy of reconciliation while creating a scalable, repeatable workflow the finance team could own.",
    approach: [
      "Mapped the end-to-end workflow with finance and operations to surface bottlenecks and define success metrics.",
      "Sequenced the solution into data standardization, matching logic design, and Power Query automation.",
      "Built a structured dump-sheet so monthly invoices auto-reconcile when fed in.",
      "Added validation checks, exception flags, documentation, and stakeholder feedback loops to govern the process.",
    ],
    outcome:
      "Reconciliation time dropped from ~2 working days to ~6 hours, accuracy improved, and the finance team shifted focus to higher-value analytical work.",
    metrics: [
      { value: "~6 hrs", label: "down from 2 days" },
      { value: "500 to 1,000", label: "invoices / month" },
      { value: "↑ accuracy", label: "fewer manual errors" },
    ],
  },
  {
    id: "dashboard",
    index: "02",
    tags: ["Operations", "Google Apps Script", "Risk & Controls"],
    title: "Job Process Dashboard, Trusted by the Factory",
    hook: "Rebuilt for reliability, adopted into daily station-level planning.",
    image: dashImg,
    imageAlt: "Illustration of a dashboard with charts, gauges and a workflow of cards",
    imageBg: "bg-blush/60",
    context:
      "A Google Apps Script automation streamlined a factory operations workflow built on a highly complex source spreadsheet. Because the factory team relied on it for job planning, accuracy was non-negotiable.",
    role: "Make sure the automation produced fully reliable outputs the factory team could trust for station-level planning.",
    approach: [
      "Spotted discrepancies between automated output and edge cases raised by stakeholders during initial rollout, and paused immediately.",
      "Ran a logic review that surfaced ambiguity in how certain business rules had been interpreted from the source data.",
      "Implemented structured input validation, exception flags for outliers, and a parallel-run mechanism comparing automation output with manual samples.",
      "Standardized requirement checkpoints with users to eliminate interpretation gaps and documented the logic clearly for future use.",
    ],
    outcome:
      "Strengthened controls eliminated discrepancies in subsequent runs, restored stakeholder confidence, and the automation was successfully adopted into the factory workflow.",
    metrics: [
      { value: "0 discrepancies", label: "after controls shipped" },
      { value: "2+ hrs/day", label: "projected savings" },
      { value: "Daily use", label: "by the factory team" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Selected work
            </span>
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
              Two projects, told <em className="text-sage">in detail</em>.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-muted">
            The kind of work I'm proudest of usually starts with someone saying
            "this takes forever" and ends with no one having to think about it again.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <article key={p.id} data-reveal className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Image side */}
              <div
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
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

                {/* Metric strip */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.metrics.map((m) => (
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

              {/* Text side */}
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

                <div className="mt-8 space-y-6 border-l-2 border-sage/30 pl-6">
                  <Detail label="The context" body={p.context} />
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
              </div>
            </article>
          ))}
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

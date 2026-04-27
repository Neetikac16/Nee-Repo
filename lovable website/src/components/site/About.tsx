const stats = [
  { value: "2 days to 6 hrs", label: "GST recon time", tone: "butter" },
  { value: "2+ hrs/day", label: "Saved at the factory", tone: "sage" },
  { value: "50 people", label: "Trained & upskilled", tone: "blush" },
  { value: "3 countries", label: "Worked across", tone: "terracotta" },
] as const;

const toneStyles: Record<(typeof stats)[number]["tone"], string> = {
  butter: "bg-butter",
  sage: "bg-sage-soft",
  blush: "bg-blush/60",
  terracotta: "bg-terracotta/15",
};

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              The short version
            </span>
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              I like systems that <em className="text-sage">hum quietly</em> in the background.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted lg:col-span-7" data-reveal style={{ transitionDelay: "120ms" }}>
            <p>
              I'm a management professional with a Master of Management from the University
              of Melbourne and a knack for turning messy spreadsheets into workflows people
              actually want to use.
            </p>
            <p>
              Most of my work lives at the intersection of <span className="font-semibold text-ink">operations, automation, and compliance</span>. I map how things really work,
              spot where they break, and rebuild them so they scale without
              breaking the humans who run them.
            </p>
            <p>
              When I'm not untangling a process, I'm probably training a team on it, or
              writing the documentation no one else wanted to write.
            </p>
          </div>
        </div>

        {/* Highlight stat tiles */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`group rounded-3xl ${toneStyles[s.tone]} p-6 transition-transform hover:-translate-y-1 hover:shadow-soft`}
            >
              <p className="font-serif text-2xl leading-tight text-ink md:text-[1.75rem]">
                {s.value}
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-ink/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

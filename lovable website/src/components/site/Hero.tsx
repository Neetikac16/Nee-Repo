import portrait from "@/assets/neetika-portrait.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Soft background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full bg-terracotta/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-sage/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-sage-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
            <span className="size-1.5 animate-pulse rounded-full bg-sage" />
            Hello, I'm Neetika
          </span>
          <h1 className="font-serif text-5xl leading-[1.05] text-balance text-ink md:text-7xl lg:text-[5.5rem]">
                           Mapping chaos into{" "}
            <span className="italic text-sage">intuitive, scalable</span> systems.
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-ink-muted md:text-xl">
            Project/Operations Associate based in Mumbai. I take manual business
            processes and turn them into automations people actually trust, so teams get
            their time back for the work that matters.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <div className="rounded-2xl bg-paper px-5 py-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                Previous Role
              </p>
              <p className="mt-1 text-sm font-medium text-ink">
                Management Associate | PrintStop India
              </p>
            </div>
            <div className="rounded-2xl bg-paper px-5 py-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                Open to
              </p>
              <p className="mt-1 text-sm font-medium text-ink">
                Project Management Roles
              </p>
            </div>
            <div className="rounded-2xl bg-paper px-5 py-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                Toolkit
              </p>
              <p className="mt-1 text-sm font-medium text-ink">
                Power Query | Apps Script | Process Design
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas transition-transform hover:scale-105"
            >
              See selected work
            </a>
            <a
              href="/Neetika_Chavan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 bg-canvas px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Download resume ↓
            </a>
          </div>
        </div>

        {/* Portrait card */}
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-blush/40" />
            <div className="absolute inset-0 rotate-2 overflow-hidden rounded-[2.5rem] bg-paper shadow-warm transition-transform duration-700 hover:rotate-0">
              <img
                src={portrait}
                alt="Portrait of Neetika Chavan"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 max-w-[260px] rotate-[-3deg] rounded-3xl bg-terracotta p-5 text-terracotta-foreground shadow-warm">
              <p className="font-serif text-base italic leading-snug">
                ""
              </p>
            </div>
            <div className="absolute -top-6 -right-4 rotate-[6deg] rounded-2xl bg-butter px-4 py-3 shadow-soft">
              <p className="font-serif text-2xl text-ink"> From 2 days </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/60">
                to 6 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

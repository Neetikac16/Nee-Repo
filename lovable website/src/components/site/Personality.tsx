import interestsImg from "@/assets/personality-interests.jpg";

const interests = [
  {
    emoji: "☕",
    title: "Slow coffee, fast notebooks",
    body: "A pour-over and a fresh notebook is how most of my best ideas start. I am that person who maps out workflows on the back of a café napkin.",
    tone: "bg-butter",
  },
  {
    emoji: "✈️",
    title: "Three countries, counting",
    body: "Lived and worked across India, Australia, and a few stops in between. Travel is my favourite way to study how people, places, and processes adapt.",
    tone: "bg-sage-soft",
  },
  {
    emoji: "🎨",
    title: "Always making something",
    body: "Painting, sketching, and the occasional craft project. Art keeps me thinking visually, which sneaks its way into every dashboard I design.",
    tone: "bg-blush/60",
  },
];

export function Personality() {
  return (
    <section id="personality" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Off the clock
            </span>
            <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
              Coffee, travel, and a lot of <em className="text-sage">curiosity</em>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              The things I do outside work shape the way I work. Slow mornings, new
              cities, and small creative projects all feed the same instinct: notice
              the details, then make them better.
            </p>

            <div className="relative mt-10 aspect-square max-w-sm overflow-hidden rounded-[2rem] bg-paper p-6">
              <img
                src={interestsImg}
                alt="Illustration of a coffee cup, passport, and art palette representing personal interests"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-5 lg:col-span-7">
            {interests.map((it, i) => (
              <div
                key={it.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`group flex gap-5 rounded-3xl ${it.tone} p-6 transition-transform hover:-translate-y-1 hover:shadow-soft md:p-8`}
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-canvas/80 text-2xl">
                  {it.emoji}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{it.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/75">
                    {it.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

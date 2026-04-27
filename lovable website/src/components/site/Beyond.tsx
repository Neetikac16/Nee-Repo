import achievementImg from "@/assets/achievement.jpg";
import volunteeringImg from "@/assets/volunteering.jpg";

const achievements = [
  "President of the Placement Cell, leading a 40-member team across 2 campus recruitment events with 50+ companies and 1,000+ students.",
  "Trained 50 employees at PrintStop in structured communication and digital literacy.",
  "Master of Management graduate from the University of Melbourne with consulting exposure across business, IT, and AI transformation work.",
];

const beyond = [
  "I like work that turns ambiguity into a map: stakeholder notes, process flows, decision logs, and the practical next step.",
  "Outside work, travel and visual thinking keep me curious about how people adapt to new systems.",
  "That shows up in my delivery style: clear documentation, calm coordination, and a bias toward tools people can actually use.",
];

export function Beyond() {
  return (
    <section id="beyond" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl" data-reveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Beyond the role
          </span>
          <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
            Leadership, learning, and the <em className="text-sage">human side</em> of change.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <article
            data-reveal
            className="overflow-hidden rounded-[2.5rem] bg-canvas shadow-soft"
          >
            <div className="aspect-[16/10] overflow-hidden bg-butter">
              <img
                src={achievementImg}
                alt="Illustration of a trophy with a laurel wreath and certificate"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-contain p-6 transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                Achievements
              </p>
              <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
                Signals beyond the job title
              </h3>
              <ul className="mt-6 space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="overflow-hidden rounded-[2.5rem] bg-canvas shadow-soft"
          >
            <div className="aspect-[16/10] overflow-hidden bg-blush/50">
              <img
                src={volunteeringImg}
                alt="Illustration of hands coming together representing collaboration"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-contain p-6 transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                How I work
              </p>
              <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
                Curious, structured, and adoption-minded
              </h3>
              <ul className="mt-6 space-y-3">
                {beyond.map((v) => (
                  <li key={v} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

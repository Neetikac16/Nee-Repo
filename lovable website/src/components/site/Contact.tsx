import coffeeImg from "@/assets/coffee.jpg";

const linkedInUrl = "https://www.linkedin.com/in/neetika-chavan/";
const emailAddress = "work.neetika@gmail.com";
const mailto = `mailto:${emailAddress}?subject=PMO%20%2F%20AI%20deployment%20role&body=Hi%20Neetika%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20chat.%0A%0A`;

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <span
          data-reveal
          className="mb-6 inline-block font-serif text-2xl italic text-terracotta"
        >
          Open to global remote-first opportunities
        </span>
        <div
          data-reveal
          style={{ transitionDelay: "80ms" }}
          className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 md:flex-row"
        >
          <h2 className="font-serif text-5xl leading-[1.05] text-ink md:text-7xl">
            Let's talk about{" "}
            <span className="italic text-sage">more over a coffee.</span>
          </h2>
          <img
            src={coffeeImg}
            alt="Coffee"
            width={240}
            height={240}
            loading="lazy"
            className="contact-coffee h-36 w-36 shrink-0 rounded-[2rem] object-cover shadow-soft md:h-44 md:w-44"
          />
        </div>
        <p
          data-reveal
          style={{ transitionDelay: "160ms" }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          I am exploring PMO, project coordination, and operations roles where AI,
          automation, and practical change management are part of the work.
        </p>

        {/* Dual CTA */}
        <div
          data-reveal
          style={{ transitionDelay: "240ms" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={mailto}
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-serif text-lg text-canvas shadow-warm transition-transform hover:scale-105 md:text-xl"
          >
            <span>Email me</span>
            <span className="text-sm font-sans opacity-70 transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-ink/15 bg-canvas px-8 py-4 font-serif text-lg text-ink transition-colors hover:border-terracotta hover:text-terracotta md:text-xl"
          >
            <span>Let's connect</span>
            <span className="text-sm font-sans opacity-70 transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </a>
        </div>

        <p className="mt-6 text-sm text-ink-muted">
          Or copy:{" "}
          <a
            href={`mailto:${emailAddress}`}
            className="font-medium text-ink underline decoration-sage decoration-2 underline-offset-4 hover:text-terracotta hover:decoration-terracotta"
          >
            {emailAddress}
          </a>
        </p>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-ink/10 pt-10 text-sm md:flex-row">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40">
            Global remote-first
          </p>
          <div className="flex gap-6">
            <a
              href={`mailto:${emailAddress}`}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-terracotta"
            >
              Email
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-terracotta"
            >
              LinkedIn
            </a>
            <a
              href="/Neetika_Chavan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-terracotta"
            >
              Resume
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40">
            (c) {new Date().getFullYear()} Neetika Chavan
          </p>
        </div>
      </div>
    </section>
  );
}

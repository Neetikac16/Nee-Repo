const linkedInUrl = "https://www.linkedin.com/in/neetika-chavan/";
const emailAddress = "work.neetika@gmail.com";
const mailto = `mailto:${emailAddress}?subject=Let%27s%20talk%20about%20a%20role&body=Hi%20Neetika%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20chat.%0A%0A`;

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <span
          data-reveal
          className="mb-6 inline-block font-serif text-2xl italic text-terracotta"
        >
          Ready for the next chapter?
        </span>
        <h2
          data-reveal
          style={{ transitionDelay: "80ms" }}
          className="font-serif text-5xl leading-[1.05] text-ink md:text-7xl"
        >
          Let's talk business{" "}
          <span className="italic text-sage">over coffee.</span>
        </h2>
        <p
          data-reveal
          style={{ transitionDelay: "160ms" }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          I'm currently exploring project management roles. If you're building something
          that needs careful operators and clear systems, I'd love to hear about it.
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
            <span aria-hidden>✉️</span>
            <span>Email me</span>
            <span className="text-sm font-sans opacity-70 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-ink/15 bg-canvas px-8 py-4 font-serif text-lg text-ink transition-colors hover:border-terracotta hover:text-terracotta md:text-xl"
          >
            <span aria-hidden>in</span>
            <span>Connect on LinkedIn</span>
            <span className="text-sm font-sans opacity-70 transition-transform group-hover:translate-x-1">
              ↗
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
            Mumbai, India · Open to relocate
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
              Résumé
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40">
            © {new Date().getFullYear()} Neetika Chavan
          </p>
        </div>
      </div>
    </section>
  );
}

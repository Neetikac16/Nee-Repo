import { useEffect, useState } from "react";
import japanImg from "@/assets/japan.jpg";
import melbourneImg from "@/assets/melbourne.jpg";
import travelImg from "@/assets/travel.jpg";
import art1Img from "@/assets/Art 1.png";
import art2Img from "@/assets/Art 2.png";
import art3Img from "@/assets/Art 3.png";

const galleries = {
  travel: [japanImg, melbourneImg, travelImg],
  art: [art1Img, art2Img, art3Img],
};

export function Hobbies() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % galleries.travel.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hobbies" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl" data-reveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Off the clock
          </span>
          <h2 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
            Travel and art keep my <em className="text-sage">curiosity moving</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <article data-reveal className="overflow-hidden rounded-[2.5rem] bg-canvas shadow-soft">
            <div className="aspect-[16/10] overflow-hidden bg-sage-soft">
              <img
                src={galleries.travel[index]}
                alt="Travel gallery"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                Travel
              </p>
              <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
                Japan, Melbourne, and curious detours
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
                Travel keeps me observant: how people move through places, how systems work
                in the background, and what changes when context changes.
              </p>
            </div>
          </article>

          <article data-reveal className="overflow-hidden rounded-[2.5rem] bg-canvas shadow-soft">
            <div className="aspect-[16/10] overflow-hidden bg-blush/50">
              <img
                src={galleries.art[index]}
                alt="Art gallery"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                Art
              </p>
              <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
                Visual thinking, made tangible
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
                Art helps me think in patterns, composition, and clarity, which quietly
                shapes the way I design workflows and presentations.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

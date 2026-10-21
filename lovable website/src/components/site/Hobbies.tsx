import { useEffect, useState } from "react";
import japanImg from "@/assets/japan.jpg";
import melbourneImg from "@/assets/melbourne.jpg";
import travelImg from "@/assets/travel.jpg";
import baliImg from "@/assets/bali.jpg";
import baliSecondImg from "@/assets/bali 2.jpg";
import bangkokImg from "@/assets/bangkok.jpg";
import bangkokSecondImg from "@/assets/bangkok 2.jpg";
import art1Img from "@/assets/Art 1.png";
import art2Img from "@/assets/Art 2.png";
import art3Img from "@/assets/Art 3.png";

const galleries = {
  travel: [japanImg, melbourneImg, travelImg, baliImg, baliSecondImg, bangkokImg, bangkokSecondImg],
  art: [art1Img, art2Img, art3Img],
};
const travelPlaces = ["Japan", "Melbourne, Victoria", "Travel moments", "Bali", "Bali", "Bangkok", "Bangkok"];

export function Hobbies() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % galleries.travel.length);
    }, 5000);

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
            <div className="aspect-square overflow-hidden bg-sage-soft">
              <img
                src={galleries.travel[index]}
                alt={`Travel photo: ${travelPlaces[index]}`}
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
                Travel
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
                {travelPlaces[index]}
              </p>
            </div>
          </article>

          <article data-reveal className="overflow-hidden rounded-[2.5rem] bg-canvas shadow-soft">
            <div className="aspect-square overflow-hidden bg-blush/50">
              <img
                src={galleries.art[index % galleries.art.length]}
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
                Art
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
                Art feels calming and grounding.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

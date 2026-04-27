import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Beyond } from "@/components/site/Beyond";
import { Personality } from "@/components/site/Personality";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Beyond />
        <Personality />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

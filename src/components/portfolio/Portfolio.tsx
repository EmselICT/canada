import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { SkillsEducation } from "@/components/portfolio/SkillsEducation";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { NAV, CONTACT } from "@/data";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsEducation />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-hairline/40 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {CONTACT.name.split(" ").slice(0, 2).join(" ")}. Built with care.
          </p>
          <nav className="flex flex-wrap gap-6">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-xs tracking-widest text-muted-foreground uppercase hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

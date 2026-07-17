import { motion } from "framer-motion";
import { SKILLS, EDUCATION } from "@/data";

export function SkillsEducation() {
  return (
    <section id="skills" className="border-t border-hairline/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Education</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            My education
          </h2>
          <div className="mt-10 border-l border-hairline pl-8">
            {EDUCATION.map((e) => (
              <div key={e.school} className="relative pb-10">
                <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                <p className="text-xs tracking-widest text-primary uppercase">
                  {e.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {e.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.school}, {e.location}
                </p>
              </div>
            ))}
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border border-primary" />
              <p className="text-xs tracking-widest text-primary uppercase">
                Ongoing
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                Self directed engineering
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Cloud architecture, TypeScript, and modern React patterns.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="eyebrow">Skills</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            My skills
          </h2>
          <div className="mt-10 space-y-6">
            {SKILLS.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.05} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between text-sm">
        <span className="font-medium text-foreground uppercase tracking-wider text-xs">
          {name}
        </span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-[3px] w-full bg-hairline/60">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
}

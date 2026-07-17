import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-hairline/40 bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Work history</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Where I have worked
          </h2>
          <p className="mt-4 text-muted-foreground">
            A few places I have been part of the engineering team.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {EXPERIENCE.map((job, i) => (
            <motion.article
              key={job.company + job.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid grid-cols-1 gap-6 border border-hairline/60 bg-background/60 p-8 lg:grid-cols-[280px_1fr] lg:gap-12"
            >
              <div>
                <p className="text-xs tracking-widest text-primary uppercase">
                  {job.period}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{job.place}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">{job.role}</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

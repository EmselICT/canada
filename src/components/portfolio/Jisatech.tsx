import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { JISATECH } from "@/data";

export function Jisatech() {
  return (
    <section id="jisatech" className="border-t border-hairline/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Jisatech</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Software with soul,
            <br />
            shipped like clockwork.
          </h2>
          <p className="mt-4 text-muted-foreground">
            {JISATECH.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {JISATECH.stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="border border-hairline/60 bg-background/60 p-5"
            >
              <p className="font-display text-2xl font-semibold text-primary">
                {s.value}
              </p>
              <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-lg font-semibold text-foreground">
            Services
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {JISATECH.services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border border-hairline/60 bg-background/60 p-6"
              >
                <p className="font-medium text-foreground">{s.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-lg font-semibold text-foreground">
            Tech stack
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {JISATECH.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-hairline/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={JISATECH.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Visit Jisatech
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

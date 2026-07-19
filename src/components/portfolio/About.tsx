import { motion } from "framer-motion";
import { ABOUT_IMG, CONTACT } from "@/data";

export function About() {
  return (
    <section id="about" className="border-t border-hairline/40 bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-2 relative mx-auto flex aspect-square w-full max-w-md items-end justify-center lg:order-1"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, oklch(0.63 0.21 25 / 0.5) 0%, oklch(0.63 0.21 25 / 0.1) 50%, transparent 75%)",
              filter: "blur(40px)",
            }}
          />
          <img
            src={ABOUT_IMG}
            alt="Jude in profile"
            className="relative z-10 h-full w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <p className="eyebrow">About me</p>
          <h2 className="mt-5 font-display text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
            A bit about who I am
          </h2>
          <p className="mt-4 font-medium text-primary">Full Stack Web Developer</p>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I have been building web applications for about ten years now.
              Most of my work involves Python, JavaScript, React, Django, and
              WordPress, along with the database and API work that goes with them.
            </p>
            <p>
              I am based in Calgary, Canada. I moved here from Turkey, and before
              that I spent some time in Los Angeles. I like working on things that
              are used by real people, and I try to write code that makes sense
              a year later.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <Info label="Name" value={CONTACT.name.split(" ").slice(0, 2).join(" ")} />
            <Info label="Location" value="Calgary, Canada" />
            <Info label="Email" value={CONTACT.email} />
            <Info label="Phone" value={CONTACT.phone} />
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-7 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-hairline/60 pb-3">
      <dt className="text-xs tracking-widest text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-foreground break-words">{value}</dd>
    </div>
  );
}

import { motion } from "framer-motion";
import { FileText, Mail, Phone, Linkedin, Github } from "lucide-react";
import { HERO_IMG, CV_URL, CONTACT } from "@/data";

export function Hero() {
  return (
    <section id="home" className="relative flex h-dvh max-h-dvh flex-col justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, oklch(0.63 0.21 25) 0, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.5 0.15 25) 0, transparent 40%)",
      }} />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 sm:gap-16 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="eyebrow">Hello</p>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold text-foreground sm:text-5xl lg:text-7xl">
            I&apos;m <span className="text-primary">Jude</span>,
            <br />
            a Full Stack Developer.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Based in Calgary. I build web applications with Python, JavaScript,
            React, Django, and WordPress.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <a
              href="#about"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              About me
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline transition group-hover:border-primary group-hover:text-primary">
                <FileText className="h-4 w-4" />
              </span>
              View my CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <SocialLink href={`mailto:${CONTACT.email}`} label="Email" icon={<Mail className="h-4 w-4" />} />
            <SocialLink href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} label="Call" icon={<Phone className="h-4 w-4" />} />
            <SocialLink href={CONTACT.linkedin} label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} external />
            <SocialLink href="https://github.com/judecc" label="GitHub" icon={<Github className="h-4 w-4" />} external />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-md items-end justify-center self-end sm:h-[300px] lg:max-w-none lg:h-full"
        >
          <div
            className="absolute inset-x-4 top-4 aspect-square rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, oklch(0.63 0.21 25 / 0.55) 0%, oklch(0.63 0.21 25 / 0.15) 45%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div className="absolute inset-x-6 top-6 aspect-square rounded-full border border-primary/40" />
          <div className="absolute inset-x-14 top-14 aspect-square rounded-full border border-hairline/60" />
          <img
            src={HERO_IMG}
            alt="Portrait of Jude Chinonso Chukwuemeka"
            className="relative z-10 h-[320px] w-auto max-w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] sm:h-[400px] lg:h-[540px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, icon, external }: { href: string; label: string; icon: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="group inline-flex items-center gap-2 rounded-full border border-hairline/70 bg-surface/40 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground transition hover:border-primary hover:text-primary"
    >
      <span className="text-primary transition group-hover:text-primary">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

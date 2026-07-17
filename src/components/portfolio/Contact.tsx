import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { CONTACT } from "@/data";

export function Contact() {
  return (
    <section id="contact" className="border-t border-hairline/40 bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Here is how to reach me. I am usually available by email.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value={CONTACT.phone}
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          />
          <ContactCard
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            value={CONTACT.location}
          />
          <ContactCard
            icon={<Linkedin className="h-5 w-5" />}
            label="LinkedIn"
            value="Jude Chukwuemeka"
            href={CONTACT.linkedin}
            external
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-hairline text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="block transition hover:opacity-80"
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV, CV_URL } from "@/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline/40 bg-background backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-baseline">
          <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Jude
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight text-primary">
            .dev
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={CV_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
        >
          Download CV
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-6 bg-foreground" />
          <span className="mt-1.5 block h-0.5 w-4 bg-primary" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] z-50 flex flex-col bg-background backdrop-blur-md md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>

            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex justify-center pb-12">
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

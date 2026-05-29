import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Scale } from "lucide-react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Practice", href: "/#practice" },
  { label: "Results", href: "/#results" },
  { label: "Team", href: "/#team" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-forest/95 backdrop-blur-md border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-3 group">
          <Scale className="w-7 h-7 text-gold transition-transform group-hover:rotate-12" />
          <span className="font-display text-2xl tracking-[0.25em] text-ivory font-medium">
            LEXARA
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ivory/80 hover:text-gold text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="/#booking"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:inline-flex items-center px-6 py-3 border border-gold text-gold text-sm font-medium tracking-wide hover:bg-gold hover:text-forest-dark transition-colors rounded-full"
        >
          Free Consultation
        </motion.a>

        <button aria-label="Menu" onClick={() => setOpen(true)} className="lg:hidden text-ivory">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="fixed inset-0 bg-forest-dark z-50 lg:hidden px-8 py-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display text-2xl tracking-[0.25em] text-ivory">LEXARA</span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="text-ivory">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-display text-4xl text-ivory hover:text-gold"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="/#booking"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-fit items-center px-7 py-3 bg-gold text-forest-dark rounded-full"
              >
                Free Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

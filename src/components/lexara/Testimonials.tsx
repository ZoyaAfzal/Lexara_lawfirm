import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lexara handled our cross-border acquisition with an elegance I have never seen from a firm of any size. They were three steps ahead, every single meeting.",
    name: "Daniel R. Hartwell",
    role: "CEO, Hartwell Holdings",
  },
  {
    quote:
      "After two years of stalled litigation with another firm, Lexara settled my case in four months. They treated me like family the entire way through.",
    name: "Amara Okafor",
    role: "Private Client",
  },
  {
    quote:
      "Sharp, discreet, and relentlessly prepared. Lexara is the firm I call when the stakes are highest and the timeline shortest.",
    name: "Sen. Marcus Whitfield",
    role: "Public Sector Advisor",
  },
  {
    quote:
      "Their environmental team turned what looked like a catastrophic compliance failure into a defensible regulatory record. Exceptional work.",
    name: "Priya Venkatesan",
    role: "COO, Meridian Energy",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-28 bg-forest-dark text-ivory relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain-overlay" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ Testimonials</div>
        <h2 className="font-display text-5xl md:text-6xl text-balance">
          From <span className="italic text-gold">Satisfied Clients.</span>
        </h2>

        <div className="relative mt-16 min-h-[300px]">
          <Quote className="w-16 h-16 text-gold/30 mx-auto mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-ivory/90 max-w-3xl mx-auto">
                "{t.quote}"
              </p>
              <div className="mt-10 h-px w-16 bg-gold mx-auto" />
              <div className="mt-6">
                <div className="font-medium text-ivory">{t.name}</div>
                <div className="text-sm text-gold/80 mt-1">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="w-11 h-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-forest-dark transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                aria-label={`Slide ${i + 1}`}
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-gold" : "w-2 bg-ivory/30"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="w-11 h-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-forest-dark transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

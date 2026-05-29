import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const dots = Array.from({ length: 24 });

export function CTABanner() {
  return (
    <section id="cta" className="relative py-28 bg-forest overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain-overlay" />
      {dots.map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/70"
          style={{
            top: `${(i * 47) % 100}%`,
            left: `${(i * 71) % 100}%`,
          }}
          animate={{ y: [-20, 0, -20], opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 4 + (i % 5),
            delay: (i % 7) * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center text-ivory">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl leading-[1.05] text-balance"
        >
          Ready to Fight for <br />
          <span className="italic text-gold">Your Rights?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-ivory/75 text-lg max-w-xl mx-auto"
        >
          Schedule a free, confidential consultation with a senior partner today.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="#booking"
          className="mt-10 inline-flex items-center gap-3 bg-gold text-forest-dark px-9 py-5 rounded-full font-medium tracking-wide hover:bg-gold-light transition-colors"
        >
          Book Free Consultation
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
}

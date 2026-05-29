import { motion } from "motion/react";
import { ArrowRight, Phone, Diamond } from "lucide-react";
import { CountUp } from "./CountUp";
import justice from "@/assets/justice-statue.jpg";

const headlineWords = ["Safeguarding", "Justice,", "Solving", "Issues."];

const floatCards = [
  { tag: "Workers' Comp", amount: "$600K", delay: 0 },
  { tag: "Real Estate", amount: "$400K", delay: 0.4 },
  { tag: "Corporate Dispute", amount: "$1.2M", delay: 0.8 },
];

const tickerItems = [
  "Environmental Law",
  "Estate Planning",
  "Medical Malpractice",
  "Intellectual Property",
  "Corporate Litigation",
  "Family Law",
  "Real Estate",
  "Criminal Defense",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-forest text-ivory overflow-hidden pt-32 pb-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={justice}
          alt=""
          className="w-full h-full object-cover opacity-[0.15] scale-110 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/40 to-forest/90" />
      </div>

      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.13 82 / 0.18) 0%, transparent 60%)",
        }}
      />
      {/* Grain */}
      <div aria-hidden className="absolute inset-0 grain-overlay pointer-events-none" />
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-10 text-center pointer-events-none select-none font-display font-bold leading-none"
        style={{ fontSize: "20vw", color: "oklch(0.96 0.012 85 / 0.04)" }}
      >
        LEXARA
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gold/40 rounded-full text-gold text-xs tracking-[0.2em] uppercase mb-8"
          >
            <Diamond className="w-3 h-3 fill-gold" />
            Trusted Since 1998
          </motion.div>

          <h1 className="font-display font-medium leading-[0.95] tracking-tight text-balance">
            <span className="block text-[clamp(3rem,8vw,7rem)]">
              {headlineWords.slice(0, 2).map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-4"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block text-[clamp(3rem,8vw,7rem)] italic text-gold">
              {headlineWords.slice(2).map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4 + i * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-4"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 max-w-lg text-ivory/70 text-lg leading-relaxed"
          >
            Premium litigation and advisory services for individuals and corporations. Where
            centuries of doctrine meet a modern standard of care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 bg-gold text-forest-dark px-7 py-4 rounded-full font-medium tracking-wide hover:bg-gold-light transition-colors"
            >
              Hire an Expert
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ivory/30 text-ivory px-7 py-4 rounded-full font-medium tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-ivory/10 pt-8"
          >
            {[
              { n: 20, s: "+", label: "Lawyers" },
              { n: 98, s: "%", label: "Win Rate" },
              { n: 500, s: "+", label: "Cases Won" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-gold">
                  <CountUp to={stat.n} suffix={stat.s} />
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-ivory/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — floating cards */}
        <div className="relative h-[520px] hidden lg:block">
          {floatCards.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
              className="absolute left-0 right-0"
              style={{
                top: `${i * 130}px`,
                left: `${i * 40}px`,
                width: "340px",
              }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  delay: c.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-forest-light/80 backdrop-blur-md border border-gold/30 rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-gold/80">Settlement</div>
                <div className="font-display text-4xl text-ivory mt-2">{c.amount}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-ivory/70">{c.tag}</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-forest-dark border-y border-gold/15 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span
              key={i}
              className="mx-8 text-ivory/60 text-sm tracking-[0.2em] uppercase flex items-center gap-8"
            >
              {t}
              <Diamond className="w-2 h-2 fill-gold text-gold" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import justice from "@/assets/justice-statue.jpg";
import meeting from "@/assets/team-meeting.jpg";
import gavel from "@/assets/gavel.jpg";
import { CountUp } from "./CountUp";

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-forest text-ivory relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grain-overlay pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image mosaic */}
        <div className="relative h-[560px]">
          <motion.img
            src={justice}
            alt="Lady Justice statue"
            loading="lazy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-[60%] h-[420px] object-cover rounded-2xl ring-2 ring-gold/40"
          />
          <motion.img
            src={meeting}
            alt="Lexara legal team in consultation"
            loading="lazy"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="absolute bottom-0 right-0 w-[55%] h-[280px] object-cover rounded-2xl ring-2 ring-gold/40"
          />
          <motion.img
            src={gavel}
            alt="Judges gavel"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-[180px] right-[15%] w-[180px] h-[180px] object-cover rounded-2xl ring-2 ring-gold/60 shadow-2xl"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
            ◆ Pioneering Justice with Personalized Care
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-ivory leading-[1.05]">
            Our Story is <br />
            <span className="italic text-gold">Their Victory.</span>
          </h2>
          <div className="my-8 h-px w-16 bg-gold" />
          <p className="text-ivory/75 leading-relaxed max-w-lg">
            Founded in 1998, Lexara was built on a single conviction: that elite legal counsel
            should be measured not only by precedent, but by the lives it protects. Three
            generations of attorneys later, we still answer every case with the same discipline that
            built our name.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: 20, s: "+", label: "Years" },
              { n: 98, s: "%", label: "Success" },
              { n: 500, s: "+", label: "Cases" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-gold/40 rounded-full px-4 py-4 text-center"
              >
                <div className="font-display text-2xl text-gold">
                  <CountUp to={s.n} suffix={s.s} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/60 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

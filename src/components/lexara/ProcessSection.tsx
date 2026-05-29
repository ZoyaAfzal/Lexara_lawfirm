import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import process from "@/assets/process-consult.jpg";

const steps = [
  {
    n: "01",
    title: "Initial Consultation",
    desc: "A confidential conversation to understand your situation, goals, and the legal terrain ahead.",
  },
  {
    n: "02",
    title: "Case Evaluation",
    desc: "Senior partners weigh evidence, jurisdiction, and risk to recommend a clear strategic path.",
  },
  {
    n: "03",
    title: "Document Collection",
    desc: "We coordinate every exhibit, deposition and filing with rigorous attention to chain of custody.",
  },
  {
    n: "04",
    title: "Legal Research",
    desc: "Our team builds a precedent-backed argument tailored to the court, judge and opposing counsel.",
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ The Process</div>
          <h2 className="font-display text-5xl md:text-6xl text-forest text-balance">
            Focused on Process, <br />
            Driven by <span className="italic">Results.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative gold-bracket p-2 sticky top-32"
          >
            <img
              src={process}
              alt="Lexara attorneys reviewing case documents"
              loading="lazy"
              className="w-full h-[560px] object-cover rounded-xl"
            />
          </motion.div>

          <div ref={ref} className="relative pl-10">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-forest/15">
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 left-0 w-px bg-gold"
              />
            </div>
            <div className="space-y-14">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="group relative"
                >
                  <span className="absolute -left-[44px] top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-ivory" />
                  <div className="flex items-baseline gap-6">
                    <span className="font-display font-bold text-5xl text-gold/30 group-hover:text-gold transition-colors">
                      {s.n}
                    </span>
                    <h3 className="font-display text-2xl text-forest group-hover:text-gold-muted transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-md group-hover:translate-x-2 transition-transform duration-300">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

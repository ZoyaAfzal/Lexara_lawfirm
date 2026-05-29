import { motion } from "motion/react";
import {
  Leaf,
  ScrollText,
  Stethoscope,
  Lightbulb,
  Building2,
  Users,
  Home,
  Shield,
} from "lucide-react";

const areas = [
  {
    icon: Leaf,
    title: "Environmental Law",
    desc: "Defending corporate sustainability and regulatory compliance.",
  },
  {
    icon: ScrollText,
    title: "Estate Planning",
    desc: "Protecting legacies across generations with strategic foresight.",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    desc: "Holding institutions accountable for negligence and harm.",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    desc: "Securing inventions, brands, and creative work worldwide.",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    desc: "Counsel for mergers, governance, and complex transactions.",
  },
  {
    icon: Users,
    title: "Family Law",
    desc: "Discreet, compassionate representation through difficult chapters.",
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Closing high-value transactions and resolving title disputes.",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    desc: "Robust defense built on diligence and constitutional precision.",
  },
];

export function PracticeAreas() {
  return (
    <section id="practice" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ Practice Areas</div>
          <h2 className="font-display text-5xl md:text-6xl text-forest text-balance">
            Navigating Complexities <br />
            with <span className="italic">Legal Precision.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden bg-white border border-border p-8 rounded-2xl hover:bg-forest hover:shadow-2xl transition-colors duration-500 cursor-pointer"
              >
                <span className="absolute left-0 top-0 h-full w-[3px] bg-gold origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <Icon className="w-8 h-8 text-forest group-hover:text-gold transition-colors duration-500" />
                <h3 className="font-display text-2xl mt-6 text-forest group-hover:text-ivory transition-colors duration-500">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-ivory/70 leading-relaxed transition-colors duration-500">
                  {a.desc}
                </p>
                <div className="mt-6 text-xs tracking-[0.25em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Learn More →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

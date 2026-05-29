import { motion } from "motion/react";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic Legal",
    price: "1,500",
    desc: "Essential counsel for everyday legal matters.",
    features: [
      "Two consultations per month",
      "Document review (up to 10 pages)",
      "Email support within 48 hours",
      "Annual legal health audit",
    ],
    featured: false,
  },
  {
    name: "Family Law",
    price: "3,500",
    desc: "Comprehensive support for personal and family matters.",
    features: [
      "Unlimited consultations",
      "Court representation included",
      "Dedicated senior attorney",
      "Mediation and arbitration",
      "Priority response within 12 hours",
    ],
    featured: true,
  },
  {
    name: "Business Start-Up",
    price: "5,000",
    desc: "Strategic foundation for ambitious companies.",
    features: [
      "Entity formation and structuring",
      "Contract drafting and review",
      "IP filing assistance",
      "Quarterly compliance reviews",
      "On-call corporate counsel",
    ],
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-28 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ Pricing</div>
          <h2 className="font-display text-5xl md:text-6xl text-forest text-balance">
            Legal Expertise <br />
            Without the <span className="italic">High Cost.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => {
            const direction = i === 0 ? -40 : i === 2 ? 40 : 0;
            const verticalY = i === 1 ? 40 : 0;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: direction, y: verticalY }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={p.featured ? {} : { y: -6 }}
                className={`relative rounded-3xl p-10 transition-all duration-500 ${
                  p.featured
                    ? "bg-forest text-ivory shadow-2xl md:scale-105 z-10 border border-gold/40"
                    : "bg-white border border-border hover:border-gold/40 hover:shadow-xl"
                }`}
              >
                {p.featured && (
                  <>
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-forest-dark text-[10px] tracking-[0.25em] uppercase font-semibold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                    <Crown className="absolute top-6 right-6 w-6 h-6 text-gold" />
                  </>
                )}
                <h3
                  className={`font-display text-2xl ${p.featured ? "text-ivory" : "text-forest"}`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    p.featured ? "text-ivory/70" : "text-muted-foreground"
                  }`}
                >
                  {p.desc}
                </p>
                <div className="my-8 flex items-baseline gap-2">
                  <span className="text-lg text-gold">$</span>
                  <span
                    className={`font-display text-6xl ${p.featured ? "text-ivory" : "text-forest"}`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`text-sm ${p.featured ? "text-ivory/60" : "text-muted-foreground"}`}
                  >
                    /month
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full ${
                          p.featured ? "bg-gold/20" : "bg-forest/10"
                        }`}
                      >
                        <Check className="w-3 h-3 text-gold" />
                      </span>
                      <span className={p.featured ? "text-ivory/85" : "text-foreground/80"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`block text-center px-6 py-4 rounded-full font-medium tracking-wide transition-colors ${
                    p.featured
                      ? "bg-gold text-forest-dark hover:bg-gold-light"
                      : "border border-forest text-forest hover:bg-forest hover:text-ivory"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

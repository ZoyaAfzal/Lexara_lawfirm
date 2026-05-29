import { motion } from "motion/react";
import { Scale, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";

const cols = [
  { title: "Firm", links: ["About", "Team", "Careers", "Press"] },
  { title: "Practice", links: ["Corporate", "Family", "Litigation", "IP"] },
  { title: "Resources", links: ["Journal", "Case Results", "FAQs", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Disclaimers", "Sitemap"] },
];

const socials = [Facebook, Twitter, Instagram, Linkedin, Youtube];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/70 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-10 pb-16 border-b border-ivory/10">
          <div className="lg:col-span-2 max-w-sm">
            <div className="flex items-center gap-3">
              <Scale className="w-7 h-7 text-gold" />
              <span className="font-display text-2xl tracking-[0.25em] text-ivory">LEXARA</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ivory/60">
              Premium litigation and advisory services for individuals and corporations, practiced
              with the discipline of a firm that has answered every case since 1998.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-full border border-ivory/15 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <form className="mt-8 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-ivory/5 border border-ivory/15 px-4 py-3 rounded-full text-sm placeholder:text-ivory/40 focus:outline-none focus:border-gold"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-gold text-forest-dark px-5 py-3 rounded-full text-sm font-medium inline-flex items-center gap-1.5"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs tracking-[0.25em] uppercase text-gold mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="text-xs text-ivory/40"></div>
          <div className="flex items-center gap-6">
            <a
              href="https://axistechgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ivory/40 hover:text-gold transition-colors"
            >
              Powered by AxisTechGroup
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

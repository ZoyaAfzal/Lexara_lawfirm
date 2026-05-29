import { motion } from "motion/react";
import { ArrowUpRight, Twitter, Instagram, Linkedin } from "lucide-react";
import a1 from "@/assets/attorney-1.jpg";
import a2 from "@/assets/attorney-2.jpg";
import a3 from "@/assets/attorney-3.jpg";

const team = [
  { img: a1, name: "Karen Brooks", role: "Corporate Attorney" },
  { img: a2, name: "Sophia Miller", role: "Environmental Attorney" },
  { img: a3, name: "Lisa Parker", role: "Tax Attorney" },
];

export function TeamSection() {
  return (
    <section id="team" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ Our Team</div>
            <h2 className="font-display text-5xl md:text-6xl text-forest text-balance">
              Meet the Legal Experts <br />
              Behind <span className="italic">Success.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
            >
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-[0.85]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-dark via-forest-dark/80 to-transparent p-6 pt-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-2xl text-ivory">{m.name}</h3>
                <p className="text-gold/80 text-sm mt-1">{m.role}</p>
                <div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {[Twitter, Instagram, Linkedin].map((Icon, j) => (
                    <motion.a
                      key={j}
                      href="#"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-9 h-9 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-forest-dark transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

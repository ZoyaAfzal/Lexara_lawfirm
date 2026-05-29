import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { casesData } from "@/lib/cases-data";
import { ArrowUpRight } from "lucide-react";

export function CaseResults() {
  return (
    <section id="results" className="py-28 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ Case Results</div>
          <h2 className="font-display text-5xl md:text-6xl text-forest text-balance">
            Successful Outcomes, <br />
            <span className="italic">Proven Client Results.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {casesData.map((c, i) => (
            <Link key={c.id} to="/cases/$caseId" params={{ caseId: c.id }} className="block group">
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-transparent hover:border-gold/40 transition-all bg-white hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase bg-forest/80 text-gold px-3 py-1.5 rounded-full">
                    {c.tag}
                  </span>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/90 text-forest-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-8 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl text-forest group-hover:text-gold-muted transition-colors">
                      {c.title}
                    </h3>
                    <div className="mt-2 text-xs uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study
                    </div>
                  </div>
                  <span className="font-display text-3xl text-gold group-hover:scale-110 transition-transform">
                    {c.amount}
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

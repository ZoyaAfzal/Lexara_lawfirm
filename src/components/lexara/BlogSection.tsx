import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { blogData } from "@/lib/blog-data";

export function BlogSection() {
  return (
    <section id="journal" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">◆ Journal</div>
            <h2 className="font-display text-5xl md:text-6xl text-forest text-balance">
              Notes from the <span className="italic">Bench.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogData.map((p, i) => (
            <Link
              key={p.id}
              to="/journal/$articleId"
              params={{ articleId: p.id }}
              className="group block"
            >
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="cursor-pointer"
              >
                <div className="overflow-hidden rounded-3xl mb-6">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] tracking-[0.25em] uppercase bg-gold/15 text-gold-muted px-3 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="font-display text-3xl text-forest group-hover:text-gold-muted transition-colors text-balance">
                  {p.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-forest group-hover:text-gold-muted transition-colors">
                  Read article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

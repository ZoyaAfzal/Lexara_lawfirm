import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { casesData } from "@/lib/cases-data";
import { ArrowLeft, Diamond, Scale, ShieldCheck, Trophy } from "lucide-react";
import { Navbar } from "@/components/lexara/Navbar";
import { Footer } from "@/components/lexara/Footer";

export const Route = createFileRoute("/cases/$caseId")({
  component: CaseDetail,
});

function CaseDetail() {
  const { caseId } = Route.useParams();
  const caseResult = casesData.find((c) => c.id === caseId);

  if (!caseResult) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-display text-4xl text-forest mb-4">Case Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The case study you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          hash="results"
          className="inline-flex items-center gap-2 bg-gold text-forest-dark px-6 py-3 rounded-full font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory text-forest min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              hash="results"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Results
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs tracking-[0.25em] uppercase bg-forest text-gold px-4 py-1.5 rounded-full font-medium">
                {caseResult.tag}
              </span>
              <span className="text-xs tracking-[0.25em] uppercase border border-gold/40 text-gold px-4 py-1.5 rounded-full font-medium flex items-center gap-2">
                <Trophy className="w-3 h-3" />
                Proven Outcome
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
              {caseResult.title}
            </h1>

            <div className="flex items-center gap-6 py-8 border-y border-forest/10 mb-12">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold mb-1">
                  Settlement Value
                </div>
                <div className="font-display text-4xl text-forest">{caseResult.amount}</div>
              </div>
              <div className="w-px h-12 bg-forest/10" />
              <div>
                <div className="text-xs uppercase tracking-widest text-gold mb-1">Firm Lead</div>
                <div className="font-display text-2xl text-forest">Senior Partner</div>
              </div>
            </div>
          </motion.div>

          {/* Image & Content Grid */}
          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-gold/20 shadow-2xl">
                <img
                  src={caseResult.img}
                  alt={caseResult.title}
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3 space-y-12"
            >
              <div>
                <h2 className="flex items-center gap-3 font-display text-3xl mb-4">
                  <Diamond className="w-4 h-4 fill-gold text-gold" />
                  Case Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseResult.description}
                </p>
              </div>

              <div className="bg-forest text-ivory p-8 rounded-3xl relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 grain-overlay opacity-10" />
                <h3 className="flex items-center gap-3 font-display text-2xl text-gold mb-4 relative z-10">
                  <ShieldCheck className="w-5 h-5" />
                  The Legal Challenge
                </h3>
                <p className="text-ivory/70 leading-relaxed relative z-10">
                  {caseResult.challenge}
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-3 font-display text-3xl mb-4">
                  <Scale className="w-5 h-5 text-gold" />
                  Successful Outcome
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseResult.outcome}
                </p>
              </div>

              <div className="pt-8 border-t border-forest/10">
                <Link
                  to="/"
                  hash="booking"
                  className="inline-flex items-center gap-3 bg-gold text-forest-dark px-8 py-4 rounded-full font-medium hover:bg-gold-light transition-all hover:scale-[1.02]"
                >
                  Consult on Similar Case
                  <Trophy className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

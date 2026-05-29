import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { blogData } from "@/lib/blog-data";
import { ArrowLeft, Bookmark, Calendar, Share2 } from "lucide-react";
import { Navbar } from "@/components/lexara/Navbar";
import { Footer } from "@/components/lexara/Footer";

export const Route = createFileRoute("/journal/$articleId")({
  component: ArticleDetail,
});

function ArticleDetail() {
  const { articleId } = Route.useParams();
  const post = blogData.find((p) => p.id === articleId);

  if (!post) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-display text-4xl text-forest mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The journal entry you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gold text-forest-dark px-6 py-3 rounded-full font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-ivory text-forest min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Journal
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.25em] uppercase bg-gold/15 text-gold-muted px-4 py-1.5 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl md:text-6xl leading-[1.1] mb-8 text-balance">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-forest/10 mb-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-gold" />
                  {post.date}
                </div>
                <div className="w-px h-4 bg-forest/10" />
                <div className="text-sm font-medium italic text-forest">
                  By Lexara Legal Editorial
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-muted-foreground hover:text-gold transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="text-muted-foreground hover:text-gold transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:text-forest prose-p:text-muted-foreground prose-p:leading-relaxed"
          >
            <p className="text-xl text-forest/80 leading-relaxed mb-12 font-medium">
              {post.description}
            </p>

            <div className="space-y-12">
              {post.content.map((section, idx) => (
                <div key={idx} className="bg-white/50 p-10 rounded-3xl border border-forest/5">
                  <h2 className="text-3xl mb-6">{section.heading}</h2>
                  <p className="text-muted-foreground">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-forest/10 text-center">
              <h4 className="font-display text-2xl mb-6">Interested in discussing these topics?</h4>
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-3 bg-gold text-forest-dark px-10 py-5 rounded-full font-medium hover:bg-gold-light transition-all hover:scale-[1.03]"
              >
                Contact Our Legal Team
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

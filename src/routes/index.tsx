import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/lexara/Navbar";
import { HeroSection } from "@/components/lexara/HeroSection";
import { PracticeAreas } from "@/components/lexara/PracticeAreas";
import { AboutSection } from "@/components/lexara/AboutSection";
import { ProcessSection } from "@/components/lexara/ProcessSection";
import { CaseResults } from "@/components/lexara/CaseResults";
import { Testimonials } from "@/components/lexara/Testimonials";
import { TeamSection } from "@/components/lexara/TeamSection";
import { PricingSection } from "@/components/lexara/PricingSection";
import { BlogSection } from "@/components/lexara/BlogSection";
import { CTABanner } from "@/components/lexara/CTABanner";
import { ContactSection } from "@/components/lexara/ContactSection";
import { Footer } from "@/components/lexara/Footer";
import { ReadingProgress, ScrollTop } from "@/components/lexara/ScrollUtilities";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lexara — Premium Litigation & Advisory Law Firm" },
      {
        name: "description",
        content:
          "Lexara is a premium litigation and advisory firm safeguarding justice for individuals and corporations since 1998. 98% win rate, 500+ cases won.",
      },
      { property: "og:title", content: "Lexara — Premium Litigation & Advisory" },
      {
        property: "og:description",
        content:
          "Where centuries of doctrine meet a modern standard of care. Book a free confidential consultation.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ivory text-foreground">
      <ReadingProgress />
      <Navbar />
      <HeroSection />
      <PracticeAreas />
      <AboutSection />
      <ProcessSection />
      <CaseResults />
      <Testimonials />
      <TeamSection />
      <PricingSection />
      <BlogSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </main>
  );
}

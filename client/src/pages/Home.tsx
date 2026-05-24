import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ResumeView from "@/components/ResumeView";

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => {
    setShowResume(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar onResumeClick={handleResumeClick} isPrintMode={showResume} />

      {/* Main Content */}
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-foreground/60">
          <p>
            © 2026 Varshini Gorapalli. Designed and built with passion for AI/ML.
          </p>
        </div>
      </footer>

      {/* Resume Modal */}
      {showResume && <ResumeView onClose={() => setShowResume(false)} />}
    </div>
  );
}

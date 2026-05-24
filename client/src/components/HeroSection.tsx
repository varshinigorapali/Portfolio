import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const handleScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 flex items-center justify-center pt-20 pb-20"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Greeting Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Varshini
            <br />
            <span className="text-accent">Gorapalli</span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              AI/ML Student
            </h2>
            <p className="text-lg text-muted-foreground">
              Avanthi Institute of Engineering and Technology
            </p>
          </div>

          {/* Bio */}
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about artificial intelligence and machine learning. I love building
            innovative solutions and exploring the intersection of technology and creativity.
            Let's connect and create something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={handleScroll}
              className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Explore My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={handleScroll}
              className="mx-auto flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

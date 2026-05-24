import { BookOpen, Lightbulb } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm an AI/ML enthusiast currently pursuing my BTech degree at Avanthi Institute
                of Engineering and Technology. My passion lies in developing intelligent systems
                that solve real-world problems.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With a strong foundation in programming and a keen interest in machine learning,
                I'm constantly exploring new technologies and methodologies to enhance my skills
                and contribute meaningfully to the field.
              </p>
            </div>

            {/* Right Column - Key Points */}
            <div className="space-y-6">
              {/* Education */}
              <div className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Education</h3>
                    <p className="text-foreground/70">
                      BTech in Computer Science
                      <br />
                      Avanthi Institute of Engineering and Technology
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Interests</h3>
                    <p className="text-foreground/70">
                      Machine Learning, Deep Learning, Computer Vision, NLP, and AI Applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "QuickKart",
    description:
      "An innovative 3D product viewer that allows users to visualize products in three dimensions. This project showcases advanced web technologies for interactive product visualization, enhancing the e-commerce experience.",
    techStack: ["React", "Three.js", "WebGL", "JavaScript"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg text-foreground/70">
              Showcasing my work and technical expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-8 space-y-6">
                  {/* Project Header */}
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/60 mb-3 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            ))}
          </div>

          {/* More Projects Coming */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-8 text-center">
            <p className="text-foreground/80">
              <span className="font-semibold text-accent">More projects coming soon!</span> I'm
              constantly working on new and exciting projects to expand my portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

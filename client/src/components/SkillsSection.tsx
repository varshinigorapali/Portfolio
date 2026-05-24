import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number; // 0-100
  description: string;
}

const skills: Skill[] = [
  {
    name: "C",
    level: 85,
    description: "Strong foundation in systems programming and algorithms",
  },
  {
    name: "Python",
    level: 90,
    description: "Proficient in data science, ML libraries, and automation",
  },
  {
    name: "Java",
    level: 80,
    description: "Experience with OOP principles and application development",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg text-foreground/70">
              Technical expertise and programming proficiencies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-accent mb-2">{skill.name}</h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 mb-4">{skill.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-foreground/60">
                      Proficiency
                    </span>
                    <span className="text-xs font-bold text-accent">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>

                {/* Skill Badge */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                    {skill.level >= 90
                      ? "Expert"
                      : skill.level >= 75
                        ? "Advanced"
                        : "Intermediate"}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-8 text-center">
            <p className="text-foreground/80">
              <span className="font-semibold text-accent">Always learning:</span> I'm continuously
              expanding my skills in AI/ML frameworks, data science tools, and modern development
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

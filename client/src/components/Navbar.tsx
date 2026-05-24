import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onResumeClick: () => void;
  isPrintMode?: boolean;
}

export default function Navbar({ onResumeClick, isPrintMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  if (isPrintMode) {
    return null; // Hide navbar in print mode
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
            VG
          </div>
          <span className="font-semibold text-foreground hidden sm:inline">
            Varshini
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-foreground hover:text-accent transition-colors font-medium text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Resume Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            onClick={onResumeClick}
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hidden sm:inline-flex"
          >
            Resume
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-foreground hover:text-accent transition-colors font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={onResumeClick}
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

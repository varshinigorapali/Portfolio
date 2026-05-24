import ContactForm from "./ContactForm";
import { Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg text-foreground/70">
              I'd love to hear from you. Let's connect and collaborate!
            </p>
          </div>

          {/* Contact Info & Form Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-8 h-8 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">
                    Feel free to reach out for any inquiries or opportunities.
                  </p>
                  <a
                    href="mailto:varshinigorapalli3@gmail.com"
                    className="text-accent hover:text-accent/80 font-medium mt-2 inline-block"
                  >
                    varshinigorapalli3@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-8 h-8 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground/70">
                    Based in India, open to remote opportunities and collaborations worldwide.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 space-y-3">
                <h3 className="font-semibold text-foreground">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors font-medium text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors font-medium text-sm"
                  >
                    GitHub
                  </a>

                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg border border-border p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

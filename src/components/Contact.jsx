import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolioData";

const links = [
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: profile.github, label: "GitHub", icon: Github, external: true },
];

export default function Contact() {
  return (
    <footer id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10">
          <div>
            <p className="font-display font-medium text-[26px] max-w-[18ch] leading-tight mb-5">
              Let's talk about your data.
            </p>
            <p className="text-muted max-w-[46ch]">
              Open to data analyst roles, internships, and interesting
              datasets in general.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {links.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="font-mono text-sm flex items-center justify-between border-b border-line-soft py-2.5 hover:text-forest transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Icon size={15} />
                  {label}
                </span>
                <ArrowUpRight size={14} className="text-muted" />
              </a>
            ))}
          </div>
        </div>

        <div className="font-mono text-[11px] text-muted mt-12">
          © 2026 {profile.name} — built by hand, one row at a time.
        </div>
      </div>
    </footer>
  );
}

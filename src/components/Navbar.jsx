const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
  {
    href: "/cv.pdf",
    label: "Resume",
    download: "CV.pdf",
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-7 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm">
          sumanta<span className="text-forest">.</span>data
        </a>

        <div className="flex gap-7 font-mono text-[13px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              download={link.download || undefined}
              className="text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

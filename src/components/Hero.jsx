import { profile } from "../data/portfolioData";
import RetentionChart from "./RetentionChart";

export default function Hero() {
  return (
    <header id="top" className="border-b border-line bg-paper-raised/45 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-7 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-end">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] text-muted mb-4.5">
            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse-ring" />
            {profile.status}
          </div>

          <h1 className="font-display font-medium text-[40px] md:text-6xl leading-[1.02] tracking-tight mb-4.5">
            {profile.name}.
          </h1>

          <p className="font-mono text-[15px] text-forest mb-5.5">
            {profile.role}
          </p>

          <p className="max-w-[46ch] text-muted mb-7.5">{profile.tagline}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl">
            <a
              href="#project"
              className="font-mono text-[12px] whitespace-nowrap text-center px-3 py-2.5 border border-forest bg-forest text-paper hover:bg-ink hover:border-ink transition-colors"
            >
              View the project
            </a>
            <a
              href="#contact"
              className="font-mono text-[12px] whitespace-nowrap text-center px-3 py-2.5 border border-line bg-paper-raised text-ink hover:border-forest hover:text-forest transition-colors"
            >
              Get in touch
            </a>
            <a
              href="/cv.pdf"
              download="CV.pdf"
              className="font-mono text-[12px] whitespace-nowrap text-center px-3 py-2.5 border border-line bg-paper-raised text-ink hover:border-forest hover:text-forest transition-colors"
            >
              Download resume
            </a>
          </div>
        </div>

        <RetentionChart />
      </div>
    </header>
  );
}

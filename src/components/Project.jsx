import { Github, ArrowUpRight } from "lucide-react";
import { project } from "../data/portfolioData";

export default function Project() {
  return (
    <section id="project" className="border-b border-line py-16">
      <div className="max-w-4xl mx-auto px-7">
        <h2 className="font-display font-medium text-[28px] mb-9">Project</h2>

        <div className="border border-line bg-paper-raised">
          {/* Title + tags */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 p-7 border-b border-line-soft">
            <div>
              <h3 className="font-display font-medium text-[26px] mb-2">
                {project.name}
              </h3>
              <p className="max-w-[60ch] text-muted text-[15px]">
                {project.summary}
              </p>
            </div>

            <div className="flex flex-wrap md:justify-end gap-2 content-start">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-muted border border-line px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-line-soft">
            {project.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-5.5 px-7 ${
                  i < project.stats.length - 1 ? "border-r border-line-soft" : ""
                } border-b md:border-b-0 border-line-soft`}
              >
                <div className="font-mono text-2xl text-forest">
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] text-muted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* What it covers / what it's for */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-7">
            <div>
              <h4 className="font-mono text-xs text-muted mb-3">
                What it covers
              </h4>
              <ul className="space-y-2 text-[14.5px] text-muted list-disc list-inside marker:text-forest">
                {project.covers.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-muted mb-3">
                What it's for
              </h4>
              <ul className="space-y-2 text-[14.5px] text-muted list-disc list-inside marker:text-forest">
                {project.goals.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link */}
          <div className="px-7 py-5 flex gap-5 flex-wrap">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12.5px] border-b border-ink hover:text-forest hover:border-forest transition-colors"
            >
              <Github size={14} />
              View on GitHub
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

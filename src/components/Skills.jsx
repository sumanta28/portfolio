import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-16">
      <div className="max-w-4xl mx-auto px-7">
        <h2 className="font-display font-medium text-[28px] mb-9">Skills</h2>

        <div className="divide-y divide-line-soft">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
            >
              <span className="font-mono text-[12.5px] text-muted sm:w-40 shrink-0">
                {group.category}
              </span>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm border border-line px-3 py-1 bg-paper-raised"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

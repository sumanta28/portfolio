import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-16">
      <div className="max-w-4xl mx-auto px-7">
        <h2 className="font-display font-medium text-[28px] mb-9">About</h2>

        <div className="max-w-[66ch] text-muted space-y-4">
          {about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

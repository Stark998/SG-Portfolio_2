import { useScrollReveal } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";

const colorMap = {
  cyan: "bg-accent/5 border-accent/20 text-accent",
  purple: "bg-accent2/10 border-accent2/20 text-purple-300",
  green: "bg-accent3/10 border-accent3/20 text-accent3",
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="border-t border-border py-28 px-8 md:px-16 max-w-screen-xl mx-auto">
      <div className="section-label">02 — Skills</div>
      <h2 className="section-title">Technical Arsenal</h2>

      <div
        ref={ref}
        className="reveal grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
      >
        {portfolioData.skills.map((cat, index) => (
          <div
            key={cat.category}
            className="bg-card border border-border p-6 rounded card-animate reveal-item hover:border-accent/20 hover:-translate-y-1 transition-all duration-200"
            style={{ transitionDelay: `${120 + index * 80}ms` }}
          >
            <div className="text-2xl mb-4">{cat.icon}</div>
            <div className="font-mono text-[0.7rem] text-accent tracking-widest uppercase mb-4">
              {cat.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  className={`font-mono text-[0.68rem] px-2.5 py-1 border rounded-sm ${colorMap[cat.color]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

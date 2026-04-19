import { useScrollReveal } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";

const badgeColors = {
  cyan: "bg-accent/10 text-accent border-accent/20",
  purple: "bg-accent2/10 text-purple-300 border-accent2/20",
  green: "bg-accent3/10 text-accent3 border-accent3/20",
};

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="border-t border-border py-28 px-8 md:px-16 max-w-screen-xl mx-auto">
      <div className="section-label">04 — Projects</div>
      <h2 className="section-title">What I've Built</h2>

      <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {portfolioData.projects.map((project, index) => (
          <div
            key={project.num}
            className="relative bg-card border border-border p-7 rounded overflow-hidden group card-animate reveal-item hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
            style={{ transitionDelay: `${120 + index * 80}ms` }}
          >
            {/* Top bar animation */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              style={{
                background: "linear-gradient(90deg, #00e5ff, #7c3aed)",
              }}
            />

            {/* Number */}
            <div className="font-mono text-[0.65rem] text-muted tracking-[0.2em] mb-4">
              PROJECT / {project.num}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-1">{project.title}</h3>

            {/* Meta row */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="font-mono text-[0.62rem] text-muted">
                👥 Team of {project.teamSize}
              </span>
              <span className="font-mono text-[0.62rem] text-muted">
                🛠 {project.role}
              </span>
            </div>

            {/* Env */}
            <div className="font-mono text-[0.62rem] text-accent/70 mb-4 tracking-wider">
              ENV: {project.environment}
            </div>

            {/* Description */}
            <p className="text-sm text-muted leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s.label}
                  className={`font-mono text-[0.65rem] px-2 py-0.5 border rounded-sm ${badgeColors[s.color]}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

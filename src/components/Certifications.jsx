import { useScrollReveal } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";

export default function Certifications() {
  const ref = useScrollReveal();

  const hasCertifications = portfolioData.certifications.length > 0;

  return (
    <section id="certifications" className="border-t border-border py-28 px-8 md:px-16 max-w-screen-xl mx-auto">
      <div className="section-label">05 — {hasCertifications ? 'Certifications & Education' : 'Education'}</div>
      <h2 className="section-title">Credentials</h2>

      <div ref={ref} className={`reveal grid grid-cols-1 ${hasCertifications ? 'md:grid-cols-2' : ''} gap-6 max-w-3xl`}>
        {/* Certifications */}
        {hasCertifications && (
          <div>
            <p className="font-mono text-[0.68rem] text-muted tracking-widest uppercase mb-4">
              Certifications
            </p>
            <div className="space-y-3">
              {portfolioData.certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-5 bg-card border border-border p-5 rounded card-animate reveal-item hover:border-accent/30 transition-colors duration-200"
                  style={{ transitionDelay: `${120 + index * 60}ms` }}
                >
                  <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded flex items-center justify-center text-2xl shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">{cert.name}</div>
                    <div className="font-mono text-[0.68rem] text-accent tracking-widest">
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        <div className={hasCertifications ? '' : 'md:col-span-2'}>
          <p className="font-mono text-[0.68rem] text-muted tracking-widest uppercase mb-4">
            Education
          </p>
          <div className="space-y-3">
            {portfolioData.education.map((edu, index) => (
              <div
                key={edu.degree}
                className="flex items-center gap-5 bg-card border border-border p-5 rounded card-animate reveal-item hover:border-accent2/30 transition-colors duration-200"
                style={{ transitionDelay: `${180 + index * 70}ms` }}
              >
                <div className="w-14 h-14 bg-accent2/10 border border-accent2/20 rounded flex items-center justify-center text-2xl shrink-0">
                  {edu.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">{edu.degree}</div>
                  <div className="font-mono text-[0.68rem] text-purple-400 tracking-widest mb-0.5">
                    {edu.institution}
                  </div>
                  <div className="font-mono text-[0.65rem] text-muted">
                    Graduated {edu.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

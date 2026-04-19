import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border px-8 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="font-mono text-[0.68rem] text-muted tracking-widest">
        © {year}{" "}
        <span className="text-accent">{portfolioData.personal.name}</span>
        {" "}— Technical Consultant
      </p>
      <p className="font-mono text-[0.62rem] text-muted tracking-widest">
        Built with React + Tailwind CSS
      </p>
    </footer>
  );
}

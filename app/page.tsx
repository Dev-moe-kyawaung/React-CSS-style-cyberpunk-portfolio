import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--bg-dark)] relative overflow-hidden">
      {/* simple parallax‑style backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b1a]/90 via-transparent to-[#1a1a2e]/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32 md:py-40 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[color:var(--primary)] mb-4 tracking-tight">
          ⭐ Moe Kyaw Aung
        </h1>
        <h2 className="text-2xl md:text-3xl text-[color:var(--text-light)] font-medium mb-6">
          Android Senior Developer
        </h2>

        <p className="max-w-2xl text-[color:var(--text-muted)] text-lg mb-12 leading-relaxed">
          Android Developer with 12+ years of experience building secure, scalable,
          and user‑friendly apps with Kotlin, Jetpack Compose, Firebase, and CI/CD.
        </p>

        {/* stats counters (you can hook into a Counter component) */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <span className="text-4xl text-[color:var(--primary)] font-bold">10+</span>
            <span className="text-sm text-[color:var(--text-muted)] uppercase tracking-wide">
              Years
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl text-[color:var(--primary)] font-bold">3K+</span>
            <span className="text-sm text-[color:var(--text-muted)] uppercase tracking-wide">
              Apps
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl text-[color:var(--primary)] font-bold">122</span>
            <span className="text-sm text-[color:var(--text-muted)] uppercase tracking-wide">
              Repos
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl text-[color:var(--primary)] font-bold">100%</span>
            <span className="text-sm text-[color:var(--text-muted)] uppercase tracking-wide">
              Satisfaction
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/portfolio"
            className="px-8 py-3 border border-[color:var(--primary)] text-[color:var(--primary)] rounded-full font-semibold hover:bg-[color:var(--primary)] hover:text-[color:var(--bg-dark)] transition-all duration-300 shadow-[0_0_15px_rgba(0,217,255,0.3)]"
          >
            View My Apps
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-[color:var(--accent)] text-[color:var(--accent)] rounded-full font-semibold hover:bg-[color:var(--accent)] hover:text-[color:var(--bg-dark)] transition-all duration-300 shadow-[0_0_15px_rgba(255,0,170,0.3)]"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

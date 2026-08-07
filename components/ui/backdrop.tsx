/**
 * Fixed page backdrop: aurora blooms, a perspective grid plane and a fine
 * scanline. Purely decorative and entirely CSS — no JS, no images.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-void" />

      {/* aurora blooms */}
      <div className="absolute -top-[28rem] left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(210,4,45,0.12),transparent_62%)] blur-3xl animate-drift" />
      <div className="absolute -left-64 top-[38rem] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(168,16,46,0.1),transparent_62%)] blur-3xl animate-drift-slow" />
      <div className="absolute -right-72 top-[86rem] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(227,38,79,0.09),transparent_62%)] blur-3xl animate-drift" />
      <div className="absolute bottom-0 left-1/3 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(191,21,56,0.08),transparent_62%)] blur-3xl animate-drift-slow" />

      {/* grid plane fading toward the horizon */}
      <div className="absolute inset-0 grid-plane [mask-image:radial-gradient(ellipse_120%_75%_at_50%_0%,#000_10%,transparent_72%)] opacity-70" />

      {/* horizon glow line */}
      <div className="absolute left-0 right-0 top-[76vh] h-px bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(255,245,247,0.72)_100%)]" />

      {/* drifting scanline */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-white/[0.025] to-transparent animate-scan" />

      {/* subtle film grain */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22/></svg>')] [background-size:160px]" />
    </div>
  );
}

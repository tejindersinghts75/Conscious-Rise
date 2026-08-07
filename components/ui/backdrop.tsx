/**
 * Fixed page backdrop: aurora blooms, a perspective grid plane and a fine
 * scanline. Purely decorative and entirely CSS — no JS, no images.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-void" />

      {/* grid plane fading toward the horizon */}
      <div className="absolute inset-0 grid-plane [mask-image:radial-gradient(ellipse_120%_75%_at_50%_0%,#000_10%,transparent_72%)] opacity-70" />

      {/* drifting scanline */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-white/[0.025] to-transparent animate-scan" />

      {/* subtle film grain */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22/></svg>')] [background-size:160px]" />
    </div>
  );
}

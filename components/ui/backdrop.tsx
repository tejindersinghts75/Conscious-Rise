/** Plain white page background behind all non-hero sections. */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[#ffffff]" />
  );
}

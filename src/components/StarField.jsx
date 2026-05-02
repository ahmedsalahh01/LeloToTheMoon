export default function StarField({ soft = false, fixed = false }) {
  return (
    <div className={`pointer-events-none inset-0 overflow-hidden ${fixed ? "fixed" : "absolute"}`}>
      <div className={`stars-layer ${soft ? "opacity-45" : "opacity-80"}`} />
      <div className={`stars-layer stars-layer-two ${soft ? "opacity-30" : "opacity-60"}`} />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_50%_20%,rgba(255,143,184,0.15),transparent_45%)]" />
    </div>
  );
}

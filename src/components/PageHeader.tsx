const GOLD = "#c5a059";
const DARK = "#0c0c0a";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section
      className="crosshatch relative overflow-hidden"
      style={{ backgroundColor: DARK }}
    >
      {/* Phantom text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none leading-none hidden md:block"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "16rem",
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.025)",
        }}
      >
        AUL
      </div>

      {/* Gold bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(to right, ${GOLD}, rgba(197,160,89,0.35), transparent)` }}
      />

      <div className="relative z-10 px-5 md:px-12 py-10 md:py-16">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-5">
          <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.22em]"
            style={{ color: GOLD }}
          >
            {label}
          </span>
        </div>

        {/* Title */}
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            letterSpacing: "0.03em",
            color: "#ffffff",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-base mt-4 max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

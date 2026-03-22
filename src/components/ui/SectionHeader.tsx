interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700/90 ${
            align === "center"
              ? "inline-flex items-center justify-center gap-3"
              : "inline-flex items-center gap-2"
          }`}
        >
          {align === "center" ? (
            <span className="hidden h-px w-8 bg-emerald-200 sm:inline" aria-hidden />
          ) : (
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
          )}
          <span>{eyebrow}</span>
          {align === "center" ? (
            <span className="hidden h-px w-8 bg-emerald-200 sm:inline" aria-hidden />
          ) : null}
        </p>
      ) : null}
      <h2
        className={`mt-4 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15] ${align === "center" ? "mx-auto max-w-3xl" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

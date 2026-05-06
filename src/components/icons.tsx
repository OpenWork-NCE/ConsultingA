/**
 * Institutional icon set — minimal line SVGs in the spirit of Lucide. Stroked
 * with `currentColor` so each consumer can drive color via Tailwind utilities.
 *
 * No third-party dependency: the cabinet ships only what it uses.
 */

type IconProps = { className?: string };

const COMMON = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ScaleIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <path d="M12 3v18" />
      <path d="M5 8h14" />
      <path d="M5 8l-3 7a4 4 0 0 0 6 0z" />
      <path d="M19 8l-3 7a4 4 0 0 0 6 0z" />
      <path d="M8 21h8" />
      <path d="M12 21v-3" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  );
}

export function DiamondIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <path d="M12 3l8 7-8 11-8-11z" />
      <path d="M4 10h16" />
      <path d="M9 10l3 11 3-11" />
      <path d="M9 10l3-7 3 7" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function CalculatorIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <path d="M4 4h12a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z" />
      <path d="M4 4v15" />
      <path d="M8 8h6M8 12h6" />
    </svg>
  );
}

export function GavelIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <path d="m14 13-6 6" />
      <path d="m9 8 7 7" />
      <path d="m11 6 7 7" />
      <path d="m14 4 6 6" />
      <path d="M3 21h8" />
      <path d="M5 17l4 4" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 21V12h6v9" />
      <path d="M8 7h.01M12 7h.01M16 7h.01" />
      <path d="M8 11h.01M16 11h.01" />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <path d="M4 6h16v10H8l-4 4z" />
      <path d="M8 11h8M8 8h5" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M12 7.5v4M12 11.5l-5.5 4.5M12 11.5l5.5 4.5" />
    </svg>
  );
}

export function ZapIcon({ className }: IconProps) {
  return (
    <svg {...COMMON} className={className}>
      <path d="M13 3 4 14h7l-1 7 9-11h-7z" />
    </svg>
  );
}

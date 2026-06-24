import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SearchIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.5" y2="16.5" />
  </svg>
);

export const AccountIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

export const BagIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M6 7h12l-1.2 13H7.2L6 7z" />
    <path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <line x1="3" y1="8" x2="21" y2="8" />
    <line x1="3" y1="16" x2="21" y2="16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg viewBox="0 0 18 9" {...base} {...p}>
    <line x1="0" y1="4.5" x2="17" y2="4.5" />
    <polyline points="13,1 17,4.5 13,8" />
  </svg>
);

export const ShieldCheck = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z" />
    <polyline points="8.5,12 11,14.5 15.5,9.5" />
  </svg>
);

export const Certificate = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Leaf = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-1 .3-2 .8-3" />
    <path d="M9 14c1.5-2 3-3 5-3.5" />
  </svg>
);

export const Truck = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="2" y="7" width="12" height="9" />
    <path d="M14 10h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const Lock = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="5" y="11" width="14" height="9" rx="1" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const Sliders = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
    <circle cx="9" cy="8" r="2.2" fill="currentColor" stroke="none" />
    <circle cx="15" cy="16" r="2.2" fill="currentColor" stroke="none" />
  </svg>
);

export const Instagram = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Pinterest = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 18l1.4-5.8M9 10.2c0-1.4 1-2.4 2.2-2.4 1 0 1.6.7 1.6 1.6 0 1-.6 2.2-1 3 .4 1.4 2.4 1.2 3.2-.4.6-1.2.4-3-.8-4-1.4-1.2-4-1-5.2.6" />
  </svg>
);

export const Tiktok = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M16 3c.3 2 1.6 3.6 3.6 3.9v2.4c-1.3 0-2.6-.4-3.6-1.1v5.9a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.5a3 3 0 1 0 2.1 2.9V3H16z" />
  </svg>
);

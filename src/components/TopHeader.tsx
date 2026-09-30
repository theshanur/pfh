export default function TopHeader() {
  return (
    <div className="bg-pfh-green text-[11px] leading-none text-white sm:text-xs">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2.5 sm:px-8 lg:px-12">
        <p className="truncate tracking-wide text-white/90">
          <span className="font-medium text-white">
            Trade Global Commodities with Confidence
          </span>
          <span className="mx-2 hidden text-white/40 sm:inline">|</span>
          <span className="hidden sm:inline">
            Tight Spreads <span className="mx-1.5 text-white/40">•</span>{" "}
            Advanced Platforms <span className="mx-1.5 text-white/40">•</span>{" "}
            Dedicated Support
          </span>
        </p>
        <p className="hidden shrink-0 items-center gap-2 tracking-wide md:flex">
          <ShieldIcon />
          <span>Your Success. Our Priority</span>
        </p>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-pfh-gold"
    >
      <path
        d="M12 3l7 3v5.5c0 4.5-3 7.8-7 9.5-4-1.7-7-5-7-9.5V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M9.2 12.2l1.8 1.8 3.8-3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

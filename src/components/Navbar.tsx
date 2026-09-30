const navLinks = [
  "Markets",
  "Platforms",
  "Accounts",
  "Education",
  "About",
  "Partners",
  "Sponsorship",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-pfh-green/5 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3.5 sm:px-8 lg:px-12">
        <a
          href="/"
          className="font-serif text-[1.35rem] font-semibold tracking-[0.04em] text-pfh-green sm:text-[1.55rem]"
        >
          PFH MARKETS
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-medium text-pfh-green/85 transition-colors hover:text-pfh-green"
              >
                {link}
                <ChevronDown />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full text-pfh-green transition-colors hover:bg-pfh-bone"
          >
            <UserIcon />
          </button>
          <a
            href="#open-account"
            className="inline-flex items-center gap-2 rounded-full bg-pfh-green px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-pfh-green-deep hover:shadow-md sm:px-5"
          >
            Open Live Account
            <ArrowRight />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-pfh-green xl:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path
        d="M2.5 3.75L5 6.25L7.5 3.75"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 19.5c1.6-3.2 4-4.8 6.5-4.8s4.9 1.6 6.5 4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

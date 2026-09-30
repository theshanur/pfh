import {
  ArrowRight,
  ChartColumnBigIcon,
  Globe2Icon,
  GlobeLockIcon,
  UserStarIcon,
  WheatIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const stats = [
  {
    label: "Instruments",
    value: "2,000+",
    icon: <ChartColumnBigIcon className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    label: "Traders",
    value: "300K+",
    icon: <UserStarIcon className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    label: "Countries",
    value: "20+",
    icon: <Globe2Icon className="w-8 h-8" strokeWidth={1.5} />,
  },
  {
    label: "Commodity Markets",
    value: "Global",
    icon: <GlobeLockIcon className="w-8 h-8" strokeWidth={1.5} />,
  },
];

export default function Hero() {
  return (
    <section className="hero-atmosphere relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:px-12 lg:pb-20 lg:pt-14 xl:gap-4">
        <div className="relative z-10 max-w-xl lg:max-w-none">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-pfh-gold/45 bg-[linear-gradient(135deg,#faf6eb,#f3ead4)] px-3.5 py-1.5 shadow-[0_1px_0_rgba(197,160,89,0.15)]">
            <WheatIcon strokeWidth={1.5} className="w-4 h-4" />
            <p className="text-[11px] font-semibold tracking-[0.14em] text-pfh-green">
              COMMODITIES TRADING
            </p>
          </div>

          <h1 className="animate-fade-up delay-1 mt-5 font-serif text-[2.55rem] font-bold leading-[1.12] tracking-[-0.01em] text-pfh-green sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] ">
            Trade the Assets <br />
            That Power the World
          </h1>

          <p className=" font-medium animate-fade-up delay-2">
            Access global commodity markets through advanced trading technology,
            professional tools, and a trading environment designed to help
            traders participate in some of the world&apos;s most essential
            assets.
          </p>

          <div className="animate-fade-up delay-4 mt-9 flex flex-wrap items-center gap-3">
            <Button
              variant="default"
              size="lg"
              className="h-12 px-6 rounded-2xl">
              Open Live Account
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 rounded-2xl">
              Try Demo Account
            </Button>
          </div>
        </div>

        <div className="animate-fade-in delay-5 relative mx-auto w-full max-w-[740px] lg:mx-0 lg:max-w-none">
          <div
            className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.18),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div className="animate-float relative">
            <Image
              src="/hero2.png"
              alt="Commodity trading dashboard surrounded by oil, gold, sugar, wheat and corn"
              width={2492}
              height={1696}
              className="relative z-10 h-auto w-full drop-shadow-[0_28px_50px_rgba(0,44,35,0.18)] scale-125"
              sizes="(max-width: 1024px) 90vw, 48vw"
            />
          </div>
        </div>
        <ul className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-2 col-span-2">
          {stats.map(({ label, value, icon: Icon }) => (
            <li key={label} className="flex items-end gap-1.5 max-w-40 w-full">
              <div className="text-pfh-gold">{Icon}</div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold leading-tight text-pfh-green sm:text-[15px]">
                  {value}
                </span>
                <span className="text-[11px] leading-tight text-pfh-text-muted sm:text-xs">
                  {label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

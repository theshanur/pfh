import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Headphones,
  Laptop,
  Lock,
  MonitorSmartphone,
  Settings2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Advanced Trading Technology",
    description:
      "Access commodity markets through MetaTrader 5 and professional trading tools.",
    icon: Settings2,
  },
  {
    title: "Transparent Trading Conditions",
    description: "Trade with clear pricing and straightforward market access.",
    icon: Laptop,
  },
  {
    title: "Multi-Device Access",
    description:
      "Monitor commodity markets from desktop, web, and mobile devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Educational Resources",
    description:
      "Expand your understanding of supply-demand dynamics and market behavior.",
    icon: BookOpen,
  },
  {
    title: "Secure Trading Environment",
    description:
      "Built with a focus on reliability, security, and account protection.",
    icon: Lock,
  },
  {
    title: "Dedicated Support",
    description: "Professional assistance whenever support is needed.",
    icon: Headphones,
  },
];

const platformHighlights = [
  "Advanced Charting",
  "Multiple Timeframes",
  "Expert Advisors",
  "One Platform",
];

export default function WhyTradeWithPfh() {
  return (
    <section
      id="why-trade-with-pfh"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfaf7_0%,#f5f3ed_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 space-y-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-pfh-gold uppercase">
            Why Trade Commodities with PFH Markets
          </p>

          <h2 className="mt-4 font-serif text-[2rem] leading-[1.18] font-bold tracking-[-0.01em] text-pfh-green sm:text-4xl lg:text-[2.75rem]">
            Access Markets Shaped by the{" "}
            <span className="gold-text">Real World</span>
          </h2>

          <div className="mt-5 space-y-4 font-medium">
            <p>
              Commodity markets are influenced by real-world events ranging from
              agricultural production and industrial demand to trade policies
              and global economic activity.
            </p>
            <p>
              PFH Markets provides access to commodity CFDs through advanced
              trading technology, transparent trading conditions, educational
              resources, and professional support designed to help traders
              navigate dynamic global markets.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12 mb-28">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex gap-4">
              <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#faf6eb,#f3ead4)] text-pfh-gold ring-1 ring-pfh-gold/25">
                <Icon className="size-5" strokeWidth={1.5} aria-hidden />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-pfh-green sm:text-base">
                  {title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-pfh-text-muted sm:text-sm">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#001813] items-center gap-10 flex sm:px-8 rounded-3xl">
          <div className="text-center lg:text-left py-6">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-pfh-gold uppercase">
              Platform Preview
            </p>
            <h3 className="mt-3 font-serif text-[1.85rem] leading-tight font-bold text-white sm:text-3xl lg:text-[2.15rem]">
              Trade Commodities with{" "}
              <span className="gold-text">MetaTrader 5</span>
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              Advanced charts. Powerful analysis. Seamless trading.
            </p>
            <a
              href="#metatrader-5"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-7 h-11 rounded-full bg-[linear-gradient(135deg,#d4b87a,#c5a059_45%,#a8843f)] px-6 text-[13px] font-semibold text-pfh-green hover:brightness-105",
              )}>
              Explore MetaTrader 5
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none -mt-24 -mb-5">
            <div
              className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.18),transparent_70%)]"
              aria-hidden
            />
            <Image
              src="/platform-preview.png"
              alt="MetaTrader 5 trading platform on laptop and mobile"
              width={1200}
              height={800}
              className="relative z-10 mx-auto h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

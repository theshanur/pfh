import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Headphones,
  Laptop,
  MonitorSmartphone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Advanced Trading Technology",
    description:
      "Access commodity markets through MetaTrader 5 and professional trading tools.",
    icon: Laptop,
  },
  {
    title: "Transparent Trading Conditions",
    description:
      "Trade with clear pricing and straightforward market access.",
    icon: Scale,
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
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support",
    description: "Professional assistance whenever support is needed.",
    icon: Headphones,
  },
];

export default function WhyTradeWithPFH() {
  return (
    <section
      id="why-trade-with-pfh"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfaf7_0%,#f5f3ed_100%)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-pfh-gold uppercase">
            Why Trade Commodities with PFH Markets
          </p>

          <h2 className="mt-4 font-serif text-[2rem] leading-[1.18] font-semibold tracking-[-0.01em] text-pfh-green sm:text-4xl lg:text-[2.75rem]">
            Access Markets Shaped by the{" "}
            <span className="gold-text italic">Real World</span>
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-pfh-text-muted sm:text-base">
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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl bg-white/80 p-6 ring-1 ring-pfh-green/8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:ring-pfh-gold/25"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#faf6eb,#f3ead4)] text-pfh-gold ring-1 ring-pfh-gold/25">
                <Icon className="size-5" strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-pfh-green">
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-pfh-text-muted sm:text-sm">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-pfh-green">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_70%_40%,rgba(197,160,89,0.14),transparent_60%)]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-12 lg:py-20">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-pfh-gold uppercase">
              Platform Preview
            </p>
            <h3 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.01em] text-white sm:text-4xl">
              MetaTrader <span className="gold-text italic">5</span>
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75 lg:mx-0 mx-auto">
              Trade commodity CFDs with professional charting, multi-device
              access, and the tools traders rely on across desktop, web, and
              mobile.
            </p>
            <a
              href="#metatrader-5"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-12 rounded-full bg-[linear-gradient(135deg,#d4b87a,#c5a059_45%,#a8843f)] px-6 text-sm font-semibold text-pfh-green hover:brightness-105"
              )}
            >
              Explore MetaTrader 5
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <div className="order-1 relative mx-auto w-full max-w-xl lg:order-2 lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.2),transparent_70%)] blur-2xl"
              aria-hidden
            />
            <Image
              src="/metatrader.png"
              alt="MetaTrader 5 trading platform on laptop and mobile"
              width={1400}
              height={900}
              className="relative z-10 h-auto w-full drop-shadow-[0_28px_50px_rgba(0,0,0,0.35)]"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

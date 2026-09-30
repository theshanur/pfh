import {
  ArrowRight,
  CalendarRange,
  Scale,
  Search,
  ShieldCheck,
  Ship,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const resources = [
  {
    title: "Supply & Demand Fundamentals",
    description:
      "Learn how production and consumption influence commodity pricing.",
    icon: Scale,
    href: "#supply-demand",
  },
  {
    title: "Seasonal Market Cycles",
    description:
      "Understand how seasonal patterns affect agricultural and soft commodities.",
    icon: CalendarRange,
    href: "#seasonal-cycles",
  },
  {
    title: "Global Trade & Logistics",
    description:
      "Explore the role of transportation, exports, imports, and supply chains.",
    icon: Ship,
    href: "#trade-logistics",
  },
  {
    title: "Risk Management",
    description: "Develop techniques to navigate changing market conditions.",
    icon: ShieldCheck,
    href: "#risk-management",
  },
];

export default function WhatMovesCommodityMarkets() {
  return (
    <section
      id="what-moves-commodity-markets"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfaf7_0%,#f5f3ed_100%)] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pfh-green/10 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-pfh-gold uppercase">
            Understand What Moves Commodity Markets
          </p>

          <h2 className="mt-4 font-serif text-[2rem] leading-[1.18] font-semibold tracking-[-0.01em] text-pfh-green sm:text-4xl lg:text-[2.75rem]">
            Supply. Demand.{" "}
            <span className="gold-text italic">Global Events</span>.
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-pfh-text-muted sm:text-base">
            <p>
              Commodity markets are influenced by factors that often differ from
              traditional financial assets.
            </p>
            <p>
              Weather conditions, harvest results, industrial production,
              inventory levels, trade agreements, transportation disruptions,
              and geopolitical developments can all impact commodity prices.
            </p>
            <p>
              Understanding these market drivers can help traders build greater
              awareness of how commodity markets respond to changing global
              conditions.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {resources.map(({ title, description, icon: Icon, href }) => (
            <Card
              key={title}
              className="group border-0 bg-white/80 shadow-none ring-pfh-green/8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:ring-pfh-gold/25"
            >
              <CardHeader className="gap-4">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#faf6eb,#f3ead4)] text-pfh-gold ring-1 ring-pfh-gold/25">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <CardTitle className="font-sans text-[15px] font-semibold text-pfh-green">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-[13px] leading-relaxed text-pfh-text-muted sm:text-sm">
                  {description}
                </CardDescription>
              </CardContent>
              <CardFooter className="mt-auto flex items-center justify-between border-0 bg-transparent px-(--card-spacing) pb-(--card-spacing) pt-0">
                <span
                  className="inline-flex size-8 items-center justify-center rounded-full text-pfh-gold/80 ring-1 ring-pfh-gold/20"
                  aria-hidden
                >
                  <Search className="size-3.5" strokeWidth={1.75} />
                </span>
                <a
                  href={href}
                  aria-label={`Explore ${title}`}
                  className="inline-flex size-8 items-center justify-center rounded-full text-pfh-green transition-colors hover:bg-pfh-green hover:text-white"
                >
                  <ArrowRight className="size-4" strokeWidth={2} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <a
            href="#demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-full bg-pfh-green px-7 text-sm font-semibold text-white hover:bg-pfh-green-deep"
            )}
          >
            Open Demo Account
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

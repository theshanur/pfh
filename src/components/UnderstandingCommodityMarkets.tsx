import { ArrowRight, Factory, Globe2, Layers, RefreshCcw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  {
    title: "Global Supply & Demand",
    description:
      "Commodity prices often respond to shifts in production, consumption, and inventory levels worldwide.",
    icon: RefreshCcw,
  },
  {
    title: "Essential Economic Assets",
    description:
      "Commodities play a critical role across agriculture, manufacturing, transportation, and industry.",
    icon: Factory,
  },
  {
    title: "Market Diversity",
    description:
      "Access a wide range of commodity markets through a single trading platform.",
    icon: Layers,
  },
  {
    title: "Global Market Influence",
    description:
      "Economic growth, trade activity, and geopolitical developments can all impact commodity markets.",
    icon: Globe2,
  },
];

const links = [
  { label: "Learn CFD Trading", href: "#cfd-trading" },
  { label: "Explore Market Analysis", href: "#market-analysis" },
];

export default function UnderstandingCommodityMarkets() {
  return (
    <section
      id="understanding-commodity-markets"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfaf7_0%,#f5f3ed_100%)] py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pfh-green/10 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-pfh-gold uppercase">
            Understanding Commodity Markets
          </p>

          <h2 className="mt-4 font-serif text-[2rem] leading-[1.18] font-semibold tracking-[-0.01em] text-pfh-green sm:text-4xl lg:text-[2.75rem]">
            From Farms to Factories. Commodities Drive the{" "}
            <span className="gold-text italic">Global Economy</span>.
          </h2>

          <div className="mt-6 space-y-4 text-pfh-text-muted font-medium">
            <p>
              Commodities are among the oldest and most important assets traded
              in financial markets. They form the foundation of global commerce,
              supporting industries, economies, and everyday life.
            </p>
            <p>
              From agricultural products and industrial raw materials to
              globally consumed resources, commodity markets help connect
              producers, businesses, and consumers around the world.
            </p>
            <p>
              Commodity prices are often influenced by supply and demand
              dynamics, weather conditions, geopolitical developments,
              production levels, and global economic activity, making them a
              unique asset class within financial markets.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {cards.map(({ title, description, icon: Icon }) => (
            <Card
              key={title}
              className="border-0 bg-white/80 shadow-none ring-pfh-green/8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:ring-pfh-gold/25">
              <CardHeader className="gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#faf6eb,#f3ead4)] text-pfh-gold ring-1 ring-pfh-gold/25">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <CardTitle className="font-sans text-[15px] font-semibold text-pfh-green">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[13px] leading-relaxed text-pfh-text-muted sm:text-sm">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:mt-14">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-pfh-gold transition-colors hover:text-pfh-gold-dark">
              {label}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

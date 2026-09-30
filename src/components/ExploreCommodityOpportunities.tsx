import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Agricultural Commodities",
    products: ["Corn", "Wheat", "Soybeans", "Coffee"],
    focus:
      "Crop production, weather patterns, harvest seasons, and global demand.",
    image: "/agricultural.png",
    imageAlt: "Corn and wheat representing agricultural commodities",
    featured: false,
  },
  {
    title: "Soft Commodities",
    products: ["Sugar", "Cocoa", "Cotton", "Orange Juice"],
    focus:
      "Consumer demand, seasonal production cycles, and international trade.",
    image: "/soft.png",
    imageAlt: "Cocoa, cotton and soft commodity materials",
    featured: true,
  },
  {
    title: "Industrial Commodities",
    products: ["Copper", "Aluminum", "Nickel", "Zinc"],
    focus:
      "Manufacturing activity, infrastructure development, and economic growth.",
    image: "/industrial.png",
    imageAlt: "Copper, aluminum, nickel and zinc metal bars",
    featured: false,
  },
];

export default function ExploreCommodityOpportunities() {
  return (
    <section
      id="explore-commodity-opportunities"
      className="relative overflow-hidden bg-[#001813] py-20 text-white sm:py-24 lg:py-28 ">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(197,160,89,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-pfh-gold uppercase">
            Explore Commodity Trading Opportunities
          </p>

          <h2 className="mt-4 font-serif text-[2rem] leading-[1.18] font-semibold tracking-[-0.01em] sm:text-4xl lg:text-[2.75rem]">
            One Market. Essential{" "}
            <span className="gold-text">Global Resources</span>.
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-white/75 sm:text-base">
            Commodity markets include a wide variety of assets that support
            industries, businesses, and economies around the world. Each
            category is influenced by different market forces and supply-demand
            dynamics.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-28 lg:grid-cols-3 lg:gap-6">
          {categories.map(category => (
            <article
              key={category.title}
              className={cn(
                "group flex flex-col rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7",
                category.featured
                  ? "bg-[linear-gradient(180deg,#fbfaf7_0%,#f3f0e8_100%)] text-pfh-green shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
                  : "bg-[linear-gradient(165deg,#0a3a2e_0%,#002c23_55%,#001f18_100%)] ring-1 ring-white/8",
              )}>
              <div className="relative flex h-40 items-center justify-center sm:h-44 -mt-28">
                <div
                  className={cn(
                    "pointer-events-none absolute inset-[18%] rounded-full blur-2xl",
                    category.featured
                      ? "bg-[radial-gradient(circle,rgba(197,160,89,0.22),transparent_70%)]"
                      : "bg-[radial-gradient(circle,rgba(197,160,89,0.16),transparent_70%)]",
                  )}
                  aria-hidden
                />
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  width={420}
                  height={280}
                  className="z-10 h-full w-auto max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <h3
                className={cn(
                  "font-serif text-2xl font-semibold tracking-[-0.01em]",
                  category.featured ? "text-pfh-green" : "text-pfh-gold-light",
                )}>
                {category.title}
              </h3>

              <p
                className={cn(
                  "mt-3 text-[13px] font-medium tracking-wide sm:text-sm",
                  category.featured ? "text-pfh-gold-dark" : "text-pfh-gold/90",
                )}>
                {category.products.join(" • ")}
              </p>

              <p
                className={cn(
                  "mt-4 flex-1 text-[14px] leading-relaxed sm:text-[15px]",
                  category.featured ? "text-pfh-text-muted" : "text-white/75",
                )}>
                {category.focus}
              </p>

              <Button
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "mt-7 h-11 w-full rounded-2xl px-5 text-[13px] font-semibold sm:w-auto sm:self-start",
                  category.featured
                    ? "bg-pfh-green text-white hover:bg-pfh-green-deep"
                    : "bg-[linear-gradient(135deg,#d4b87a,#c5a059_45%,#a8843f)] text-pfh-green hover:brightness-105",
                )}>
                View Trading Specifications
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

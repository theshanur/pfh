import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UnderstandingCommodityMarkets from "@/components/UnderstandingCommodityMarkets";
import ExploreCommodityOpportunities from "@/components/ExploreCommodityOpportunities";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <UnderstandingCommodityMarkets />
        <ExploreCommodityOpportunities />
      </main>
    </div>
  );
}

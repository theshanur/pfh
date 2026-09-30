import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UnderstandingCommodityMarkets from "@/components/UnderstandingCommodityMarkets";
import ExploreCommodityOpportunities from "@/components/ExploreCommodityOpportunities";
import WhyTradeWithPfh from "@/components/WhyTradeWithPFH";
import WhatMovesCommodityMarkets from "@/components/WhatMovesCommodityMarkets";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <UnderstandingCommodityMarkets />
        <ExploreCommodityOpportunities />
        <WhyTradeWithPfh />
        <WhatMovesCommodityMarkets />
        <Faq />
        <FinalCta />
      </main>
    </div>
  );
}

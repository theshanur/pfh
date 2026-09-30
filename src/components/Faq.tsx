import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are commodities?",
    answer:
      "Commodities are raw materials or primary goods used in the production of products and services. Examples include agricultural products, industrial materials, and energy resources.",
  },
  {
    question: "Which commodities can I access through PFH Markets?",
    answer:
      "PFH Markets provides access to a range of commodity markets including agricultural, soft, and industrial commodities through CFD trading.",
  },
  {
    question: "What influences commodity prices?",
    answer:
      "Commodity prices can be influenced by supply and demand, weather conditions, production levels, trade activity, geopolitical events, and economic growth.",
  },
  {
    question: "Why do traders participate in commodity markets?",
    answer:
      "Commodity markets offer exposure to assets that are influenced by real-world economic activity and global consumption trends.",
  },
  {
    question: "Is a demo account available?",
    answer:
      "Yes. Traders can explore commodity markets and platform functionality through a demo account before trading live markets.",
  },
  {
    question: "What platform does PFH Markets provide?",
    answer:
      "Commodity CFDs can be accessed through the MetaTrader 5 (MT5) trading platform.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pfh-green/10 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-pfh-gold uppercase">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-[2rem] leading-[1.18] font-semibold tracking-[-0.01em] text-pfh-green sm:text-4xl lg:text-[2.75rem]">
            Frequently Asked Questions About{" "}
            <span className="gold-text italic">Commodity Trading</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl lg:mt-14">
          <Accordion
            defaultValue={["item-0"]}
            className="gap-3"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-2xl border border-pfh-green/8 bg-[linear-gradient(180deg,#fbfaf7_0%,#f7f5f0_100%)] px-5 not-last:border-b sm:px-6"
              >
                <AccordionTrigger className="py-5 text-[15px] font-semibold text-pfh-green hover:no-underline sm:text-base **:data-[slot=accordion-trigger-icon]:text-pfh-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14px] leading-relaxed text-pfh-text-muted sm:text-[15px]">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

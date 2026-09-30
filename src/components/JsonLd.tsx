const siteUrl = "https://www.pfhmarkets.com";

const faqEntities = [
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

const geoCitationTopics = [
  {
    name: "What is commodity trading?",
    description:
      "Commodity trading involves buying and selling contracts linked to raw materials and primary goods such as agricultural products, soft commodities, and industrial metals, often through CFDs that track price movements without physical delivery.",
  },
  {
    name: "How do commodity markets work?",
    description:
      "Commodity markets connect producers, businesses, and consumers by pricing essential resources based on supply, demand, inventories, logistics, and global economic conditions.",
  },
  {
    name: "What affects commodity prices?",
    description:
      "Commodity prices can be affected by weather, harvest results, industrial production, inventory levels, trade agreements, transportation disruptions, and geopolitical developments.",
  },
  {
    name: "Supply and demand in commodity markets",
    description:
      "Shifts in production, consumption, and inventory levels worldwide often drive commodity pricing, making supply and demand a core market driver.",
  },
  {
    name: "Agricultural commodity trading",
    description:
      "Agricultural commodity trading covers staple crops such as corn, wheat, soybeans, and coffee, which are influenced by crop production, weather patterns, harvest seasons, and global demand.",
  },
  {
    name: "Industrial commodity market analysis",
    description:
      "Industrial commodity market analysis focuses on metals such as copper, aluminum, nickel, and zinc, which support manufacturing, infrastructure development, and economic growth.",
  },
];

export default function JsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PFH Markets",
      url: siteUrl,
      description:
        "PFH Markets provides access to commodity CFDs through advanced trading technology, educational resources, and professional market access.",
      knowsAbout: [
        "Commodity Trading",
        "Commodity CFDs",
        "Agricultural Commodities",
        "Industrial Commodities",
        "Soft Commodities",
        "Commodity Markets",
        "MetaTrader 5",
        ...geoCitationTopics.map((topic) => topic.name),
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PFH Markets",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Commodity Trading | Trade Global Commodity Markets | PFH Markets",
      description:
        "Trade commodity CFDs including agricultural, soft, and industrial commodities through PFH Markets. Access advanced trading tools, educational resources, and professional market access.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: geoCitationTopics.map((topic) => ({
        "@type": "Thing",
        name: topic.name,
        description: topic.description,
      })),
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/hero2.png`,
      },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqEntities.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "FinancialService",
      "@id": `${siteUrl}/#service`,
      name: "Commodity Trading Platform",
      provider: { "@id": `${siteUrl}/#organization` },
      description:
        "Trade commodities online through a professional commodity trading platform offering agricultural, soft, and industrial commodity CFDs on MetaTrader 5.",
      serviceType: [
        "Commodity Trading",
        "Commodity CFDs",
        "Commodity Trading Platform",
      ],
      areaServed: "Worldwide",
      url: siteUrl,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

"use client";

import React, { useState } from "react";
import { MinusCircle } from "lucide-react";

// Reusable Section Container
const SectionContainer = ({ children, className = "" }) => (
  <section className={`relative py-16 lg:py-24 ${className}`}>
    <div className="container mx-auto relative z-10">
      <div className="px-1 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-20">
        {children}
      </div>
    </div>
  </section>
);

export default function SEOFAQSection() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General FAQ" },
    { id: "dubai", label: "Dubai Specific SEO FAQs" },
    { id: "pricing", label: "Pricing & Process FAQs" },
    { id: "company", label: "Company & Expertise FAQs" },
  ];

  const faqData = {
    general: [
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy, and results depend on several factors, including industry competition, website history, and the effectiveness of the SEO strategy. Typically, you may start seeing noticeable improvements in rankings, traffic, and online visibility within 3-6 months. However, significant results often take 6-12 months or longer for competitive keywords, particularly in SEO efforts aiming for sustained growth.",
      },
      {
        question: "How do you measure the success of your SEO campaigns?",
        answer: `We track SEO success using key performance indicators (KPIs), such as:
• Organic Traffic: The number of visitors from search engines
• Keyword Rankings: Positions for target keywords in search results
• Click-Through Rate (CTR): Percentage of users clicking on your listings
• Domain Authority & Backlinks: Growth in high-quality backlinks
• Conversions & ROI: The impact on leads, sales, or other business goals
Generated & ROI tools like Google Analytics and Google Search Console to monitor performance and provide detailed reports.`,
      },
      {
        question: "What is the difference between on-page and off-page SEO?",
        answer: `• On-Page SEO refers to optimizations made on the website itself, such as keyword optimization, content quality, meta tags, internal linking, and page speed. This is all about optimizing the "inside" of your site.
• Off-Page SEO focuses on external factors that influence your site's authority and rankings, such as backlinks, social media signals, online reviews, brand mentions, and other external signals.
Both are essential for a well-rounded SEO strategy.`,
      },
      {
        question: "Do you provide technical SEO audits?",
        answer: `Yes, we offer comprehensive technical SEO audits to identify and resolve issues that may affect search rankings. Our audits include:
• Website speed and performance analysis
• Mobile-friendliness and responsive design assessment
• Crawlability and indexation issues
• Structured data and schema implementations
• Fixing broken links, redirects, and duplicate content
• Security and HTTPS implementation
These audits are essential for better search engine visibility.`,
      },
      {
        question:
          "Do you offer content marketing services as part of your SEO packages?",
        answer: `Yes, content marketing is an essential part of any SEO strategy. We provide:
• SEO-optimized blog writing to improve organic traffic
• Website content optimization for better engagement and rankings
• Landing page content tailored for conversions
• Social media content that supports SEO goals
• Content audits and strategy development for existing and new content
High-quality content plays a crucial role in ranking well in search engines, and we integrate it seamlessly with our SEO efforts.`,
      },
    ],
    dubai: [
      {
        question: "What makes Dubai SEO different from global SEO?",
        answer:
          "Dubai SEO requires understanding of local market dynamics, Arabic language considerations, cultural preferences, and region-specific search behaviors. We focus on local citations, Google My Business optimization, and Arabic-English bilingual content strategies.",
      },
      {
        question: "Do you optimize for Arabic keywords?",
        answer:
          "Yes, we provide comprehensive Arabic SEO services including Arabic keyword research, content optimization, and technical implementation for right-to-left (RTL) languages. Our team understands both Arabic and English search patterns in the UAE market.",
      },
    ],
    pricing: [
      {
        question: "What are your SEO pricing packages?",
        answer:
          "Our SEO packages are customized based on your business needs, competition level, and goals. We offer starter packages for small businesses and comprehensive enterprise solutions. Contact us for a detailed quote based on your specific requirements.",
      },
      {
        question: "Do you offer month-to-month SEO services?",
        answer:
          "While we recommend 6-12 month commitments for optimal results, we do offer flexible month-to-month options. However, SEO is most effective as a long-term strategy, and longer commitments often provide better ROI and results.",
      },
    ],
    company: [
      {
        question: "How long has your agency been providing SEO services?",
        answer:
          "Our agency has been providing professional SEO services for over 8 years, with specific expertise in the Dubai and UAE market for the past 5 years. We've helped hundreds of businesses improve their online visibility and grow their revenue through search engine optimization.",
      },
      {
        question: "What industries do you specialize in?",
        answer:
          "We work with businesses across various industries including real estate, healthcare, e-commerce, hospitality, legal services, automotive, and luxury brands. Our team has particular expertise in Dubai's key sectors like tourism, finance, and retail.",
      },
    ],
  };

  const formatAnswer = (answer) => {
    const lines = answer.split("\n");
    return lines.map((line, index) => {
      if (line.trim().startsWith("•")) {
        return (
          <div key={index} className="flex items-start gap-2 mb-1">
            <span className="text-[#000000] text-18px font-hk-grotesk font-medium mt-0">
              •
            </span>
            <span className="text-[#000000] text-18px font-hk-grotesk font-medium">
              {line.trim().substring(1).trim()}
            </span>
          </div>
        );
      }
      return line.trim() ? (
        <p
          key={index}
          className="text-[#000000] text-18px font-hk-grotesk font-medium mb-2"
        >
          {line.trim()}
        </p>
      ) : null;
    });
  };

  return (
    <SectionContainer className="bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="font-bold text-32px text-[#000000] font-hk-grotesk">
              Frequently Asked Questions
            </h2>
            <MinusCircle className="w-7 h-7 text-[#000000]" />
          </div>
        </div>

        {/* Tab Container */}
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="bg-gray-100 border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-20px font-hk-grotesk font-bold border-b-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? "text-[#000000] border-[#845EF7] "
                      : "text-gray-600 border-transparent hover:text-[#000000] hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-100 py-8">
            <div className="space-y-8">
              {faqData[activeTab].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 lg:p-6 shadow-sm"
                >
                  <h3 className="font-bold text-20px text-[#000000] font-hk-grotesk mb-4 px-2">
                    {faq.question}
                  </h3>
                  <div className="font-medium text-16px text-[#000000] font-hk-grotesk space-y-2 px-2">
                    {formatAnswer(faq.answer)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

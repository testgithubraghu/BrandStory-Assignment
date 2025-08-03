"use client";

import { useState, useEffect } from "react";

// Reusable Section Container
const SectionContainer = ({ children }) => (
  <section className={`relative py-16 lg:py-20`}>
    <div className="container mx-auto relative z-10">
      <div className="px-1 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-20">
        {children}
      </div>
    </div>
  </section>
);

export default function SEOProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const processSteps = [
    {
      title: "Understanding Your Business",
      description:
        "At Brandstory, we prioritize understanding your business, objectives, and unique aspects to craft a tailored SEO strategy. As your trusted SEO expert in Dubai, we begin with a comprehensive website audit, identifying and fixing technical and on-page SEO issues. While premium tools help address quick fixes, we go beyond by ensuring complete error-free optimization for better crawl accessibility and user experience. Our strategic approach aligns with your business model, driving enhanced visibility and long-term growth in the competitive Dubai market.",
      image: "/images/seo-process.png",
    },
    {
      title: "Website Architecture Planning",
      description:
        "We analyze and optimize your website's structure to ensure seamless navigation and improved user experience. Our team creates a comprehensive site architecture plan that enhances both search engine crawling and user engagement across all pages.",
      image: "/images/seo-process.png",
    },
    {
      title: "Competitor Audit",
      description:
        "Our comprehensive competitor analysis identifies opportunities and gaps in your market. We study your competitors' strategies, keywords, and content approaches to develop a winning SEO strategy that puts you ahead in Dubai's competitive landscape.",
      image: "/images/seo-process.png",
    },
    {
      title: "Keyword Research",
      description:
        "We conduct in-depth keyword research to identify high-value, relevant keywords for your business. Our team focuses on both short-tail and long-tail keywords that align with your target audience's search behavior in the Dubai market.",
      image: "/images/seo-process.png",
    },
    {
      title: "On Page Optimization",
      description:
        "Our team optimizes every element of your web pages including meta titles, descriptions, headers, and content structure. We ensure your pages are fully optimized for search engines while maintaining excellent user experience.",
      image: "/images/seo-process.png",
    },
    {
      title: "Content Optimization",
      description:
        "We create and optimize high-quality, engaging content that resonates with your target audience. Our content strategy focuses on providing value while incorporating strategic keywords naturally throughout your website.",
      image: "/images/seo-process.png",
    },
    {
      title: "Topical Authority Optimization",
      description:
        "We build your website's topical authority by creating comprehensive content clusters around your main topics. This approach helps establish your brand as an industry expert and improves overall search visibility.",
      image: "/images/seo-process.png",
    },
    {
      title: "UI UX Optimization",
      description:
        "Our team focuses on improving user interface and user experience elements that impact SEO performance. We optimize page layouts, navigation, and interactive elements to reduce bounce rates and increase engagement.",
      image: "/images/seo-process.png",
    },
    {
      title: "Conversion Rate Optimization - CRO",
      description:
        "We implement strategic CRO techniques to turn your website visitors into customers. Our approach includes A/B testing, landing page optimization, and user behavior analysis to maximize your ROI.",
      image: "/images/seo-process.png",
    },
    {
      title: "Technical Optimization",
      description:
        "We address all technical SEO aspects including site speed, mobile responsiveness, schema markup, and crawlability issues. Our technical optimization ensures your website meets all search engine requirements.",
      image: "/images/seo-process.png",
    },
    {
      title: "Off Page Management",
      description:
        "Our off-page SEO strategy includes building high-quality backlinks, managing online reputation, and establishing your brand's authority across the web. We focus on sustainable, white-hat techniques for long-term success.",
      image: "/images/seo-process.png",
    },
    {
      title: "Monitoring & Reporting",
      description:
        "We provide comprehensive monitoring and detailed reporting of your SEO performance. Our monthly reports include keyword rankings, traffic analytics, and actionable insights to continuously improve your results.",
      image: "/images/seo-process.png",
    },
  ];

  const handleStepChange = (index) => {
    if (index === activeStep || isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveStep(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 200);
  };

  return (
    <SectionContainer className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="mb-6 font-bold text-38px text-[#000000] font-hk-grotesk text-center leading-tight">
          Our Comprehensive SEO Process
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-7xl mx-auto">
        {/* Left Side - Process Steps */}
        <div>
          {processSteps.map((step, index) => (
            <div
              key={index}
              onClick={() => handleStepChange(index)}
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300"
            >
              <div
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  activeStep === index ? "bg-[#845EF7]" : "bg-gray-400"
                }`}
              ></div>
              <span
                className={`font-medium transition-colors font-hk-grotesk text-24px duration-300 ${
                  activeStep === index ? "text-[#845EF7]" : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side - Active Card */}
        <div className="lg:sticky lg:top-2 lg:self-start">
          <div className="bg-[#845EF71F] rounded-xl shadow-lg overflow-hidden p-8">
            {/* Card Content with Slide Animation */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isAnimating
                  ? "opacity-0 transform translate-x-8"
                  : "opacity-100 transform translate-x-0"
              }`}
            >
              {/* Card Header */}
              <h3 className="text-[#000000] text-32px font-hk-grotesk font-bold text-left mb-4">
                {processSteps[activeStep].title}
              </h3>

              {/* Card Image */}
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                <img
                  src={processSteps[activeStep].image}
                  alt={processSteps[activeStep].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <p className="text-[#000000] text-20px font-hk-grotesk font-medium text-left">
                {processSteps[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

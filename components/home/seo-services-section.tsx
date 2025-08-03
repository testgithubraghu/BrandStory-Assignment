"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";

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

export default function SEOServicesSection() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      title: "Keyword Research & Strategy",
      description:
        "We identify high-value keywords that align with your target audience's search intent, ensuring your business appears in relevant searches.",
      bgColor: "bg-blue-50",
      features: [
        "Competitor analysis & market research",
        "Long-tail keyword strategy for high conversion rates",
        "Industry-specific keyword optimization (e.g., SEO for luxury brands in Dubai)",
      ],
    },
    {
      title: "On-Page Optimization",
      description:
        "Our team fine-tunes your website's content, structure, and metadata to improve rankings and user experience.",
      bgColor: "bg-green-50",
      features: [
        "Optimized meta titles, descriptions, and headers",
        "SEO-friendly content enhancements",
        "Internal linking & URL structuring",
      ],
    },
    {
      title: "Technical SEO",
      description:
        "We ensure your website is fast, mobile-friendly, and technically sound for search engine crawlers.",
      bgColor: "bg-purple-50",
      features: [
        "Website speed optimization & Core Web Vitals improvements",
        "Schema markup for better search visibility",
        "Mobile responsiveness & secure HTTPS implementation",
      ],
    },
    {
      title: "Local SEO (Google My Business & Citations)",
      description:
        "Dominate local search results and attract nearby customers with expert local SEO in Dubai.",
      bgColor: "bg-orange-50",
      features: [
        "Google My Business optimization for Dubai-based businesses",
        "Local citations & NAP (Name, Address, Phone) consistency",
        "Customer review management & local backlink strategies",
      ],
    },
    {
      title: "Content Marketing & SEO Copywriting",
      description:
        "Engaging, value-driven content that boosts rankings and keeps your audience engaged.",
      bgColor: "bg-pink-50",
      features: [
        "Blog writing with Dubai SEO best practices",
        "SEO-optimized landing pages & service pages",
        "Content tailored for real estate SEO in Dubai, healthcare, e-commerce, and more",
      ],
    },
    {
      title: "Ethical Link Building",
      description:
        "We build high-quality, white-hat backlinks to enhance your website's authority.",
      bgColor: "bg-indigo-50",
      features: [
        "Guest posting & outreach campaigns",
        "Niche-specific backlinks for Dubai industries",
        "Brand mentions & PR-driven link acquisition",
      ],
    },
  ];

  return (
    <SectionContainer className="bg-white">
      {/* Content */}
      <div ref={ref}>
        <h2 className="mb-4 font-bold text-38px text-[#000000] font-hk-grotesk text-center">
          Our Comprehensive SEO Services In Dubai
        </h2>

        <p className="mb-8 text-[#000000] text-20px font-hk-grotesk font-medium text-center mx-auto">
          At Brandwise, we offer a full suite of Dubai SEO services designed to
          help businesses rank higher, attract quality traffic, and maximize
          ROI. Whether you're a restaurant in Dubai Marina or an e-commerce
          store in Downtown Dubai, our customized strategies deliver real
          results.
        </p>

        {/* Services Grid - 6 Cards in 2 Columns, 3 Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-lg p-6 sm:p-5 hover:shadow-lg transition-all duration-300`}
            >
              <h3 className="font-bold text-32px text-[#000000] leading-snug font-hk-grotesk mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-[#000000] text-18px font-hk-grotesk font-medium mb-3 sm:mb-4">
                {service.description}
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-1">
                      <Image
                        src="/images/icons/Vector.png"
                        alt="Feature icon"
                        width={14}
                        height={14}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <span className="text-[#000000] text-18px font-hk-grotesk font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

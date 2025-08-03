"use client";

import React from "react";
import Image from "next/image";

// Reusable Section Container
const SectionContainer = ({ children, className = "" }) => (
  <section className={`relative py-16 lg:py-20 ${className}`}>
    <div className="relative z-10">
      <div className="px-1 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-20">
        {children}
      </div>
    </div>
  </section>
);

export default function SEOPartnerSection() {
  const features = [
    {
      description:
        "Deep understanding of Dubai's business environment, search trends, and customer behavior. Specialized strategies for local businesses, e-commerce, and industries like real estate, hospitality, and healthcare.",
      descriptionBgImage: "/images/seo-partner/partner-one.png",
      title: "Local Expertise in Dubai's Market",
      iconImage: "/images/seo-partner/icon-globe.png",
      titleBgImage: "/images/seo-partner/partner-heading-one.png",
    },
    {
      description:
        "100+ successful SEO campaigns across various industries. Client success stories with significant traffic growth and higher conversion rates.",
      descriptionBgImage: "/images/seo-partner/partner-two.png",
      title: "Proven Results with Data-Driven SEO",
      iconImage: "/images/seo-partner/icon-trending.png",
      titleBgImage: "/images/seo-partner/partner-heading-two.png",
    },
    {
      description:
        "Monthly performance reports with key insights and actionable recommendations. 24/7 access to real-time analytics dashboards for full transparency.",
      descriptionBgImage: "/images/seo-partner/partner-three.png",
      title: "Transparent & Insightful Reporting",
      iconImage: "/images/seo-partner/icon-search.png",
      titleBgImage: "/images/seo-partner/partner-heading-three.png",
    },
    {
      description:
        "Tailor-made SEO solutions—no one-size-fits-all approach. Strategies built around your business goals, target audience, and competition.",
      descriptionBgImage: "/images/seo-partner/partner-four.png",
      title: "Customized SEO Strategies",
      iconImage: "/images/seo-partner/icon-target.png",
      titleBgImage: "/images/seo-partner/partner-heading-four.png",
    },
    {
      description:
        "Certified SEO professionals with years of experience in Dubai SEO services. Continuous learning and adaptation to Google algorithm updates.",
      descriptionBgImage: "/images/seo-partner/partner-five.png",
      title: "Dedicated Team of SEO Experts",
      iconImage: "/images/seo-partner/icon-users.png",
      titleBgImage: "/images/seo-partner/partner-heading-five.png",
    },
    {
      description: "Partner with us and dominate search rankings in Dubai!",
      descriptionBgImage: "/images/seo-partner/partner-six.png",
    },
  ];

  return (
    <SectionContainer>
      <div className="p-4 sm:p-6 lg:p-10 text-center">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="mb-4 sm:mb-6 font-bold text-24px sm:text-32px lg:text-38px text-[#000000] font-hk-grotesk">
              Why Choose Us as Your SEO Partner in Dubai?
            </h2>
            <p className="text-[#000000] text-16px sm:text-22px lg:text-20px font-hk-grotesk font-medium max-w-4xl mx-auto px-4">
              At Brandstory, we don't just offer SEO services—we deliver real,
              measurable results that help businesses thrive in Dubai's
              competitive digital landscape. Here's why top brands trust us:
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 max-w-[1200px] mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col lg:flex-row items-center justify-center"
              >
                {index === 5 ? (
                  // Special case for the last item - just text and button with background
                  <div className="text-center col-span-full">
                    <div className="relative p-4 sm:p-6 lg:p-6 max-w-2xl mx-auto overflow-hidden">
                      <div className="relative w-full sm:w-[380px] lg:w-[410px] h-[180px] sm:h-[200px] overflow-hidden">
                        <Image
                          src={feature.descriptionBgImage}
                          alt="Background"
                          width={450}
                          height={450}
                          className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                        <div className="relative z-10 items-center justify-center">
                          <h3 className="font-bold text-20px text-[#000000] font-hk-grotesk mb-4 mt-14 sm:mb-4 leading-tight px-8 lg:px-12">
                            {feature.description}
                          </h3>
                          <button className="bg-[#845EF7] hover:bg-[#7048E8] text-white text-18px font-hk-grotesk font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                            Get a Free SEO Audit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : [0, 2, 4].includes(index) ? (
                  <>
                    {/* Title Card (Left on desktop, Top on mobile) */}
                    <div className="relative w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] mt-4 lg:mt-6 overflow-hidden z-20 mb-4 lg:mb-0">
                      <Image
                        src={feature.titleBgImage}
                        alt="Title Background"
                        width={200}
                        height={450}
                        className="object-cover"
                        priority={index < 2}
                        onError={(e) =>
                          console.error(
                            `Image load error for ${feature.titleBgImage}:`,
                            e
                          )
                        }
                      />
                      <div className="absolute inset-0 z-30 flex flex-col items-center justify-start mt-4 lg:mt-6 p-2 gap-2">
                        <Image
                          src={feature.iconImage}
                          alt={`${feature.title} icon`}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-8 sm:h-8 mb-2"
                        />
                        <h3 className="font-semibold text-22px text-[#000000] text-center font-hk-grotesk leading-tight max-w-[80%]">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    {/* Description Card (Right on desktop, Bottom on mobile) */}
                    <div className="relative w-full sm:w-[380px] lg:w-[410px] h-[180px] sm:h-[200px] lg:ml-[-105px] overflow-hidden z-10">
                      <Image
                        src={feature.descriptionBgImage}
                        alt="Description Background"
                        width={450}
                        height={450}
                        className="object-cover w-full h-full"
                        priority={index < 2}
                        onError={(e) =>
                          console.error(
                            `Image load error for ${feature.descriptionBgImage}:`,
                            e
                          )
                        }
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <p className="text-[#000000] text-16px font-hk-grotesk text-left font-normal px-4 sm:px-6 lg:px-8 lg:ml-20">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Description Card (Left on desktop, Top on mobile) */}
                    <div className="relative w-full sm:w-[380px] lg:w-[410px] h-[180px] sm:h-[200px] overflow-hidden z-10 mb-4 lg:mb-0 order-2 lg:order-1">
                      <Image
                        src={feature.descriptionBgImage}
                        alt="Description Background"
                        width={450}
                        height={450}
                        className="object-cover w-full h-full"
                        priority={index < 2}
                        onError={(e) =>
                          console.error(
                            `Image load error for ${feature.descriptionBgImage}:`,
                            e
                          )
                        }
                      />
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <p className="text-[#000000] text-16px font-hk-grotesk text-left font-normal px-4 sm:px-6 lg:px-8 lg:mr-20">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    {/* Title Card (Right on desktop, Bottom on mobile) */}
                    <div className="relative w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] lg:ml-[-120px] mt-4 lg:mt-6 overflow-hidden z-20 order-1 lg:order-2">
                      <Image
                        src={feature.titleBgImage}
                        alt="Title Background"
                        width={200}
                        height={450}
                        className="object-cover"
                        priority={index < 2}
                        onError={(e) =>
                          console.error(
                            `Image load error for ${feature.titleBgImage}:`,
                            e
                          )
                        }
                      />
                      <div className="absolute inset-0 z-30 flex flex-col items-center justify-start mt-4 lg:mt-6 p-2 gap-2">
                        <Image
                          src={feature.iconImage}
                          alt={`${feature.title} icon`}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-8 sm:h-8 mb-2"
                        />
                        <h3 className="font-semibold text-22px text-[#000000] text-center font-hk-grotesk leading-tight max-w-[80%]">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

"use client";

import React, { useState } from "react";

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

const DubaiServicesMap = () => {
  // Real Dubai locations with actual coordinates
  const locations = [
    {
      id: 1,
      name: "Downtown Dubai",
      x: 50,
      y: 70,
      color: "bg-gray-800",
    },
    {
      id: 2,
      name: "Dubai Marina",
      x: 15,
      y: 75,
      color: "bg-red-500",
    },
    {
      id: 3,
      name: "Al Quoz & Dubai Silicon Oasis",
      x: 70,
      y: 45,
      color: "bg-gray-800",
    },
    {
      id: 4,
      name: "Jumeirah Beach",
      x: 25,
      y: 40,
      color: "bg-gray-800",
    },
    {
      id: 5,
      name: "Business Bay",
      x: 50,
      y: 20,
      color: "bg-gray-800",
    },
  ];

  // Service area cards
  const serviceCards = [
    {
      id: 1,
      title: "Dubai Marina",
      description: "SEO for hospitality, real estate, and marine businesses",
      image: "/images/dubai-marina.png",
      type: "hospitality",
    },
    {
      id: 2,
      title: "Downtown Dubai",
      description: "Commercial SEO for high-end brands and shopping centers",
      image: "/images/downtown-dubai.png",
      type: "retail",
    },
    {
      id: 3,
      title: "Business Bay",
      description: "Corporate SEO solutions for financial and tech companies",
      image: "/images/dubai-marina.png",
      type: "corporate",
    },
    {
      id: 4,
      title: "Jumeirah Beach",
      description: "Tourism and leisure industry SEO optimization",
      image: "/images/downtown-dubai.png",
      type: "tourism",
    },
    {
      id: 5,
      title: "Dubai Mall Area",
      description: "E-commerce and outlet SEO for shopping destinations",
      image: "/images/dubai-marina.png",
      type: "outlet",
    },
    {
      id: 6,
      title: "DIFC",
      description: "Financial services and banking SEO strategies",
      image: "/images/downtown-dubai.png",
      type: "finance",
    },
    {
      id: 7,
      title: "Dubai Healthcare City",
      description: "Medical and healthcare industry SEO services",
      image: "/images/dubai-marina.png",
      type: "healthcare",
    },
    {
      id: 8,
      title: "Dubai Internet City",
      description: "Technology and software company SEO solutions",
      image: "/images/downtown-dubai.png",
      type: "technology",
    },
  ];

  return (
    <SectionContainer className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="mb-3 font-bold text-38px text-[#000000] font-hk-grotesk text-center leading-tight">
            Serving Businesses Across Dubai
          </h1>
          <p className="text-[#000000] text-20px text-center font-hk-grotesk font-medium">
            As a leading SEO company in Dubai, we understand the unique digital
            landscape of the city's diverse business hubs. Whether you're a
            luxury retailer in Downtown Dubai, a tech startup in Business Bay,
            or a restaurant in Dubai Marina, our Dubai-focused SEO strategies
            ensure you stand out in local search results.
          </p>
        </div>

        {/* Service Areas Title */}
        <div className="text-center mb-8">
          <h2 className="mb-2 font-bold text-32px text-[#000000] font-hk-grotesk text-center leading-tight">
            Our Key Service Areas in Dubai
          </h2>
        </div>

        {/* Real Dubai Map Section */}
        <div className="relative w-full mb-10">
          <div className="relative w-full h-96 lg:h-[500px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl">
            {/* Embed Google Maps or use a real Dubai map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231226.87577122022!2d55.74057861973753!3d25.10457150601729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5a235c277d2eb%3A0xe2a4b3530469a064!2sMilehah%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1754130623439!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>

            {/* Location Markers Overlay */}
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer hover:scale-105 transition-transform duration-200 z-10"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                }}
              >
                {/* Location Pin */}
                <div
                  className={`${location.color} text-white px-3 py-1 rounded text-sm font-medium shadow-lg whitespace-nowrap flex items-center gap-1 hover:shadow-xl transition-shadow duration-200`}
                >
                  {location.name}
                </div>

                {/* Pointer */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                    location.color.includes("red")
                      ? "border-t-red-500"
                      : "border-t-gray-800"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div className="w-full">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-2" style={{ width: "max-content" }}>
              {serviceCards.map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex h-28">
                    {/* Left Column - Image */}
                    <div className="w-40">
                      <div className="h-full relative overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="flex-1 p-4 flex flex-col justify-center">
                      <h3 className="text-16px font-hk-grotesk font-medium text-[#000000] mb-1">
                        {card.title}
                      </h3>
                      <p className="text-12px font-hk-grotesk font-normal text-[#000000] mb-3">
                        {card.description}
                      </p>
                      <p className="text-12px font-hk-grotesk font-bold text-[#000000]">
                        {card.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-[#000000] text-20px text-center font-hk-grotesk font-medium">
            We tailor our SEO strategies to the needs of Dubai's dynamic market,
            helping businesses achieve top search rankings and drive local
            traffic.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <p className="text-16px font-hk-grotesk font-medium text-[#000000] mb-3">
            Want to dominate local search results in Dubai?
          </p>
          <button className="bg-[#845EF7] hover:bg-[#7048E8] text-white text-18px font-hk-grotesk font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            Get a Free SEO Audit
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </SectionContainer>
  );
};

export default DubaiServicesMap;

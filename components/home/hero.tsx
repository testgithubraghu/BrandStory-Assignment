"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="container mx-auto relative z-10 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center px-1 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div ref={ref} className="order-2 lg:order-1 lg:col-span-7 mt-6">
            <h1 className="mb-6 font-bold text-52px text-[#F0EFEE] font-hk-grotesk leading-snug">
              Top-Rated SEO Company in Dubai | Drive Organic Growth
            </h1>

            <h2 className="mb-6 font-semibold text-[#FFFFFF] text-24px font-hk-grotesk">
              Boost Your Online Presence with Data-Driven SEO Strategies
            </h2>

            <p className="mb-6 text-[#FFFFFF] text-20px font-hk-grotesk font-medium max-w-3xl">
              We help businesses in Dubai dominate search rankings with
              cutting-edge, ROI-focused SEO solutions. Increase visibility,
              attract qualified leads, and grow your revenue with our expert
              team.
            </p>

            <div className="mb-5 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-red-500">📍</span>
                <span className="text-[#FFFFFF] text-20px font-hk-grotesk font-medium ">
                  Dubai-based experts | Proven results | Tailored strategies
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="">✅ </span>
                <span className="text-[#FFFFFF] text-20px font-hk-grotesk font-medium">
                  97% client retention rate | 🚀 50K+ keywords ranked
                </span>
              </div>
            </div>

            <div className="text-center lg:text-left mb-6">
              <Link
                href="/audit"
                className="inline-block px-5 py-3 sm:px-8 sm:py-3 text-18px font-bold rounded-lg bg-white text-black font-hk-grotesk transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get a Free SEO Audit
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full">
              <Image
                src="/images/skyscrapers-jumeirah-beach-dubai-uae.png.png"
                alt="skyscrapers jumeirah beach dubai uae"
                width={450}
                height={400}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

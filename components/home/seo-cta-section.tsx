"use client";

import Image from "next/image";

// Reusable Section Container
const SectionContainer = ({ children, className = "" }) => (
  <section className={`relative py-16 lg:py-20 ${className}`}>
    <div className="container mx-auto relative z-10">
      <div className="px-1 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-20">
        {children}
      </div>
    </div>
  </section>
);

export default function SEOCTASection() {
  return (
    <SectionContainer className="bg-gray-100">
      <div className=" mx-auto">
        {/* CTA Card */}
        <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-3xl p-8 lg:p-8 overflow-hidden">
          <div className="relative z-10 ">
            {/* Main Heading */}
            <h2 className="text-[#FFFFFF] mb-6 font-bold text-38px font-hk-grotesk text-left leading-tight">
              Ready to Grow Your Business with SEO in Dubai?
            </h2>

            {/* Subtext */}
            <p className="text-[#FFFFFF] text-20px font-hk-grotesk font-normal mb-6 opacity-95 max-w-2xl">
              Don't let your competitors outrank you. Take the first step
              towards higher rankings, more traffic, and increased revenue with
              our expert SEO services.
            </p>

            {/* CTA Title */}
            <h3 className="text-[#FFFFFF] text-24px font-hk-grotesk font-bold mb-2">
              Get a Free SEO Audit Today!
            </h3>

            {/* Benefits List */}
            <ul className="text-[#FFFFFF] space-y-2 mb-8">
              <li className="flex items-center text-18px font-hk-grotesk font-medium">
                <Image
                  src="/images/icons/vector-white.png"
                  alt="List bullet"
                  width={8}
                  height={8}
                  className="w-3 h-3 mr-3 flex-shrink-0"
                />
                Personalized strategy for your business goals
              </li>
              <li className="flex items-center text-18px font-hk-grotesk font-medium">
                <Image
                  src="/images/icons/vector-white.png"
                  alt="List bullet"
                  width={8}
                  height={8}
                  className="w-3 h-3 mr-3 flex-shrink-0"
                />
                Competitor analysis & keyword opportunities
              </li>
              <li className="flex items-center text-18px font-hk-grotesk font-medium">
                <Image
                  src="/images/icons/vector-white.png"
                  alt="List bullet"
                  width={8}
                  height={8}
                  className="w-3 h-3 mr-3 flex-shrink-0"
                />
                No-obligation consultation with our SEO experts
              </li>
            </ul>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-8 mb-4">
              {/* Phone */}
              <div className="flex flex-col gap-2 border-2 rounded-lg px-6 py-3 text-[#FFFFFF]">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 ">
                    <Image
                      src="/images/icons/phone.png"
                      alt="Phone"
                      width={10}
                      height={10}
                      className="w-3 h-3"
                    />
                  </div>
                  <div className="text-18px font-hk-grotesk font-bold">
                    +971 50 589 5956
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1">
                    <Image
                      src="/images/icons/email.png"
                      alt="Email"
                      width={10}
                      height={10}
                      className="w-3 h-3"
                    />
                  </div>
                  <div className="text-18px font-hk-grotesk font-bold">
                    hello@brandstory.ae
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start border-2 rounded-lg px-4 py-3 text-[#FFFFFF]">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <Image
                    src="/images/icons/location.png"
                    alt="Location"
                    width={10}
                    height={10}
                    className="w-2 h-3"
                  />
                </div>
                <div>
                  <div className="text-16px font-hk-grotesk font-bold">
                    Office #1 Manager Plaza, near UMC Building,
                  </div>
                  <div className="text-16px font-hk-grotesk font-bold">
                    Al Khaleyei Area, Deira Dubai - #0277,
                  </div>
                  <div className="text-16px font-hk-grotesk font-bold">
                    United Arab Emirates
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-[#845EF7] hover:bg-[#7048E8] mb-4 text-white text-18px font-hk-grotesk font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Request a Free SEO Audit
              </button>

              {/* Limited Time Offer */}
              <div>
                <p className="text-[#FFFFFF] text-24px font-hk-grotesk font-bold">
                  Limited-Time Offer: Get a FREE SEO strategy session when you
                  sign up this month!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

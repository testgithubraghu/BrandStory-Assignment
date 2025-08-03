"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function TestimonialSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      image: "/images/e-commerce.png",
      title: "E-Commerce SEO in Downtown Dubai",
      client: "Client: Leading Fashion Retailer in Dubai",
      results: [
        "100% increase in organic traffic within 6 months",
        "50% boost in online sales through targeted SEO campaigns",
        "#1 ranking for high-competition keywords like 'luxury fashion in Dubai'",
      ],
      quote:
        "Brandstory transformed our online visibility. Our sales skyrocketed thanks to their expert SEO strategies!",
      author: "Mighty Warner",
    },
    {
      id: 2,
      image: "/images/e-commerce.png",
      title: "Local Business SEO Success",
      client: "Client: Premium Restaurant Chain",
      results: [
        "200% increase in local search visibility",
        "75% growth in foot traffic from online searches",
        "Top 3 rankings for 'best restaurants in Dubai'",
      ],
      quote:
        "Our restaurant bookings doubled after working with Brandstory. Their local SEO expertise is unmatched!",
      author: "Sarah Johnson",
    },
    {
      id: 3,
      image: "/images/e-commerce.png",
      title: "Healthcare SEO Transformation",
      client: "Client: Medical Center Dubai",
      results: [
        "150% increase in appointment bookings",
        "300% growth in organic website traffic",
        "#1 position for medical services keywords",
      ],
      quote:
        "Brandstory's SEO strategies brought us more patients than ever before. Exceptional results and service!",
      author: "Dr. Ahmed Hassan",
    },
    {
      id: 4,
      image: "/images/e-commerce.png",
      title: "Real Estate SEO Success",
      client: "Client: Luxury Property Developer",
      results: [
        "250% increase in property inquiries",
        "80% boost in qualified leads",
        "Top rankings for luxury real estate terms",
      ],
      quote:
        "Our property sales increased dramatically thanks to Brandstory's targeted SEO approach!",
      author: "Michael Rodriguez",
    },
  ];

  const handleSlideChange = (index) => {
    if (index === activeSlide || isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveSlide(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const nextSlide = () => {
    const next = activeSlide === testimonials.length - 1 ? 0 : activeSlide + 1;
    handleSlideChange(next);
  };

  const prevSlide = () => {
    const prev = activeSlide === 0 ? testimonials.length - 1 : activeSlide - 1;
    handleSlideChange(prev);
  };

  return (
    <SectionContainer className="bg-[#F5F5F5]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="mb-2 font-bold text-38px text-[#000000] font-hk-grotesk text-center leading-tight">
          What Our Clients Say
        </h2>
        <p className="mb-8 text-[#000000] text-16px font-hk-grotesk font-medium text-center mx-auto px-2">
          Real businesses. Real results. See how our Dubai SEO strategies have
          helped brands grow.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Navigation Buttons - Desktop */}
        <div className="hidden lg:block">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAnimating}
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
          </button>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isAnimating
                ? "opacity-0 transform translate-x-8"
                : "opacity-100 transform translate-x-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side - Image */}
              <div className="lg:col-span-2 relative overflow-hidden h-64 p-8 rounded-xl lg:h-auto">
                <div className="w-full h-full flex items-center justify-center rounded-lg">
                  <img
                    src={testimonials[activeSlide].image}
                    alt={testimonials[activeSlide].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:col-span-3 p-7 lg:p-2 pt-2 lg:pt-8">
                {/* Title */}
                <h3 className="text-20px font-hk-grotesk font-bold text-[#000000] mb-1 lg:mt-4">
                  {testimonials[activeSlide].title}
                </h3>

                {/* Client */}
                <p className="text-16px font-hk-grotesk font-medium text-[#000000] mb-4">
                  {testimonials[activeSlide].client}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-20px font-hk-grotesk font-bold text-[#000000] mb-2">
                    Results:
                  </h4>
                  <ul className="space-y-2">
                    {testimonials[activeSlide].results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#000000] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-16px font-hk-grotesk font-medium text-[#000000]">
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg mb-2">
                  <p className="text-16px font-hk-grotesk font-medium text-[#000000] mb-2">
                    "{testimonials[activeSlide].quote}"
                  </p>
                  <p className="text-16px font-hk-grotesk font-semibold text-[##141414]">
                    {testimonials[activeSlide].author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "bg-gray-300 w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-8">
        <p className="text-16px font-hk-grotesk font-medium text-[#000000] mb-3">
          Want to see similar results for your business?
        </p>
        <button className="bg-[#845EF7] hover:bg-[#7048E8] text-white text-18px font-hk-grotesk font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
          Get a Free SEO Audit
        </button>
      </div>
    </SectionContainer>
  );
}

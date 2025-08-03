"use client";

// Reusable Feature Card With Image Icon
import { motion } from "framer-motion";

const FeatureCardImage = ({ iconSrc, title, description, index }) => (
  <motion.div
    className="bg-[#F2F2F2] rounded-lg p-5 text-left transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg hover:scale-105 cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div
      className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105`}
    >
      <img
        src={iconSrc}
        alt={title}
        className="w-28 h-28 object-contain transition-transform duration-300 ease-in-out"
      />
    </div>
    <h4 className="font-bold text-24px text-[#000000] font-hk-grotesk mb-2 transition-colors duration-300 ease-in-out">
      {title}
    </h4>
    <p className="text-[#000000] text-18px font-medium font-hk-grotesk transition-colors duration-300 ease-in-out">
      {description}
    </p>
  </motion.div>
);

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

// Main SEO Importance Section
export default function SEOImportanceSection() {
  const features = [
    {
      iconSrc: "/images/icons/increasing-visibility.png",
      title: "Increased Visibility",
      description:
        "SEO helps businesses in Dubai to rank higher in search engine results, making them more visible to potential customers.",
    },
    {
      iconSrc: "/images/icons/targeted-traffic.png",
      title: "Targeted Traffic",
      description:
        "SEO helps businesses to attract targeted traffic to their websites, increasing the chances of conversions.",
    },
    {
      iconSrc: "/images/icons/brand-awareness.png",
      title: "Brand Awareness",
      description:
        "SEO helps businesses to build brand awareness and establish themselves as leaders in their industry.",
    },
    {
      iconSrc: "/images/icons/competitive-advantage.png",
      title: "Competitive Advantage",
      description:
        "SEO helps businesses to gain a competitive advantage over their rivals.",
    },
    {
      iconSrc: "/images/icons/cost-effective.png",
      title: "Cost-Effective",
      description:
        "SEO is a cost-effective marketing strategy that can generate a high ROI.",
    },
    {
      iconSrc: "/images/icons/increased-website-traffic.png",
      title: "Increased Website Traffic",
      description:
        "SEO can help to increase website traffic from organic search results.",
    },
    {
      iconSrc: "/images/icons/improved-conversion-rates.png",
      title: "Improved Conversion Rates",
      description:
        "SEO can help to improve conversion rates by attracting targeted traffic to your website.",
    },
    {
      iconSrc: "/images/icons/higher-roi.png",
      title: "Higher ROI",
      description:
        "SEO is a cost-effective marketing strategy that can generate a high ROI.",
    },
    {
      iconSrc: "/images/icons/brand-authority.png",
      title: "Brand Authority",
      description:
        "SEO can help to build brand authority and establish your business as a leader in your business.",
    },
    {
      iconSrc: "/images/icons/long-term-results.png",
      title: "Long-Term Results",
      description:
        "SEO is a long-term strategy that can provide sustainable results for your business.",
    },
  ];

  return (
    <SectionContainer>
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-6 font-bold text-38px text-[#000000] font-hk-grotesk text-center leading-tight">
          Dominate Dubai's Competitive Market With Expert SEO Solutions
        </h2>

        <div className="mx-auto space-y-6">
          <p className="text-[#000000] text-20px text-left font-hk-grotesk font-medium">
            In Dubai's fast-paced digital landscape, standing out among
            competitors is a challenge. Businesses struggle with high
            competition, shifting search algorithms, and the need for a strong
            online presence to attract local and international customers.
          </p>

          <p className="text-[#000000] text-20px font-hk-grotesk text-left font-medium">
            As a leading SEO company in Dubai, we specialize in tailored Dubai
            SEO services that drive measurable growth. With years of experience
            optimizing businesses in diverse industries, we understand the
            unique challenges of the Dubai market.
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div>
        <motion.h3
          className="text-center mb-6 font-bold text-24px text-[#000000] font-hk-grotesk"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Importance Of SEO In Dubai
        </motion.h3>

        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCardImage key={index} index={index} {...feature} />
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCardImage key={index + 3} index={index + 3} {...feature} />
          ))}
        </div>

        <motion.h3
          className="text-center mb-6 mt-6 font-bold text-24px text-[#000000] font-hk-grotesk"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Benefits of SEO
        </motion.h3>

        {/* Third Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {features.slice(5, 8).map((feature, index) => (
            <FeatureCardImage key={index + 5} index={index + 5} {...feature} />
          ))}
        </div>

        {/* Fourth Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {features.slice(8, 10).map((feature, index) => (
            <FeatureCardImage key={index + 8} index={index + 8} {...feature} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export { FeatureCardImage, SectionContainer };

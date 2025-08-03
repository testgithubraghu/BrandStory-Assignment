"use client";

import Image from "next/image";

export default function SocialMediaSection() {
  const socialIcons = [
    {
      id: 1,
      src: "/images/x-icon.png",
      alt: "X (Twitter)",
      href: "#",
    },
    {
      id: 2,
      src: "/images/linkedin-icon.png", 
      alt: "LinkedIn",
      href: "#",
    },
    {
      id: 3,
      src: "/images/instagram-icon.png",
      alt: "Instagram",
      href: "#",
    },
    {
      id: 4,
      src: "/images/facebook-icon.png", 
      alt: "Facebook",
      href: "#",
    },
  ];

  return (
    <section className="bg-[#302357] py-12">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 font-bold text-38px text-[#FFFFFF] font-hk-grotesk text-center leading-snug">
          Our Experience Extends Across All Social Media Channels,
          <br />
          Ensuring Your Complete Presence
        </h2>

        <div className="flex justify-center items-center space-x-[-10px]">
          {socialIcons.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              className="w-12 h-12 bg-white border border-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

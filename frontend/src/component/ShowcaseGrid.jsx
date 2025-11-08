import React from "react";
import managudiImg from './images/MGLogos.png';
import ourcommunityImg from './images/ourCommunity.png';
import lmsImg from './images/ourCommunity.png';
import directfarmImg from './images/DirectFarmslogos.png';

const SITES = [
  {
    title: "Managudi",
    url: "https://managudi.in/",
    image: managudiImg,
    description: "Mana Gudi is an online platform that helps devotees connect with temples."
  },
  {
    title: "Our Community",
    url: "https://ourcommunity.in/",
    image: ourcommunityImg,
    description: "Our Community is a platform that connects people and supports collective growth."
  },
  {
    title: "lms Board",
    url: "https://lms.xlligent-demos.com/",
    image: lmsImg,
    description: "Modern learning management system for educational institutions."
  },
  {
    title: "Direct Farm",
    url: "https://direct-farms.com/",
    image: directfarmImg,
    description: "Connecting consumers directly with local farmers."
  },
];

export default function ShowcaseGrid() {
  return (
    <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Ongoing Projects We Operate and Maintain
          </h2>
          <p className="text-indigo-200 text-lg">
            Hover over any card to see details.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SITES.map((site, i) => (
            <a
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              {/* Image container with white background */}
              <div className="relative h-64 w-full bg-white p-6">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title and author - always visible */}
              <div className="p-4 bg-white">
                <h3 className="text-gray-900 font-semibold text-lg mb-1">
                  {site.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {site.author}
                </p>
              </div>

              {/* Description - only visible on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-gray-900 text-xs font-bold leading-relaxed font-sans">
                  {site.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
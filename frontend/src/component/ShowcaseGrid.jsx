import React from "react";

const SITES = [
  {
    title: "Managudi",
    url: "https://managudi.in/",
    image: "/images/MGLogos.png",
    description: "A comprehensive platform for managing agricultural resources."
  },
  {
    title: "Our Community",
    url: "https://ourcommunity.in/",
    image: "/images/ourCommunity.png",
    description: "Building stronger communities through collaborative tools."
  },
  {
    title: "lms Board",
    url: "https://lms.xlligent-demos.com/",
    image: "/images/ourCommunity.png",
    description: "Modern learning management system for educational institutions."
  },
  {
    title: "Direct Farm",
    url: "https://direct-farms.com/",
    image: "/images/DirectFarmslogos.png",
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
              className="group relative block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {site.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {site.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
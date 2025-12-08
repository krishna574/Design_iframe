import { useState } from 'react';

export default function DirectFarmPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
  {
    id: 1,
    name: "Managudi",
    logo: "🛕",
    description: "Temple management and community services platform",
    color: "bg-white"
  },
  {
    id: 2,
    name: "Our Community",
    logo: "🏘️",
    description: "Community engagement and social networking platform",
    color: "bg-white"
  },
  {
    id: 3,
    name: "LMS Board",
    logo: "🌳",
    description: "Learning Management System for educational institutions",
    color: "bg-white"
  },
  {
    id: 4,
    name: "Direct Farm",
    logo: "🌻",
    description: "Farm-to-consumer direct marketplace platform",
    color: "bg-green-700"
  },
  {
    id: 5,
    name: "Plough",
    logo: "🚜",
    description: "Agricultural equipment marketplace for buying, selling, and renting farm machinery",
    color: "bg-amber-600"
  },
  {
    id: 6,
    name: "Harvest Hub",
    logo: "🌾",
    description: "Crop management and harvest tracking system with real-time market prices",
    color: "bg-yellow-600"
  },
  {
    id: 7,
    name: "Seed Bank",
    logo: "🌱",
    description: "Quality seed distribution network connecting farmers with certified seed suppliers",
    color: "bg-lime-600"
  },
  {
    id: 8,
    name: "Agri Weather",
    logo: "🌤️",
    description: "Hyperlocal weather forecasting and agricultural advisory services for farmers",
    color: "bg-sky-500"
  },
  {
    id: 9,
    name: "Soil Doctor",
    logo: "🔬",
    description: "Soil testing and health monitoring platform with personalized fertilizer recommendations",
    color: "bg-brown-600"
  },
  {
    id: 10,
    name: "Crop Guard",
    logo: "🛡️",
    description: "Pest and disease detection system using AI-powered image recognition",
    color: "bg-red-600"
  },
  {
    id: 11,
    name: "Water Wise",
    logo: "💧",
    description: "Smart irrigation management system optimizing water usage for sustainable farming",
    color: "bg-blue-500"
  },
  {
    id: 12,
    name: "Farm Finance",
    logo: "💰",
    description: "Agricultural loans and microfinance platform for small and medium farmers",
    color: "bg-emerald-600"
  },
  {
    id: 13,
    name: "Agri Market",
    logo: "🏪",
    description: "B2B marketplace connecting farmers directly with bulk buyers and exporters",
    color: "bg-orange-600"
  },
  {
    id: 14,
    name: "Livestock Care",
    logo: "🐄",
    description: "Cattle management and veterinary services platform for dairy and livestock farmers",
    color: "bg-pink-600"
  },
  {
    id: 15,
    name: "Agri Transport",
    logo: "🚛",
    description: "Logistics network for efficient farm produce transportation and cold storage",
    color: "bg-slate-700"
  },
  {
    id: 16,
    name: "Organic Cert",
    logo: "✅",
    description: "Organic certification tracking and compliance management for sustainable farms",
    color: "bg-teal-600"
  }
];

 return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ongoing Projects We Operate and Maintain
          </h1>
          <p className="text-xl text-purple-200">
            Hover over any card to see details.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => {
            // Check if the card has a colored background (not white)
            const hasColoredBg = project.color !== 'bg-white';
            
            return (
              <div
                key={project.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`${project.color} rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-80`}>
                  {/* Card Content */}
                  <div className="p-8 h-full flex flex-col items-center justify-center relative">
                    {/* Logo and Name - Always Visible */}
                    <div className={`transition-all duration-300 ${hoveredCard === project.id ? 'transform -translate-y-4' : ''}`}>
                      {/* Logo */}
                      <div className={`text-8xl mb-4 transition-transform duration-300 ${hoveredCard === project.id ? 'scale-90' : ''}`}>
                        {project.logo}
                      </div>
                      
                      {/* Project Name */}
                      <h3 className={`text-2xl font-bold text-center ${hasColoredBg ? 'text-white' : 'text-gray-800'}`}>
                        {project.name}
                      </h3>
                    </div>

                    {/* Description - Show on Hover */}
                    <div className={`absolute bottom-8 left-0 right-0 px-8 transition-all duration-300 ${
                      hoveredCard === project.id 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                      <p className={`text-center text-sm ${hasColoredBg ? 'text-white' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <p className="text-white text-lg mb-6">
            Click on any project to explore our comprehensive solutions
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
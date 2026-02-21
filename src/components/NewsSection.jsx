import React from "react";

const newsArticles = [
  {
    id: 1,
    date: "Oct 24, 2025",
    category: "Interior Trends",
    title: "The Rise of Sustainable Luxury Furniture",
    description:
      "Explore how eco-friendly materials and timeless craftsmanship are shaping modern living spaces in 2026.",
    image:
      "https://images.pexels.com/photos/4916192/pexels-photo-4916192.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    date: "Nov 12, 2025",
    category: "Design Guide",
    title: "How to Choose the Perfect Sofa for Your Home",
    description:
      "From comfort to aesthetics, learn how to select a sofa that balances style, durability, and functionality.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    date: "Dec 05, 2025",
    category: "Styling Tips",
    title: "Minimalist Living: Furniture That Defines Elegance",
    description:
      "Discover how clean lines, neutral palettes, and smart furniture choices create a refined modern interior.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop",
  },
];

const NewsSection = () => {
  return (
    <section className="py-24 bg-[#5C4B3C] text-[#F5F1E6]" id="news">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#B8956B] text-[10px] tracking-[.4em] uppercase font-bold mb-4 block">
              Journal & Inspiration
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-[#F5F1E6]">
              Latest <span className="font-semibold italic text-[#B8956B]">Insights</span>
            </h2>
          </div>
          <a
            href="/news"
            className="group flex items-center gap-4 text-[10px] tracking-[.3em] uppercase text-[#EDE6D9]/60 hover:text-[#B8956B] transition-all"
          >
            View All Articles
            <span className="h-[1px] w-8 bg-[#B8956B] group-hover:w-16 transition-all duration-500"></span>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {newsArticles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              
              {/* Image */}
              <div className="relative overflow-hidden mb-8">
                <div className="absolute inset-0 border border-[#EDE6D9]/10 z-10 pointer-events-none group-hover:border-[#B8956B]/40 transition-colors duration-500"></div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 bg-[#3E2F2F]/80 p-4 pr-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-[#B8956B] text-[9px] tracking-[.2em] font-bold uppercase">
                    {article.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-[#EDE6D9]/60 text-[10px] tracking-widest uppercase">
                  {article.date}
                </p>
                <h3 className="text-2xl font-light leading-snug group-hover:text-[#B8956B] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[#EDE6D9]/50 text-sm leading-relaxed font-light line-clamp-2">
                  {article.description}
                </p>

                <div className="pt-4 overflow-hidden">
                  <button className="text-[10px] tracking-[.3em] uppercase font-bold text-[#F5F1E6] relative flex items-center gap-2 group/btn">
                    Read More
                    <span className="h-[1px] w-0 bg-[#B8956B] transition-all duration-500 group-hover/btn:w-12"></span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#2E2A28] text-[#FDF7EC] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Image Composition */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative z-10 overflow-hidden border border-[#FDF7EC]/10 w-full rounded-lg">
              <img 
                src="https://images.pexels.com/photos/3921833/pexels-photo-3921833.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Luxury Furniture Display" 
                className="w-full h-[500px] md:h-[600px] object-cover filter grayscale transition-all duration-1000 hover:grayscale-0 scale-100 hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Floating Gold Card - Stats */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:right-10 z-30 bg-[#C19B5A] p-6 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.5)]">
              <p className="text-[#2E2A28] text-4xl md:text-5xl font-bold mb-2 tracking-tighter">20+</p>
              <p className="text-[#2E2A28] text-[10px] tracking-[.3em] font-black uppercase whitespace-nowrap">
                Years of Craftsmanship
              </p>
            </div>

            {/* Decorative Background Frame */}
            <div className="absolute -top-6 -left-6 w-64 h-64 border border-[#C19B5A]/30 z-0 hidden md:block"></div>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="w-full lg:w-1/2 space-y-8 lg:pl-8">
            <div className="space-y-4">
              <span className="text-[#C19B5A] text-[10px] tracking-[.4em] uppercase font-bold block">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Crafting Furniture for <br />
                <span className="font-semibold italic text-[#FFDDAA]">Discerning Lifestyles</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-[#FDF7EC]/80 text-lg font-light leading-relaxed">
                At Dikota, furniture is more than utility; it is art. Every piece is 
                crafted with care, blending design, comfort, and durability to enhance your home.
              </p>
              <p className="text-[#FDF7EC]/50 text-sm leading-relaxed max-w-md italic border-l border-[#C19B5A]/50 pl-4">
                "We don't just make furniture; we craft experiences that elevate everyday living."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-[#FDF7EC]/10">
              <div className="group">
                <p className="text-2xl font-semibold mb-1 tracking-tight group-hover:text-[#C19B5A] transition-colors">500+</p>
                <p className="text-[#FDF7EC]/50 text-[9px] tracking-widest uppercase font-bold">Furniture Pieces</p>
              </div>
              <div className="group">
                <p className="text-2xl font-semibold mb-1 tracking-tight group-hover:text-[#C19B5A] transition-colors">12</p>
                <p className="text-[#FDF7EC]/50 text-[9px] tracking-widest uppercase font-bold">Showrooms Nationwide</p>
              </div>
            </div>

            {/* Signature CTA */}
            <button className="pt-4 group flex items-center gap-6 bg-transparent border-none">
              <div className="h-[1px] w-12 bg-[#C19B5A] group-hover:w-20 transition-all duration-500"></div>
              <span className="text-[11px] tracking-[.3em] uppercase font-bold text-[#FDF7EC] group-hover:text-[#C19B5A] transition-all">
                Explore Our Craft
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from "react";

const ShopDesignSection = () => {
  return (
    <section className="bg-[#5C4B3C] py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Section 1 – Shop Furniture */}
          <div id="shop-furniture" className="relative group cursor-pointer scroll-mt-32">
            <div className="overflow-hidden relative h-[500px] md:h-[600px] w-full">
              
              <div className="absolute inset-0 bg-[#3E2F2F]/40 group-hover:bg-[#3E2F2F]/20 transition-all duration-700 z-10" />

              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Sofa"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
                <span className="text-[#B8956B] text-[10px] tracking-[.4em] uppercase font-bold mb-4 block">
                  The Collection
                </span>

                <h2 className="text-4xl md:text-5xl font-light text-[#F5F1E6] mb-6 leading-tight">
                  Discover Timeless <br />
                  <span className="font-semibold italic text-[#B8956B]">Furniture</span>
                </h2>

                <p className="text-[#F5F1E6]/70 text-sm max-w-sm mb-8 font-light leading-relaxed">
                  Explore handcrafted designs, modern elegance, and luxurious
                  comfort curated to redefine your living experience.
                </p>

                <button className="w-fit px-10 py-4 bg-[#B8956B] text-[#3E2F2F] text-[10px] tracking-[.3em] font-bold uppercase hover:bg-[#9E7A50] transition-colors duration-500">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Section 2 – Custom Design */}
          <div id="custom-design" className="relative group cursor-pointer lg:mt-24 scroll-mt-32">
            <div className="overflow-hidden relative h-[500px] md:h-[600px] w-full border border-[#D4AF6B]/20 group-hover:border-[#B8956B]/50 transition-colors duration-700">
              
              <div className="absolute inset-0 bg-[#3E2F2F]/80 group-hover:bg-[#3E2F2F]/60 transition-all duration-700 z-10" />

              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1974&auto=format&fit=crop"
                alt="Custom Interior"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s]"
              />

              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-8 md:p-12">
                <span className="text-[#B8956B] text-[10px] tracking-[.4em] uppercase font-bold mb-4 block">
                  Bespoke Design
                </span>

                <h2 className="text-4xl md:text-5xl font-light text-[#F5F1E6] mb-6 leading-tight">
                  Create Your <br />
                  <span className="font-semibold italic text-[#B8956B]">Signature Space</span>
                </h2>

                <p className="text-[#F5F1E6]/70 text-sm max-w-sm mb-8 font-light leading-relaxed">
                  Collaborate with our designers to craft custom furniture
                  tailored perfectly to your style, dimensions, and vision.
                </p>

                <button className="group/btn flex items-center gap-4 text-[10px] tracking-[.3em] uppercase text-[#F5F1E6] font-bold">
                  Start Designing
                  <span className="h-[1px] w-12 bg-[#B8956B] group-hover/btn:w-20 transition-all duration-500"></span>
                </button>
              </div>
            </div>

            {/* Background Word Accent */}
            <div className="absolute -bottom-12 -right-12 text-[120px] font-black text-[#F5F1E6]/10 pointer-events-none hidden lg:block select-none uppercase tracking-tighter">
              Style
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShopDesignSection;
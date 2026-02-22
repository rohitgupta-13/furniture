import React from "react";

const products = [
  {
    id: 1,
    title: "Luxury Velvet Sofa",
    category: "Living Room",
    price: "₹58,000",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Lounge Chair",
    category: "Seating",
    price: "₹22,500",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Wooden Dining Table",
    category: "Dining",
    price: "₹41,000",
    image:
      "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg",
  },
  {
    id: 4,
    title: "Designer Bed Frame",
    category: "Bedroom",
    price: "₹67,000",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Minimalist Work Desk",
    category: "Office",
    price: "₹29,900",
    image:
      "https://sc04.alicdn.com/kf/Hcae6c2f37a6546f8a625d8c98d0e5b95H.jpg",
  },
  {
    id: 6,
    title: "Accent Coffee Table",
    category: "Living Room",
    price: "₹18,700",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2058&auto=format&fit=crop",
  },
];

export default function CollectionsSection() {
  return (
    <section className="py-24 bg-[#5C4B3C]" id="collections">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <span className="text-[#B8956B] text-[10px] tracking-[.4em] uppercase font-bold mb-4 block">
            Our Collection
          </span>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#F5F1E6] mb-6">
            Featured <span className="font-semibold italic text-[#B8956B]">Furniture</span>
          </h2>

          <div className="w-20 h-[1px] bg-[#D4AF6B]"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-transparent overflow-hidden transition-all duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden border border-[#D4AF6B]/20 hover:cursor-pointer rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x600?text=Image+Not+Available";
                  }}
                />

                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#3E2F2F]/80 backdrop-blur-md text-[#B8956B] text-[9px] font-bold px-3 py-1 tracking-widest border border-[#D4AF6B]/20 uppercase">
                    Bestseller
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="py-6 px-1">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl font-light text-[#F5F1E6] tracking-tight group-hover:text-[#B8956B] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold text-[#F5F1E6]">
                    {item.price}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-8 text-[#F5F1E6]/50 text-[10px] uppercase tracking-[.2em]">
                  <span className="text-[#B8956B]">🪑</span>
                  {item.category}
                </div>

                <button className="relative w-full py-4 group/btn overflow-hidden border border-[#D4AF6B] text-[#F5F1E6] text-[10px] uppercase tracking-[.3em] font-bold transition-all duration-500 hover: cursor-pointer">
                  <span className="relative z-10 group-hover/btn:text-[#3E2F2F] transition-colors duration-500">
                    View Product
                  </span>
                  <div className="absolute inset-0 bg-[#B8956B] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

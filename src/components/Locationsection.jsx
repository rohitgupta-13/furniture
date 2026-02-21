import React from "react";

const showrooms = [
  {
    id: 1,
    name: "Delhi Showroom",
    address: "Connaught Place, Hauz Khas, Vasant Kunj",
    collections: "150+ Furniture Pieces",
    image:
      "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg?auto=compress&cs=tinysrgb&w=1200", // warm living room
    featured: [
      "https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1866146/pexels-photo-1866146.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1866147/pexels-photo-1866147.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 2,
    name: "Mumbai Showroom",
    address: "Bandra, Worli, Juhu",
    collections: "120+ Furniture Pieces",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80", // modern showroom
    featured: [
      "https://images.pexels.com/photos/279744/pexels-photo-279744.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/281612/pexels-photo-281612.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 3,
    name: "Bangalore Showroom",
    address: "Indiranagar, Whitefield, Koramangala",
    collections: "180+ Furniture Pieces",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200", // cozy warm interiors
    featured: [
      "https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1866147/pexels-photo-1866147.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1866148/pexels-photo-1866148.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 4,
    name: "Goa Showroom",
    address: "Baga, Calangute, Anjuna",
    collections: "90+ Furniture Pieces",
    image:
      "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=1200", // bright & airy furniture showroom
    featured: [
      "https://images.pexels.com/photos/279744/pexels-photo-279744.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/281612/pexels-photo-281612.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
];

const ShowroomSection = () => {
  return (
    <section className="py-24 bg-[#5C4B3C] text-[#F5F1E6]" id="showrooms">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#B8956B] text-[10px] tracking-[.5em] uppercase font-bold mb-4 block">
            Our Showrooms
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-6">
            Explore <span className="font-semibold italic text-[#B8956B]">Furniture Destinations</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#EDE6D9]/20 mx-auto"></div>
        </div>

        {/* Showroom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showrooms.map((loc) => (
            <div key={loc.id} className="group relative h-[500px] overflow-hidden cursor-pointer border border-[#EDE6D9]/10 rounded-lg">
              
              {/* Main Image */}
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C4B3C]/90 via-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Info */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                <p className="text-[#B8956B] text-[10px] tracking-[.3em] font-bold uppercase mb-1">
                  {loc.collections}
                </p>
                <h3 className="text-2xl md:text-3xl font-light group-hover:text-[#B8956B] transition-colors">
                  {loc.name}
                </h3>
                <p className="text-[#EDE6D9]/50 text-[11px] mt-1">{loc.address}</p>

                {/* Featured furniture */}
                <div className="flex gap-2 mt-4 max-h-0 group-hover:max-h-28 overflow-hidden transition-all duration-700">
                  {loc.featured.map((img, i) => (
                    <img key={i} src={img} alt="Featured furniture" className="w-1/3 h-20 object-cover rounded-md border border-[#EDE6D9]/10" />
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-[#B8956B]/20 group-hover:border-r-[#B8956B] transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-[#EDE6D9]/10 pt-10 gap-6">
          <p className="text-[#EDE6D9]/60 text-sm font-light italic">
            Visit our showrooms to experience furniture crafted for style, comfort, and luxury.
          </p>
          <button className="px-12 py-4 border border-[#EDE6D9]/20 text-[10px] tracking-[.3em] uppercase font-bold hover:bg-[#B8956B] hover:text-[#5C4B3C] transition-all duration-500 cursor-pointer">
            View Map
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goldText = "hover:text-[#D4AF37] transition-all duration-300 ease-in-out";
  const navItemStyles =
    "tracking-[0.25em] font-light text-[11px] uppercase text-[#F5F1E6]";

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-16 
      ${scrolled ? "py-4 bg-[#3E2F2F]/90 backdrop-blur-md shadow-lg" : "py-7 bg-[#3E2F2F]"}`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="relative group">
            <span className="text-2xl md:text-3xl font-light tracking-[0.3em] text-[#F5F1E6] uppercase transition-all duration-500 group-hover:text-[#D4AF37]">
              Dikota
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex items-center gap-12 ${navItemStyles}`}>
          <li><a href="#" className={goldText}>Home</a></li>
          <li className="relative group cursor-pointer py-2">
            <a href="#collections" className={`flex items-center gap-2 ${goldText}`}>
              Collections <span className="text-[8px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
            </a>
            <div className="absolute top-[100%] -left-6 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <ul className="bg-[#3E2F2F] border border-[#D4AF37]/20 shadow-2xl w-60 backdrop-blur-xl">
                <li><a href="#collections" className="block px-8 py-4 text-[10px] tracking-widest hover:bg-[#D4AF37] hover:text-[#3E2F2F] transition-colors duration-300 border-b border-white/5">Living Room</a></li>
                <li><a href="#collections" className="block px-8 py-4 text-[10px] tracking-widest hover:bg-[#D4AF37] hover:text-[#3E2F2F] transition-colors duration-300 border-b border-white/5">Bedroom</a></li>
                <li><a href="#collections" className="block px-8 py-4 text-[10px] tracking-widest hover:bg-[#D4AF37] hover:text-[#3E2F2F] transition-colors duration-300">Office</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#new" className={goldText}>New Arrivals</a></li>
          <li><a href="#showrooms" className={goldText}>Showroom</a></li>
          <li><a href="#about" className={goldText}>About</a></li>
          <li>
            <a href="#contact" className="ml-4 px-8 py-3 bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] relative overflow-hidden group">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#3E2F2F] font-semibold">
                Contact
              </span>
              <span className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Burger */}
        <button className="lg:hidden flex flex-col gap-1.5 z-[110]" onClick={() => setOpen(!open)}>
          <span className={`h-[1px] w-8 bg-[#D4AF37] transition-all ${open ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`h-[1px] w-8 bg-[#D4AF37] transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-[1px] w-8 bg-[#D4AF37] transition-all ${open ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-[#3E2F2F] transition-transform duration-700 ease-in-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full justify-center items-center gap-8">
          <ul className={`flex flex-col items-center gap-8 ${navItemStyles}`}>
            <li><a href="#" onClick={handleLinkClick} className="text-2xl">Home</a></li>
            <li><a href="#collections" onClick={handleLinkClick} className="text-2xl">Collections</a></li>
            <li><a href="#new" onClick={handleLinkClick} className="text-2xl">New Arrivals</a></li>
            <li><a href="#showrooms" onClick={handleLinkClick} className="text-2xl">Showroom</a></li>
            <li><a href="#about" onClick={handleLinkClick} className="text-2xl">About</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className="mt-4 px-12 py-4 border border-[#D4AF37] text-[#D4AF37]">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
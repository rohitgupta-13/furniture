import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#242120] text-[#FDF7EC] py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Branding / About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#C19B5A]">Dikota Furniture</h2>
            <p className="text-[#FDF7EC]/70 text-sm leading-relaxed">
              Crafting furniture that elevates your living spaces with style, comfort, and timeless design.
            </p>
            <p className="text-[#FDF7EC]/50 text-[10px] tracking-[.2em] uppercase">
              &copy; {new Date().getFullYear()} Dikota Furniture. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#C19B5A] text-sm uppercase tracking-[.3em] font-bold">Quick Links</h3>
            <ul className="space-y-2 text-[#FDF7EC]/70 text-sm">
              <li><a href="#about" className="hover:text-[#C19B5A] transition-colors">About Us</a></li>
              <li><a href="#locations" className="hover:text-[#C19B5A] transition-colors">Showrooms</a></li>
              <li><a href="#properties" className="hover:text-[#C19B5A] transition-colors">Collections</a></li>
              <li><a href="#contact" className="hover:text-[#C19B5A] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-[#C19B5A] text-sm uppercase tracking-[.3em] font-bold">Follow Us</h3>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="text-[#FDF7EC]/70 hover:text-[#C19B5A] transition-colors">Instagram</a>
              <a href="#" className="text-[#FDF7EC]/70 hover:text-[#C19B5A] transition-colors">Pinterest</a>
              <a href="#" className="text-[#FDF7EC]/70 hover:text-[#C19B5A] transition-colors">Facebook</a>
              <a href="#" className="text-[#FDF7EC]/70 hover:text-[#C19B5A] transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-[#C19B5A] text-sm uppercase tracking-[.3em] font-bold">Newsletter</h3>
            <p className="text-[#FDF7EC]/70 text-sm">
              Subscribe for updates on our latest furniture collections and offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full sm:w-auto px-4 py-2 bg-[#3A322F] border border-[#FDF7EC]/10 text-[#FDF7EC] outline-none placeholder-[#FDF7EC]/50"
              />
              <button className="px-6 py-2 bg-[#C19B5A] text-[#2E2A28] uppercase font-bold text-sm hover:bg-[#FFDDAA] hover:text-[#2E2A28] transition-all cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-12 border-t border-[#FDF7EC]/10 pt-6 text-center text-[#FDF7EC]/50 text-xs">
          Designed & Developed by Dikota Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';

const Hero = () => {
  const [message, setMessage] = useState("");

  const handleExplore = () => {
    setMessage("Browsing our premium furniture collection... 🛋✨");
  };

  const handleContact = () => {
    setMessage("Connecting you with our design consultant... 💬");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src='furniture-video.mp4'
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#F5F1E6]">
          Design Your Perfect Space
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-6 text-[#F5F1E6]/90">
          Discover modern, elegant, and comfortable furniture crafted to elevate your lifestyle.
        </p>

        {/* Dynamic Message Box */}
        {message && (
          <div className="mb-6 p-4 bg-[#3E2F2F]/50 backdrop-blur-md border border-[#F5F1E6]/30 rounded-lg animate-pulse text-[#F5F1E6]">
            {message}
          </div>
        )}

        <div className="flex gap-4">
          <button 
            onClick={handleExplore}
            className="px-6 py-3 bg-[#B8956B] text-black font-semibold rounded-lg hover:scale-105 hover:bg-[#9E7A50] transition"
          >
            Explore Collection
          </button>

          <button 
            onClick={handleContact}
            className="px-6 py-3 border border-[#F5F1E6] text-[#F5F1E6] font-semibold rounded-lg hover:bg-[#3E2F2F] hover:text-[#F5F1E6] transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
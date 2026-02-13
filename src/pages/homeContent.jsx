import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Animated Background with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
        style={{
          backgroundImage: "url('/home.jpg')",
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)`,
        }}
      >
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-black/80 to-purple-900/90 animate-gradient" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated Badge */}
        <div className="mb-6 animate-bounce-slow">
          <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/30">
            🚀 Grand Opening Sale - Up to 40% Off
          </span>
        </div>

        {/* Main Title with Glitch Effect */}
        <h1 className="relative text-5xl md:text-7xl font-black mb-6 tracking-tight group">
          <span className="absolute inset-0 text-cyan-400 animate-glitch-1 opacity-70">
            Welcome to I-Computers
          </span>
          <span className="absolute inset-0 text-purple-400 animate-glitch-2 opacity-70">
            Welcome to I-Computers
          </span>
          <span className="relative bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Welcome to{" "}
            <span className="inline-block hover:scale-110 transition-transform duration-300">
              I-Computers
            </span>
          </span>
        </h1>

        {/* Animated Slogans */}
        <div className="space-y-4 mb-10">
          <p className="text-xl md:text-3xl font-light animate-text-shimmer bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent bg-[length:200%_auto]">
            Powering Your Digital World
          </p>
          <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Discover the latest in technology with our curated collection of
            high-performance computers and accessories
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { icon: "💻", label: "Gaming PCs" },
            { icon: "🖥️", label: "Workstations" },
            { icon: "🎮", label: "Accessories" },
            { icon: "⚡", label: "Custom Builds" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:bg-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-purple-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-3xl mb-2 block animate-float">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Buttons with Enhanced Effects */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            to="/products"
            className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transition-transform duration-700" />
          </Link>

          <Link
            to="/contact"
            className="group relative px-10 py-4 border-2 border-cyan-400 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <span className="relative z-10 text-cyan-400 group-hover:text-white transition-colors duration-300">
              Contact Us
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Internal Animation Styles */}
      <style>
        {`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          @keyframes glitch-1 {
            0%, 100% { transform: translate(0); }
            33% { transform: translate(-5px, 3px); }
            66% { transform: translate(5px, -3px); }
          }

          @keyframes glitch-2 {
            0%, 100% { transform: translate(0); }
            33% { transform: translate(5px, -3px); }
            66% { transform: translate(-5px, 3px); }
          }

          @keyframes text-shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }

          @keyframes scroll {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(15px); opacity: 0; }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes gradient-x {
            0%, 100% { background-size: 200% 200%; background-position: left center; }
            50% { background-size: 200% 200%; background-position: right center; }
          }

          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-glitch-1 {
            animation: glitch-1 2s infinite;
          }

          .animate-glitch-2 {
            animation: glitch-2 2s infinite;
          }

          .animate-text-shimmer {
            animation: text-shimmer 3s infinite;
          }

          .animate-scroll {
            animation: scroll 2s infinite;
          }

          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
            opacity: 0;
            animation-fill-mode: forwards;
          }

          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }

          .animate-bounce-slow {
            animation: bounce 3s infinite;
          }

          .group:hover .group-hover\\:scale-110 {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
}
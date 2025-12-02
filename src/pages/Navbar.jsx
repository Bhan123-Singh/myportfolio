import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "relative py-1 text-sm text-gray-300 hover:text-cyan-400 transition";

  const navLinks = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Skills", id: "#skills" },
    { name: "Projects", id: "#projects" },
    { name: "Achievements", id: "#achievements" },
    { name: "Timeline", id: "#timeline" },
    { name: "Testimonials", id: "#testimonials" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
                 bg-black/40 backdrop-blur-xl
                 border-b border-white/10"
    >
      {/* Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px]
                      bg-gradient-to-r from-transparent 
                      via-cyan-400/60 to-transparent" />

      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-full 
                       bg-cyan-500/20 backdrop-blur-md
                       border border-cyan-400/40
                       flex items-center justify-center font-bold
                       text-cyan-400 shadow-lg shadow-cyan-500/20"
          >
            BP
          </div>

          <div>
            <h1 className="text-lg font-semibold text-white">
              Bhan Singh Patel
            </h1>
            <p className="text-xs text-gray-400">
              MERN Stack Developer
            </p>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-7 font-medium">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.id}
              className={`${linkClass} group`}
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1
                           h-[2px] w-0 bg-cyan-400
                           transition-all duration-300
                           group-hover:w-full"
              />
            </a>
          ))}
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="md:hidden bg-black/60 backdrop-blur-xl
                     border-t border-white/10
                     px-6 py-4 space-y-4 animate-slideDown"
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.id}
              onClick={() => setOpen(false)}
              className="block text-gray-300 text-sm 
                         hover:text-cyan-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

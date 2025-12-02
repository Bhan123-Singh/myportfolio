import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black/60 backdrop-blur-xl 
                       border-t border-white/10 py-12 mt-20">

      {/* Glow Background */}
      <div className="absolute left-10 top-[-80px] w-64 h-64 
                      bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute right-10 top-[-80px] w-64 h-64 
                      bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* NAME */}
        <h3 className="text-3xl font-bold text-white mb-2">
          Bhan Singh Patel<span className="text-cyan-400">.</span>
        </h3>

        <p className="text-gray-400 text-sm mb-6">
          bhan.developer@gmail.com
        </p>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 mb-6"></div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-8 mb-6">

          <a
            href="https://www.linkedin.com/in/bhansin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="group p-3 rounded-full bg-white/5 
                       hover:bg-blue-500/20
                       transition-all hover:scale-110"
          >
            <Linkedin className="text-slate-300 group-hover:text-blue-400" size={24}/>
          </a>

          <a
            href="https://github.com/Bhan123-Singh"
            target="_blank"
            className="group p-3 rounded-full bg-white/5 
                       hover:bg-white/20
                       transition-all hover:scale-110"
          >
            <Github className="text-slate-300 group-hover:text-white" size={24}/>
          </a>

          <a
            href=""
            target="_blank"
            className="group p-3 rounded-full bg-white/5 
                       hover:bg-pink-500/20
                       transition-all hover:scale-110"
          >
            <Instagram className="text-slate-300 group-hover:text-pink-400" size={24}/>
          </a>

        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-sm">
          © 2025 Bhan Singh Patel — All rights reserved.
        </p>

      </div>
    </footer>
  );
}

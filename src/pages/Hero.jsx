import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <header
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-[#020014] text-white overflow-hidden"
>
  {/* 🔥 Radial Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#05001f] via-[#020014] to-black opacity-90"></div>

  {/* 🌟 Glow Shapes */}
  <div className="absolute -top-28 -left-10 w-[550px] h-[550px] bg-[#8243FF]/25 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#00D1FF]/20 blur-[150px] rounded-full"></div>

  {/* 🚀 Glass Hero Card */}
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center
               bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-[0_0_40px_#000]"
  >
    {/* 🔹 Text Section */}
    <div className="order-2 md:order-1">
      <h2 className="text-5xl font-bold leading-tight">
        <span className="block md:inline text-gray-200">Hi, I'm</span>{" "}
        <span className="text-blue-300 drop-shadow-sm block md:inline">
  Bhan Singh Patel
</span>
      </h2>

      <p className="mt-4 text-lg text-gray-300 leading-relaxed">
        MERN Stack Developer focused on building pixel-perfect,
        scalable and high-performance web applications.
      </p>

      {/* 🔘 Call to Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg text-black font-semibold
                     bg-gradient-to-r from-[#6EE7FF] to-[#C084FC]
                     hover:opacity-90 hover:scale-105 transition-all"
        >
          View Projects 
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-gray-500/50
                     text-gray-200 hover:bg-white/10 hover:border-white
                     hover:scale-105 transition-all"
        >
          Contact 🤝
        </a>

        <a
          href="/BHANRESUM.pdf"
          className="px-6 py-3 rounded-lg font-semibold
                     bg-[#f3c5ff] text-[#030048]
                     hover:bg-[#e7b6f3] hover:scale-105 transition-all"
        >
          Download Resume 📄
        </a>
      </div>

      {/* 🌍 Social Buttons */}
      <div className="mt-7 flex gap-4 text-sm">
        <a
          href="https://github.com/Bhan123-Singh"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     bg-black/40 backdrop-blur-xl border border-white/10 text-gray-300
                     hover:text-green-400 hover:border-green-400/40 hover:scale-110 transition-all"
        >
          <Github size={18} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/bhansin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     bg-black/40 backdrop-blur-xl border border-white/10 text-gray-300
                     hover:text-blue-400 hover:border-blue-400/40 hover:scale-110 transition-all"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
    </div>

    {/* 🖼 Profile Image */}
    <div className="flex justify-center order-1 md:order-2">
      <img
        src="./bhan2.jpg"
        alt="profile"
        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover
                   border-4 border-[#ffffff15] shadow-[0_0_40px_#000]
                   hover:scale-110 hover:shadow-[0_0_50px_#C084FC] transition-all"
      />
    </div>
  </motion.div>
</header>

  );
}

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('./test123.png')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl mb-10 font-bold text-white">
          Testimonials
        </h3>

        {/* TESTIMONIAL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -8 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
         className="
  max-w-3xl mx-auto 
  bg-black/80 
  backdrop-blur-lg
  p-8 md:p-10 
  rounded-xl
  border border-gray-700 
  shadow-xl 
  hover:shadow-blue-500/40
  transition-all
"

        >
          {/* STARS */}
          <div className="flex justify-center text-lg mb-2">⭐⭐⭐⭐⭐</div>

          {/* MAIN REVIEW */}
          <p className="italic text-gray-300 text-lg leading-relaxed">
            “Bhan Singh Patel is a consistent and hardworking MERN Stack Developer with a
            strong focus on real-world projects and continuous learning.” 
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-2 justify-center mt-5">
            <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
              React
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
              Node.js
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
              MongoDB
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
              UI/UX
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
              JavaScript
            </span>
          </div>

          {/* MENTOR INFO */}
          <div className="mt-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              Bhan
            </div>

            <h4 className="mt-2 font-semibold text-white">
              Mentor <span className="text-blue-400 ml-1">✔ Verified</span>
            </h4>

            <p className="text-sm text-gray-400">PW SKILLS</p>

            <p className="text-xs text-gray-500">
              Mentorship Period: 2023 – 2025
            </p>
          </div>

          {/* HIGHLIGHT */}
          <div className="border-l-4 border-blue-500 pl-4 italic mt-6 text-gray-300 text-left">
            “Strong MERN foundation with excellent learning speed.”
          </div>
        </motion.div>
      </div>
    </section>
  );
}

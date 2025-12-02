export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-20 max-w-5xl mx-auto px-4 text-white"
    >
      {/* 🔵 Glow blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* 🧊 Glass container */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">

        <h3 className="text-4xl font-bold mb-10 text-center text-cyan-400">
          Timeline
        </h3>

        <div className="relative border-l-2 border-cyan-400/40 ml-4 space-y-8">

          {[
            { year: "2023", text: "MCA Studies Started" },
            { year: "2024", text: "Started MERN Stack Learning & Projects" },
            { year: "2024", text: "PW SKILLS Online – MERN Stack Certificate Earned" },
            { year: "2025", text: "Learning Management System Deployed (Live)" },
            { year: "2025", text: "MCA Completed" },
            { year: "2025", text: "Actively looking for a MERN Stack Developer position to contribute my skills to a dynamic team" },
          ].map((item, index) => (
            <div key={index} className="relative pl-10">

              {/* 🔵 Timeline dot */}
              <div className="absolute w-4 h-4 bg-cyan-400 rounded-full left-[-9px] top-3 shadow-[0_0_15px] shadow-cyan-400"></div>

              {/* 🧩 Card */}
              <div
                className="bg-gray-800/60 backdrop-blur p-5 rounded-xl border border-gray-700 hover:scale-105 
                           hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
              >
                <h4 className="text-lg font-semibold text-cyan-300">
                  {item.year}
                </h4>
                <p className="text-gray-300 mt-1">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

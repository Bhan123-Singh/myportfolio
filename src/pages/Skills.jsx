export default function Skills() {
  const skills = [
    "HTML","CSS","JavaScript","React",
    "Node","Express","MongoDB","SQL",
    "Tailwind","Java","C Language", " Advanced Excel " ,"MS-OFFICE" ,"MS-POWER POINT"
  ];

  return (
    <section
      id="skills"
      className="relative py-20 max-w-5xl mx-auto text-center text-white px-6"
    >
      {/* 🔵 Glow Background Blobs */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

      {/* 🧊 Glass Container */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">

        <h3 className="text-4xl font-bold mb-10 text-cyan-400">
          My Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map(skill => (
            <div
              key={skill}
              className="
                bg-gray-800/70 backdrop-blur
                py-4 rounded-xl shadow
                hover:bg-cyan-500 hover:text-black
                hover:scale-105 transition-all
                cursor-pointer
              "
            >
              <p className="font-semibold text-lg">{skill}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

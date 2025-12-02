export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-20 max-w-7xl mx-auto text-center text-white px-6"
    >
      {/* 🔵 Glow Background Blobs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* 🧊 Glass Container */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">
        <h3 className="text-4xl font-bold mb-10 text-cyan-400">Achievements</h3>

        <div
          className="grid
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
          gap-6
        "
        >
          {/* CARD */}
          <div
            className="bg-gray-800/70 backdrop-blur p-6 rounded-xl shadow 
                          hover:scale-105 hover:bg-cyan-500/20 transition-all"
          >
            <h4 className="text-xl font-semibold mb-2">🎓 MCA</h4>
            <p>MCA Completed with 8.21 CGPA – 2025</p>
          </div>

          <div
            className="bg-gray-800/70 backdrop-blur p-6 rounded-xl shadow 
                hover:scale-105 hover:bg-cyan-500/20 transition-all"
          >
            <h4 className="text-xl font-semibold mb-2"> 📚 Project</h4>

            <p className="mb-3">Fullstack Learning Management System</p>

            <a
              href="https://lms-frontend-seven-phi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              🔗 View Live
            </a>
          </div>

          <div
            className="bg-gray-800/70 backdrop-blur p-6 rounded-xl shadow 
                          hover:scale-105 hover:bg-cyan-500/20 transition-all"
          >
            <h4 className="text-xl font-semibold mb-2">💊 College Project</h4>
            <p></p>Hospilat Management website
          </div>

         

          <div
            className="bg-gray-800/70 backdrop-blur p-6 rounded-xl shadow 
                          hover:scale-105 hover:bg-cyan-500/20 transition-all"
          >
            <h4 className="text-xl font-semibold mb-2">📜 Certificate</h4>
            <p>PW Skills — MERN Stack Certificate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

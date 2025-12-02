export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 max-w-5xl mx-auto text-center text-white px-6"
    >
      {/* 🔵 Glow background */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* 🧊 Glass container */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">

        <h3 className="text-4xl font-bold mb-10 text-cyan-400">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Project Card */}
          <div className="
            bg-gray-800/60 backdrop-blur
            p-6 rounded-xl shadow
            hover:scale-105 hover:bg-cyan-500/20
            transition-all
          ">
            <h4 className="text-xl text-color- font-semibold mb-2">
                Learning Management System
            </h4>
            <p className="text-gray-300 mb-3">
            A full-stack Learning Management System built using the MERN stack, allowing users to enroll, 
            purchase courses, watch video lectures, and track learning progress in real time
            <p> User authentication with secure JWT login &
               role-based access (Admin / Instructor / Student)</p>
            </p>

            <a
              className="text-cyan-400 hover:underline"
              target="_blank"
              href="https://lms-frontend-seven-phi.vercel.app/"
            >
              🔗 View Live
            </a>
          </div>

          {/* Project Card */}
          <div className="
            bg-gray-800/60 backdrop-blur
            p-6 rounded-xl shadow
            hover:scale-105 hover:bg-cyan-500/20
            transition-all
          ">
            <h4 className="text-xl font-semibold mb-2">
              Hospital Management Website
            </h4>
            <p className="text-gray-300 mb-3">
             College group project for  Hospital Management System built using the MERN stack to simplify patient records, 
            appointment scheduling, doctor management, billing, and hospital administration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

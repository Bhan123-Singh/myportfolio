export default function About() {
  return (
    <div id="about" className="relative py-20 px-6 md:px-16 bg-gray-950 text-gray-200">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full"></div>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Picture Section */}
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.4)] border border-gray-700">
          <img
            src="./bhan2.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-lg leading-8 mb-5 text-gray-300">
            I am a passionate <span className="text-yellow-400 font-semibold">MERN Stack Developer</span>,
            dedicated to crafting modern, user-friendly and highly responsive web interfaces.
            I love turning ideas into attractive and functional digital experiences.
          </p>

          {/* Education Section */}
          <div className="mt-6 bg-gray-900/40 border border-gray-700 p-5 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Education</h3>
            <p className="text-base leading-7 text-gray-300">
              <span className="font-semibold text-white">MCA — Master of Computer Applications</span> <br />
              Completed — <span className="text-cyan-300">2025</span> <br /><br />
              Completed MCA with a strong focus on <span className="font-medium text-white">
              Frontend Development, UI Design, and Building Modern Responsive Web Interfaces</span>.  
              Strengthening expertise in <span className="text-gray-100 font-medium">
              JavaScript, React, Data Structures, APIs, and Modern Web Technologies</span>.
            </p>
          </div>

          {/* 🔧 Tools & Technologies Section */}
          <div className="mt-7 bg-gray-900/40 border border-gray-700 p-5 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
              I Use Tools & Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                 "React", "Node.js", "Express",
                 , "Git", "GitHub", "Postman","Axios", "VsCode"
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg 
                             text-sm font-medium text-gray-200 hover:bg-white/20 
                             hover:border-white/30 transition cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

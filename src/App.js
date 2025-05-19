import React from "react";
import { FaLinkedin, FaGithub, FaDownload, FaPlay } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f16]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a0f16]/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-[#4ecca3] text-2xl font-bold">
              Zaki Zakaria
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-[#4ecca3] transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#4ecca3] transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#services"
              className="text-white hover:text-[#4ecca3] transition-colors"
            >
              SERVICES
            </a>
            <a
              href="#projects"
              className="text-white hover:text-[#4ecca3] transition-colors"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#4ecca3] transition-colors"
            >
              CONTACT
            </a>
          </div>
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-10 md:mt-0 opacity-0 animate-fade-in-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="inline-block animate-slide-up">HI, I'M ZAKI!</span>
              <br />
              <span className="text-2xl md:text-2xl text-[#4ecca3] inline-block animate-glow">
                SOFTWARE
              </span>{" "}
              <span className="text-2xl md:text-2xl text-[#4ecca3] inline-block animate-glow">
                DEVELOPER
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl opacity-0 animate-fade-in [animation-delay:300ms]">
              I'm a passionate Software Developer with a mission to create
              exceptional digital experiences. With expertise in full-stack
              development and over 4 years of experience, I specialize in
              building robust and scalable applications.
            </p>
            <div className="flex space-x-4 opacity-0 animate-fade-in-up [animation-delay:500ms]">
              <button className="bg-[#4ecca3] text-[#0a0f16] px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-[#3da88a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(78,204,163,0.5)]">
                <FaDownload className="animate-bounce" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-b from-[#4ecca3]/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
              <img
                src={`${process.env.PUBLIC_URL}/zaki_zakaria_3d.png`}
                alt="Profile"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_25px_rgba(78,204,163,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#0c1118]">
        <div className="container mx-auto">
          <h2 className="text-[#4ecca3] text-xl mb-4 text-center">MY SERVICE</h2>
          <h3 className="text-4xl font-bold text-white mb-12 text-center">
            Crafting stories through<br />
            design and innovation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Website Design */}
            <div className="p-8 bg-[#0a0f16] rounded-xl border border-[#4ecca3]/20 hover:border-[#4ecca3] transition-colors group">
              <div className="text-[#4ecca3] text-3xl mb-6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white text-xl font-bold mb-4 text-center">Website Design</h4>
              <p className="text-gray-400 text-center">
                Creating stunning, responsive websites that combine aesthetic appeal with optimal functionality. Specializing in modern UI/UX principles and mobile-first design approaches.
              </p>
            </div>

            {/* Web Based Applications */}
            <div className="p-8 bg-[#0a0f16] rounded-xl border border-[#4ecca3]/20 hover:border-[#4ecca3] transition-colors group">
              <div className="text-[#4ecca3] text-3xl mb-6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-white text-xl font-bold mb-4 text-center">Web Based Applications</h4>
              <p className="text-gray-400 text-center">
                Developing powerful, scalable web applications using cutting-edge technologies. From SPAs to complex enterprise solutions, delivering robust and efficient software solutions.
              </p>
            </div>

            {/* DevOps */}
            <div className="p-8 bg-[#0a0f16] rounded-xl border border-[#4ecca3]/20 hover:border-[#4ecca3] transition-colors group">
              <div className="text-[#4ecca3] text-3xl mb-6 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-white text-xl font-bold mb-4 text-center">DevOps</h4>
              <p className="text-gray-400 text-center">
                Streamlining development operations with automated pipelines, continuous integration/deployment, and cloud infrastructure management. Ensuring smooth, efficient, and reliable software delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-[#4ecca3] text-xl mb-4">EDUCATION & SKILL</h2>
          <h3 className="text-4xl font-bold text-white mb-12">
            Showcasing your talent
            <br />
            amplifying your impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
              {[
                {
                  period: "2021 - 2025",
                  title: "Software Developer",
                  description:
                    "Full-stack development with modern technologies",
                },
                {
                  period: "2019 - 2021",
                  title: "Frontend Developer",
                  description: "Specialized in React and Angular development",
                },
              ].map((exp) => (
                <div
                  key={exp.period}
                  className="border border-[#4ecca3]/20 p-6 rounded-xl"
                >
                  <div className="text-[#4ecca3] text-sm mb-2">
                    {exp.period}
                  </div>
                  <h4 className="text-white text-xl font-bold mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { skill: "JavaScript", level: 90 },
                { skill: "React", level: 85 },
                { skill: "Node.js", level: 80 },
                { skill: "Laravel", level: 75 },
              ].map((skill) => (
                <div key={skill.skill}>
                  <div className="flex justify-between text-white mb-2">
                    <span>{skill.skill}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#1a1f26] rounded-full">
                    <div
                      className="h-full bg-[#4ecca3] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0c1118]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/zaki-zakaria-2684211a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ecca3] hover:text-white transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/zakiiizakaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ecca3] hover:text-white transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
          <button className="bg-[#4ecca3] text-[#0a0f16] px-8 py-3 rounded-md hover:bg-[#3da88a] transition-colors">
            Contact Me
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f16] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Zaki Zakaria. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

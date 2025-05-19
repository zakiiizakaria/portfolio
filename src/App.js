import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFreebsd } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

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
              className="text-white hover:text-[#4ecca3] transition-colors relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecca3] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="text-white hover:text-[#4ecca3] transition-colors relative group"
            >
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecca3] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#experience"
              className="text-white hover:text-[#4ecca3] transition-colors relative group"
            >
              EXPERTISE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecca3] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#4ecca3] transition-colors relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4ecca3] transition-all duration-300 group-hover:w-full"></span>
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
              <a 
                href="https://wa.me/601123239762" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4ecca3] text-[#0a0f16] px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-[#3da88a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(78,204,163,0.5)]"
              >
                <FaWhatsapp className="animate-bounce text-xl" />
                <span>Contact Me</span>
              </a>
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
          <h2 className="text-[#4ecca3] text-xl mb-4 text-center">MY EXPERTISE</h2>
          <h3 className="text-4xl font-bold text-white mb-16 text-center">
            Professional Skillset
          </h3>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { skill: "Angular", level: 95, description: "Enterprise-grade web applications" },
              { skill: "React Next.js", level: 90, description: "Modern web development" },
              { skill: ".NET", level: 85, description: "Backend development" },
              { skill: "Laravel", level: 88, description: "PHP framework" },
              { skill: "Node.js", level: 92, description: "Server-side JavaScript" },
            ].map((skill, index) => (
              <div key={skill.skill} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex justify-between items-center text-white mb-2">
                  <div>
                    <span className="text-xl font-bold">{skill.skill}</span>
                    <span className="text-sm text-gray-400 ml-2">/ {skill.description}</span>
                  </div>
                  <span className="text-[#4ecca3]">{skill.level}%</span>
                </div>
                <div className="h-3 bg-[#1a1f26] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#4ecca3]/80 to-[#4ecca3] rounded-full transform origin-left animate-scale-x"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200 + 400}ms`
                    }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-8 animate-shimmer" 
                         style={{ 
                           background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                           animationDelay: `${index * 200 + 800}ms`
                         }}>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0c1118]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <a
              href="https://www.linkedin.com/in/zaki-zakaria-2684211a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ecca3] hover:text-white transition-colors group relative"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl transform transition-transform group-hover:scale-110" />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#0a0f16] text-[#4ecca3] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#4ecca3]/20 whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/zakiiizakaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ecca3] hover:text-white transition-colors group relative"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-3xl transform transition-transform group-hover:scale-110" />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#0a0f16] text-[#4ecca3] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#4ecca3]/20 whitespace-nowrap">
                GitHub
              </span>
            </a>
            <a
              href="https://www.fiverr.com/s/NNV6X5N"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ecca3] hover:text-white transition-colors group relative"
              aria-label="Fiverr Profile"
            >
              <SiFiverr className="text-3xl transform transition-transform group-hover:scale-110" />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#0a0f16] text-[#4ecca3] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#4ecca3]/20 whitespace-nowrap">
                Fiverr
              </span>
            </a>
            <a
              href="https://www.freelancer.com/u/ZakiZakaria97?sb=t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ecca3] hover:text-white transition-colors group relative"
              aria-label="Freelancer Profile"
            >
              <FaFreebsd className="text-3xl transform transition-transform group-hover:scale-110" />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#0a0f16] text-[#4ecca3] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#4ecca3]/20 whitespace-nowrap">
                Freelancer
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f16] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Mayaniaga. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

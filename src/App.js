import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Zaki Zakaria</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Software Developer</h2>
          <p className="text-xl opacity-90">4+ years of experience in building exceptional digital experiences</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Angular', 'React NextJS', 'Node JS', 'NestJS', '.NET', 'Laravel'].map((tech) => (
              <div key={tech} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <span className="text-gray-800 font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Experience</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li>Extensive experience in full-stack web development</li>
                <li>Proficient in modern JavaScript frameworks and libraries</li>
                <li>Strong background in backend development with various technologies</li>
                <li>Experience with RESTful APIs and microservices architecture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-6">
              Looking for a dedicated software developer? Let's connect!
            </p>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/zaki-zakaria-2684211a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="text-3xl" />
                  <span className="text-lg">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/zakiiizakaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FaGithub className="text-3xl" />
                  <span className="text-lg">GitHub</span>
                </a>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Zaki Zakaria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

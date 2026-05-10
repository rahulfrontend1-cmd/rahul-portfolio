'use client'

import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

import {
  Mail,
  Globe,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15),transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold mb-5">
              Rahul Kumar
            </h2>

            <p className="text-gray-400 leading-8">
              Senior Full Stack Developer specializing in
              React.js, Next.js, NestJS, GraphQL and
              scalable enterprise application architecture.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm text-gray-400">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>

              <a
                href="#experience"
                className="hover:text-white transition"
              >
                Experience
              </a>

              <a
                href="#skills"
                className="hover:text-white transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Connect
            </h3>

            <div className="flex flex-col gap-5">
              
              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Mail size={18} />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/devmantrarahulkumar/"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                {/* <FaLinkedin size={18} /> */}
                LinkedIn
              </a>

              <a
                href="https://github.com/rahulfrontend1-cmd"
                target="_blank"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                {/* <FaGithub size={18} /> */}
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
          
          <p>
            © 2026 Rahul Kumar. All rights reserved.
          </p>

          <p>
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
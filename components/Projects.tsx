'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'iTrip.pro',
    description:
      'Modern travel and trip management platform focused on scalable architecture, responsive UI, premium user experience and high-performance frontend engineering.',

    image: '/itrip.png',

    tech: [
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
    ],

    link: 'https://itrip.pro',
  },

  {
    title: 'TalentXO',
    description:
      'HR-tech and recruitment platform enabling companies, recruiters and candidates to streamline hiring workflows, job discovery and talent acquisition.',

    image: '/talentxo.png',

    tech: [
      'React.js',
      'Next.js',
      'GraphQL',
      'TypeScript',
      'Enterprise UI',
    ],

    link: 'https://talentxo.com',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_35%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 uppercase tracking-[0.2em] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2">
                
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-3xl font-semibold">
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      target="_blank"
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>

                  <p className="text-gray-400 leading-8 mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
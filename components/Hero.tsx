'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.2),transparent_40%)]" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 mb-4 uppercase tracking-[0.2em] text-sm"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Rahul Kumar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-gray-400 text-lg leading-8 max-w-2xl"
          >
            Building scalable enterprise applications with React.js,
            Next.js, NestJS, GraphQL and modern architecture.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-white text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-white/20 px-7 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-[120px] opacity-30" />

            <div className="relative w-[340px] h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Rahul Kumar"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Rahul Kumar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-400 text-lg"
          >
            Senior Consultant at EY with 8+ years of experience building enterprise-scale full-stack applications using React.js, Next.js, NestJS, Node.js, and modern cloud-ready architecture.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
              View Projects
            </button>

            <button className="border border-gray-700 px-6 py-3 rounded-xl">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[320px] h-[320px] rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700" />
        </div>
      </div>
    </section>
  )
}
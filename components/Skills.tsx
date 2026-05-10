const skills = [
    'React.js',
    'Next.js',
    'NestJS',
    'Node.js',
    'GraphQL',
    'TypeScript',
    'JavaScript',
    'Redux',
    'Tailwind CSS',
    'REST APIs',
    'System Design',
    'Architecture',
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
  
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
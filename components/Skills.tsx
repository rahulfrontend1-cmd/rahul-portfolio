const skills = [
    'React.js',
    'Next.js',
    'TypeScript',
    'NestJS',
    'JavaScript',
    'Redux',
    'Tailwind CSS',
    'Node.js',
    'System Design',
    'Frontend Architecture',
    'GraphQL',
  ]
  
  export default function Skills() {
    return (
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>
  
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 border border-zinc-700 rounded-xl bg-zinc-900"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
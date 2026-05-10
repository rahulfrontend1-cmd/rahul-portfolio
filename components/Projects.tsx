const projects = [
    {
      title: 'iTrip.pro',
      description:
        'Travel and trip management platform focused on modern UI/UX and scalable frontend architecture.',
      tech: ['Next.js', 'React.js', 'TypeScript'],
      link: 'https://itrip.pro',
    },
    {
      title: 'Enterprise Dashboard',
      description:
        'Large-scale dashboard architecture with reusable components and role-based workflows.',
      tech: ['React.js', 'Redux', 'Material UI'],
    },
  ]
  
  export default function Projects() {
    return (
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>
  
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="border border-zinc-800 rounded-2xl p-6 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>
  
                <p className="text-gray-400 mb-6">{project.description}</p>
  
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 rounded-full bg-zinc-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
  
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-white underline"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
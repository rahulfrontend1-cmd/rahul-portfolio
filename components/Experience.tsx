const experience = [
    {
      company: 'EY',
      role: 'Senior Technical Consultant',
      duration: 'Dec 2022 - Present',
      location: 'Bengaluru, India',
      details: [
        'Building enterprise-scale full-stack applications using React.js, Next.js, NestJS, GraphQL, and TypeScript.',
        'Designing scalable frontend/backend architecture for large business workflows and enterprise platforms.',
        'Developing reusable component systems, APIs, and performance-optimized user experiences.',
        'Collaborating with cross-functional teams in agile enterprise environments.',
        'Contributing to technical architecture decisions and scalable engineering practices.'
      ]
    },
    {
      company: 'HCL Technologies',
      role: 'Lead Engineer',
      duration: 'Apr 2021 - Dec 2022',
      location: 'Bengaluru, India',
      details: [
        'Worked on scalable web applications using React.js, NestJS, JavaScript, and modern frontend ecosystems.',
        'Led feature development, reusable architecture implementation, and API integration efforts.',
        'Improved application performance and maintainability across enterprise modules.',
        'Collaborated with engineering teams to deliver production-grade applications.'
      ]
    },
    {
      company: 'IIFL Wealth',
      role: 'Software Developer',
      duration: 'Jan 2020 - Apr 2021',
      location: 'Bengaluru, India',
      details: [
        'Developed business-critical web applications using JavaScript and NestJS.',
        'Worked on responsive UI systems, backend services, and enterprise integrations.',
        'Built scalable modules and optimized application workflows.'
      ]
    },
    {
      company: 'CrewKarma Networks',
      role: 'Software Developer',
      duration: 'Mar 2018 - Dec 2019',
      location: 'Bengaluru, India',
      details: [
        'Built modern web applications using JavaScript-based frontend and backend technologies.',
        'Worked on feature implementation, API integrations, and scalable application modules.',
        'Contributed to UI development and product engineering workflows.'
      ]
    }
  ]
  
  export default function Experience() {
    return (
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Experience</h2>
  
          <div className="space-y-8">
            {experience.map((item) => (
              <div
                key={item.company}
                className="border border-zinc-800 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <span className="text-gray-500">{item.duration}</span>
                </div>
  
                <p className="text-xl mb-2">{item.company}</p>
  
                <p className="text-gray-400">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
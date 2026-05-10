const experience = [
    {
      company: 'EY',
      role: 'Senior Technical Consultant',
      duration: 'Dec 2022 - Present',
    },
    {
      company: 'HCL Technologies',
      role: 'Lead Engineer',
      duration: 'Apr 2021 - Dec 2022',
    },
    {
      company: 'IIFL Wealth',
      role: 'Software Developer',
      duration: 'Jan 2020 - Apr 2021',
    },
    {
      company: 'CrewKarma Networks',
      role: 'Software Developer',
      duration: 'Mar 2018 - Dec 2019',
    },
  ]
  
  export default function Experience() {
    return (
      <section id="experience" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
  
          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={item.company}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="flex justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.role}</h3>
                    <p className="text-indigo-400 mt-2">{item.company}</p>
                  </div>
  
                  <span className="text-gray-400">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
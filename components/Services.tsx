const services = [
    'Full Stack Web Development',
    'Website Development',
    'Enterprise Application Development',
    'Startup MVP Development',
    'Technical Consulting',
    'Admin Dashboard Development',
  ]
  
  export default function Services() {
    return (
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Services</h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="p-8 rounded-3xl border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-semibold leading-8">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
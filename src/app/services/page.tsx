const services = [
  {
    title: "Workshops",
    desc: "Hands-on sessions on technology, design, and career development.",
  },
  {
    title: "Mentorship",
    desc: "One-on-one and group mentoring to guide you on your journey.",
  },
  {
    title: "Events & Networking",
    desc: "Connect with peers and industry professionals through events.",
  },
  {
    title: "Project Collaboration",
    desc: "Work on real-world projects and strengthen your portfolio.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          At KClub, we provide a range of opportunities to help our members grow, 
          learn, and succeed.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

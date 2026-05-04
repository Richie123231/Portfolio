import "./index.css";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Richard Joshi
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-4">
          Software Developer | Logistics | Operations
        </p>

        <p className="text-gray-500 max-w-xl mb-6">
          Professional with experience in software development, supply chain logistics,
          and technical support across Canada and India.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-2 rounded-xl hover:scale-105 transition">
            View Projects
          </a>
          <a href="/Richard_Resume.pdf" download className="border px-6 py-2 rounded-xl hover:scale-105 transition">
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-7">
          Motivated professional with experience in software development, logistics operations,
          and technical support. Background includes hands-on work in warehouse operations,
          supply chain processes, and enterprise software support.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-6">

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">Logistics Specialist — Azuma Foods</h3>
            <p className="text-gray-400">Apr 2026 – Present | Mississauga, ON</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">FedEx — Cargo & Package Handler</h3>
            <p className="text-gray-400">Jun 2024 – Apr 2025 | Barrie, ON</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">Specialty Cook — Canadian Brewhouse</h3>
            <p className="text-gray-400">May 2023 – May 2025</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">Tech Support Advisor — Best Buy</h3>
            <p className="text-gray-400">2023 – 2024</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">Technical Support Analyst — Anthology</h3>
            <p className="text-gray-400">Dec 2022 – Apr 2023</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">Associate Software Engineer — TechSera</h3>
            <p className="text-gray-400">Sep 2021 – Aug 2022</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Supply Chain Management Platform
            </h3>
            <p className="text-gray-400 mb-4">
              Inventory and shipment tracking platform focused on logistics workflows and process management.
            </p>
            <a
              href="https://github.com/Richie123231"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View Code →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Trading Dashboard
            </h3>
            <p className="text-gray-400 mb-4">
              Dashboard for tracking portfolio performance and financial data.
            </p>
            <a
              href="https://github.com/Richie123231"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              View Code →
            </a>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        <p className="text-gray-400">
          Georgian College — Project Management (2024)
        </p>
        <p className="text-gray-400">
          Georgian College — Big Data Analytics (2023)
        </p>
        <p className="text-gray-400">
          Christ University — BTech Computer Engineering (2021)
        </p>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400">Email: richardjoshi21@gmail.com</p>
        <p className="text-gray-400">
          LinkedIn: linkedin.com/in/richard-joshi-638969177
        </p>
      </section>

    </div>
  );
}
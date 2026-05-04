import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.img
          src="/richard.JPG"
          alt="Richard"
          className="w-32 h-32 rounded-full mb-6 object-cover border border-white/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Richard Joshi
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-400 mb-4">
          Software Developer | Logistics | Operations
        </p>

        <p className="text-gray-500 max-w-xl mb-8">
          Professional with experience in software development, supply chain logistics,
          and technical support across Canada and India.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-xl hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/Richard_Resume.pdf"
            download
            className="border px-6 py-2 rounded-xl hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-7">
          Motivated professional with experience in software development, logistics operations,
          and technical support. Background includes hands-on work in warehouse operations,
          supply chain processes, and enterprise software support.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        <div className="space-y-6">
          {[
            "Logistics Specialist — Azuma Foods",
            "FedEx — Cargo & Package Handler",
            "Specialty Cook — Canadian Brewhouse",
            "Tech Support Advisor — Best Buy",
            "Technical Support Analyst — Anthology",
            "Associate Software Engineer — TechSera",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        <p className="text-gray-400">Georgian College — Project Management (2024)</p>
        <p className="text-gray-400">Georgian College — Big Data Analytics (2023)</p>
        <p className="text-gray-400">Christ University — BTech Computer Engineering (2021)</p>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400">Email: richardjoshi21@gmail.com</p>
        <p className="text-gray-400">LinkedIn: linkedin.com/in/richard-joshi-638969177</p>
      </section>

    </div>
  );
}
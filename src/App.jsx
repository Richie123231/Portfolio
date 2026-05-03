import { Mail, Phone } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white scroll-smooth">

      {/* NAVBAR */}
      <div className="fixed top-0 w-full backdrop-blur bg-slate-950/70 border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">
          <div className="flex gap-10 text-slate-300">

            {["experience", "skills", "education", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative group capitalize"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 transition-all group-hover:w-full"></span>
              </a>
            ))}

          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-20">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Richard Joshi
            </h1>

            <p className="text-sky-400 mb-4">
              Data Analytics • Supply Chain • Operations
            </p>

            <p className="text-slate-400 mb-6">
              I combine analytics, logistics, and systems thinking to optimize
              operations and drive business decisions.
            </p>

            <div className="flex gap-4">
              <a
                href="/Richard_Resume.pdf"
                download
                className="bg-sky-400 text-black px-5 py-2 rounded-lg hover:scale-105 transition"
              >
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/richard-joshi-638969177"
                target="_blank"
                rel="noreferrer"
                className="border px-5 py-2 rounded-lg hover:bg-slate-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 blur-2xl opacity-20 rounded-xl"></div>

              <img
                src="/richard.JPG"
                alt="profile"
                className="w-64 rounded-xl relative z-10 shadow-xl"
              />
            </div>
          </div>

        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>

          <div className="space-y-4">
            {[
              "Logistics Specialist – Azuma Foods",
              "Specialty Cook – Canadian Brewhouse",
              "FedEx – Cargo & Package Handler",
              "Tech Support Advisor – Best Buy",
              "Technical Support Analyst – Anthology",
              "Associate Software Engineer – TechSera"
            ].map((job, i) => (
              <div
                key={i}
                className="bg-slate-900 p-5 rounded-xl hover:translate-x-2 transition"
              >
                {job}
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "SQL",
              "Python",
              "Power BI",
              "Tableau",
              "Excel",
              "ERP",
              "Logistics",
              "Analytics"
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-slate-900 p-4 rounded-xl text-center hover:bg-sky-400 hover:text-black transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Education</h2>

          <div className="space-y-3">
            <div className="bg-slate-900 p-5 rounded-xl">
              Georgian College – Project Management (2024)
            </div>

            <div className="bg-slate-900 p-5 rounded-xl">
              Georgian College – Big Data Analytics (2023)
            </div>

            <div className="bg-slate-900 p-5 rounded-xl">
              Christ University – BTech Computer Engineering (2021)
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <div className="bg-slate-900 p-6 rounded-xl space-y-3">

            <div className="flex gap-2 items-center">
              <Mail /> richardjoshi21@gmail.com
            </div>

            <div className="flex gap-2 items-center">
              <Phone /> +1 4379842476
            </div>

            <a
              href="https://www.linkedin.com/in/richard-joshi-638969177"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400"
            >
              LinkedIn Profile
            </a>

          </div>
        </section>

      </div>
    </div>
  );
}
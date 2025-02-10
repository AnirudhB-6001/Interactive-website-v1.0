import React, { useEffect } from "react";
import "./tailwind.css";

// Scroll to section function
const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

// Timeline Data
const timelineData = [
  {
    year: "2023",
    role: "Business Development Manager",
    company: "SiteRecon.ai (Remote)",
    details: [
      "Sold advanced AI solutions leveraging computer vision & geospatial technology.",
      "Developed and implemented sales strategies and comprehensive collateral.",
      "Introduced prospecting, reporting, and process automation tools.",
      "Coached and mentored SDRs, maintaining 0% customer churn.",
    ],
  },
  {
    year: "2019-2020",
    role: "Business Development Manager",
    company: "ION Energy (Mumbai)",
    details: [
      "Managed global accounts for SaaS and battery management solutions.",
      "Built a robust deal pipeline and secured key design contracts.",
      "Collaborated with automotive clients across APAC, NORAM, and Europe.",
    ],
  },
  {
    year: "2015-2017",
    role: "Senior Business Development Associate",
    company: "Pluss Advanced Technologies (Gurgaon)",
    details: [
      "Promoted advanced thermal batteries, achieving sustained growth.",
      "Led strategic projects with companies like Gamesa and Maruti Suzuki.",
      "Implemented a product-to-solution framework, boosting revenue.",
    ],
  },
];

// Skills Data
const skillsData = [
  {
    category: "Sales & Marketing",
    skills: [
      "Global GTM Strategies",
      "International Sales",
      "Account Management",
    ],
  },
  {
    category: "Tech Expertise",
    skills: [
      "CRM Tools (HubSpot, Dynamics)",
      "Sales Automation",
      "Generative AI Tools",
    ],
  },
  {
    category: "Soft Skills",
    skills: ["Strategic Thinking", "Team Leadership", "Problem-Solving"],
  },
];

// Projects Data
const projectsData = [
  {
    title: "Reefer-Van Prototype Development",
    details:
      "Developed technical protocols and managed product trials for logistics infrastructure in collaboration with MSIL.",
  },
  {
    title: "Go-To-Market Strategy Development",
    details:
      "Developed product positioning, pricing strategies, and managed ISO-compliant transitions from prototype to production.",
  },
];

export default function App() {
  useEffect(() => {
    // Add fade-in animation on page load for header
    const header = document.getElementById("main-header");
    header.classList.add("animate-fade-in");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="w-full py-4 bg-white shadow-md fixed top-0 z-10">
        <ul className="flex justify-center space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-blue-500 hover:underline"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-blue-500 hover:underline"
            >
              Timeline
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-blue-500 hover:underline"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-blue-500 hover:underline"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-blue-500 hover:underline"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Homepage Section */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center bg-blue-100 px-4 text-center"
      >
        <h1
          id="main-header"
          className="text-4xl md:text-6xl font-bold text-blue-600 opacity-0 transition-opacity duration-1000"
        >
          Anirudh Batra
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Tech-Savvy Sales Leader | Growth Driver | Global GTM Specialist
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="/Anirudh_Batra_Resume.pdf"
            download
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Get in Touch
          </a>
        </div>
        <div className="flex space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/anirudh-batra-bd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin-icon.svg"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
          <a
            href="https://github.com/anirudhbatraofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github-icon.svg"
              alt="GitHub"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="timeline" className="mt-10 w-full max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          Career Timeline
        </h2>
        <div className="mt-6 space-y-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <h3 className="text-xl font-bold text-blue-600">{item.year}</h3>
              <h4 className="text-lg text-gray-800">
                {item.role} at {item.company}
              </h4>
              <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-10 w-full max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          Skills Overview
        </h2>
        <div className="mt-6 space-y-8">
          {skillsData.map((category, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                {category.category}
              </h3>
              <ul className="mt-2 text-gray-600 list-disc pl-5 space-y-1">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-10 w-full max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-semibold text-gray-800">
          Projects Showcase
        </h2>
        <div className="mt-6 space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <h3 className="text-xl font-bold text-blue-600">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-10 w-full max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <form className="mt-6 space-y-4">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Your Message"
          ></textarea>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow transform hover:scale-105 hover:bg-blue-600 transition-transform duration-200">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Send, Github } from "lucide-react";
import React from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "Medical Chatbot UI",
      description:
        "Medical chatbot using LLaMA 2 and Gradio. Uses T4 GPU and aboonaji dataset for structured interaction.",
      link: "https://a161f999dcb3274e2b.gradio.live",
      image: "https://plus.unsplash.com/premium_photo-1732628348854-56a54f1da2ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Portfolio Website",
      description:
        "Built with React and Tailwind. Demonstrates UI/UX capabilities with clean transitions and layouts.",
      link: "",
      image: "https://images.unsplash.com/photo-1620046311691-5d93d65f69e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "TED Talk Lite",
      description:
        "TED talk clone focusing on UI/UX design using Figma and developed with Webflow.",
      link: "https://preview.webflow.com/preview/my-project-a9dc18?...",
      image: "https://images.unsplash.com/photo-1646189480378-cd0ba691cb4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Persona AI Recommender",
      description:
        "E-commerce recommender built with JavaScript, HTML/CSS, and Python to suggest items based on user history.",
      link: "https://github.com/BirukZenebe1/41697_..._persona_ai_project",
      image: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Landing Page for Circle",
      description:
        "UI/UX landing page built in Figma and Webflow, showcasing responsive design principles.",
      link: "https://preview.webflow.com/preview/circle-company-485b32?...",
      image: "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const skills = [
    "React.js",
    "Tailwind CSS",
    "Figma",
    "HTML/CSS/JavaScript",
    "UI Design",
    "Wireframing",
    "Prototyping",
    "Usability Testing",
  ];

  const skillIcons = {
    "React.js": "⚛️",
    "Tailwind CSS": "🌬️",
    "Figma": "🎨",
    "HTML/CSS/JavaScript": "💻",
    "UI Design": "🧩",
    "Wireframing": "🗺️",
    "Prototyping": "🛠️",
    "Usability Testing": "🧪",
  };

  return (
    <div className="relative overflow-hidden p-16 max-w-6xl mx-auto space-y-24">
      {/* Background blob effect */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse z-0" />

      {/* Hero Section */}
      <section className="text-center space-y-6 relative z-10">
        <motion.h1
          className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm Biruk Zenebe
        </motion.h1>
        <motion.p
          className="text-gray-600 text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Frontend Developer & UI/UX Designer passionate about creating seamless, beautiful user experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
          >
            Let's Connect
          </a>
        </motion.div>
      </section>
        {/* Education Section */}
<section>
  <h2 className="text-4xl font-semibold text-center mb-12">🎓 Education</h2>
  <div className="space-y-6 max-w-3xl mx-auto">
  <motion.div
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold">B.Sc. in Information Technology</h3>
      <p className="text-sm text-gray-500"> Mekelle Institute of technology, Ethiopia (2019-2021)</p>
      <p className="text-gray-700 mt-2">Web development, UI/UX Interfaces,Human-Computer Interaction, Cloud oriented web services. How ever couldn't complete due to war in Ethiopia.😔 </p>
    </motion.div>
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold">B.Sc. in Computer Science</h3>
      <p className="text-sm text-gray-500">University of Vizja, Poland (Expected Sept 2025)</p>
      <p className="text-gray-700 mt-2">Focused on AI, Machine Learning, UI/UX and Human-Computer Interaction. Thesis on fine-tuning LLaMA 2 for medical chatbot applications. and graduating on September.🥳 </p>
    </motion.div>
  </div>
</section>

{/* Experience Section */}
<section>
  <h2 className="text-4xl font-semibold text-center mb-12">💼 Experience</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold">Frontend web Developer (Addis Abeba ,Ethiopia)</h3>
      <p className="text-sm text-gray-500"> Sheba academy - September 2021 — June2021 </p>
      <p className="text-gray-700 mt-2">Built responsive web apps using React, and Webflow, delivered clean UI/UX and performance,Wrote custom HTML and JavaScript for existing websites. 😌🏆</p>
    </motion.div>
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold">Data Analysis Intern - Remote (Dubai, UAE)</h3>
      <p className="text-sm text-gray-500">Ruha LLC - April 2024 — December 2024</p>
      <p className="text-gray-700 mt-2">Completed my Internship at Ruha LLC, Conducted thorough data validation, performed regular audits on existing databases and enhanced data visualization capabilities.🤩✨</p>
    </motion.div>
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-semibold">AI Project Contributor (Warsaw,Poland)</h3>
      <p className="text-sm text-gray-500">Self-Initiated — 2024</p>
      <p className="text-gray-700 mt-2">Developed medical chatbot and recommender systems using Python, Gradio, and LLaMA 2. Deployed demos with Google Colab and shared via GitHub. 💪💥</p>
    </motion.div>
  </div>
</section>


      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-semibold text-center mb-12">🌟 Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Tilt key={index} glareEnable scale={1.02} glareMaxOpacity={0.15}>
              <motion.div
                className="rounded-xl border border-gray-200 p-5 bg-white shadow-md hover:shadow-lg transition flex flex-col h-full"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded mb-4 w-full h-40 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                >
                  View Project
                </a>
              </motion.div>
            </Tilt>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-gray-500">
          PS: Some of the projects require real-time runtime like the Medical Chatbot and Persona AI. They’re hosted on Google Colab using T4 GPU. Contact me for the live links to test them!
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-4xl font-semibold text-center mb-12">🛠 My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-100 py-4 px-2 rounded-lg shadow hover:shadow-md text-center text-gray-800 font-medium flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-2xl mb-1">{skillIcons[skill] || "🧠"}</span>
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center space-y-6">
        <h2 className="text-4xl font-semibold">📬 Get In Touch</h2>
        <motion.div
          className="text-gray-600 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p><strong>Email:</strong> birukzenebe111@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/biruk-zenebe-916529246/" className="text-blue-600 hover:underline" target="_blank">View Profile</a></p>
          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <a
              href="mailto:birukzenebe111@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition text-lg"
            >
              <Send className="h-5 w-5" /> Say Hello
            </a>
            <a
              href="https://github.com/BirukZenebe1"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition text-lg"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

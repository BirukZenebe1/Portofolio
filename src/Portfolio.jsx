import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Send, Github } from "lucide-react";
import React from "react";
import ThemeToggle from "./components/ui/ThemeToggle";
export default function Portfolio() {
  const projects = [
    {
      title: "Automated Machine Learning Pipeline",
      description:
        "Built an automated Randomforest ensemble pipeline using AWS lambda, S3 model training and deployment.",
      link: " https://github.com/BirukZenebe1/Automated-Random-Forest-Pipeline-Lambda-function-",
      image: 
           "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=2821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Medical Chatbot UI",
      description:
        "Medical chatbot using LLaMA 2 and Gradio. Uses T4 GPU and aboonaji dataset for structured interaction.",
      link: " https://7cd460b36c1f4d686a.gradio.live",
      image:
        "https://plus.unsplash.com/premium_photo-1732628348854-56a54f1da2ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "A3C for Kungufu",
      description:
        "This project implements an Asynchronous Advantage Actor-Critic (A3C) reinforcement learning agent trained to play the Kung Fu Master Atari environment. The agent learns optimal policies through parallel training and environment interaction..",
      link: "https://github.com/BirukZenebe1/A3C",
      image:
        "https://images.unsplash.com/photo-1620046311691-5d93d65f69e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "PPO",
      description:
        "End-to-End implementation of Proximal Policy Optimization (PPO) with a CNN-based Actor–Critic network to solve the CarRacing-v3 environment using continuous actions.",
      link: "https://github.com/BirukZenebe1/PPO",
      image:
        "https://theaisummer.com/static/425fe4453b2e763153350c7bf17e921d/f422e/ppo_trpo.jpg",
    },
    {
      title: "Persona AI Recommender",
      description:
        "E-commerce recommender built with JavaScript, HTML/CSS, and Python to suggest items based on user history.",
      link: "https://personabkmlys.netlify.app",
      image:
        "https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Q-learning-PAC-MAN",
      description:
        "This project demonstrates the use of Deep Convolutional Q-Learning (DQN) to train an agent capable of playing the Pac-Man environment. A convolutional neural network is used to process visual inputs and estimate action-value functions.",
      link: "https://github.com/BirukZenebe1/Q-learning-PAC-MAN",
      image:
        "https://static.bandainamcoent.eu/high/pac-man/brand-setup/pac_thumb_brand_624x468_4b.jpg",
    },
  ];

  const skills = [
    "Python",
    "AWS Sage Maker",
    "AWS Lambda", 
    "Power BI",
    "Fine-tuning Models",
    "MS Excel",
    "SQL/ Postgres",
    "Deep Learning",
    "Pytorch, Tensorflow",
  ];

  const skillIcons = {
    "Python": "🐍",
    "AWS Sage Maker": "🤖",
    "AWS Lambda": "🔶",
    "Power BI": "🌬️",
    "Fine-tuning Models": "🎨",
    "MS Excel": "📊",
    "SQL/ Postgres": "🗃️",
    "Deep Learning": "🖌️",
    "Pytorch, Tensorflow": "🧪",
  };

  return (
      <>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-500">
         <ThemeToggle />
      
            {/* Background blobs fixed to viewport edges */}

            <div className="fixed top-[-100px] left-0 w-[400px] h-[400px] bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse z-0 pointer-events-none" />
            <div className="fixed bottom-[-120px] right-0 w-[400px] h-[400px] bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse z-0 pointer-events-none" />
            <ThemeToggle/>
            {/* Main content container */}
            <div className="relative overflow-hidden p-16 max-w-6xl mx-auto space-y-24 z-10">
              {/* Hero Section */}
                  <section className="text-center space-y-8 relative z-10">
                      <motion.h1
                          className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
                          initial={{ opacity: 0, y: -30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7 }}
                      >
                          Hi, I'm Biruk Zenebe
                      </motion.h1>

                      <div className="w-46 h-46 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white shadow-lg mx-auto">
                      <img
                          src="https://i.postimg.cc/Bb1CfzKv/temp-Imageh-PHt4-W.avif"
                          alt="Pavifrofile"
                          className="object-cover w-full h-full"
                      />
                      </div>


                      <motion.p
                          className="text-gray-600 text-xl font-semibold max-w-2xl mx-auto"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                      >
                        Machine learning Apparentice | Gen AI Engineer
                      </motion.p>
                      <h2 className="text-4xl font-semibold text-center mb-12">👨‍💻 About me</h2>
                      <motion.p
                          className="text-gray-600 text-lg max-w-2xl mx-auto text-left"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                      >
                          I'm a data science enthusiast and life long learner with a strong interest in Artificial Intelligence, Machine Learning, and Deep Reinforcement Learning. I enjoy building intelligent systems, experimenting with modern AI algorithms, and applying theory to practical projects. 🚀
                      </motion.p>
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
                    <h3 className="text-gray-600 font-semibold">B.Sc. in Information Technology</h3>
                    <p className="text-sm text-gray-500">Mekelle Institute of technology, Mekelle, Ethiopia (2019-2021)</p>
                    <p className="text-gray-700 mt-2">
                      Web development, UI/UX Interfaces, Human-Computer Interaction, Cloud oriented web services. How
                      ever couldn't complete due to war in Ethiopia.
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-gray-600  font-semibold">B.Sc. in Computer Science</h3>
                    <p className="text-sm text-gray-500">University of Vizja, Warsaw,Poland (Expected Sept 2025)</p>
                    <p className="text-gray-700 mt-2">
                      Focused on AI, Machine Learning, UI/UX and Human-Computer Interaction. Thesis on fine-tuning LLaMA 2
                      for medical chatbot applications. and graduating on September.
                    </p>
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
                    <h3 className="text-gray-600 font-semibold">English instructor (Warsaw ,Poland)</h3>
                    <p className="text-sm text-gray-500"> GB English - September 2022 — January 2024 </p>
                    <p className="text-gray-700 mt-2">
                      English instructor with experience helping learners improve fluency, pronunciation, and communication clarity.
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-gray-600 font-semibold">Data Analysis Intern - Remote (Dubai, UAE)</h3>
                    <p className="text-sm text-gray-500">Ruha LLC - April 2024 — December 2024</p>
                    <p className="text-gray-700 mt-2">
                      Completed my Internship at Ruha LLC, Conducted thorough data validation, performed regular audits on
                      existing databases and enhanced data visualization capabilities.
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-gray-600 font-semibold">AI Project Contributor (Warsaw,Poland)</h3>
                    <p className="text-sm text-gray-500">Self-Initiated - since 2024 </p>
                    <p className="text-gray-700 mt-2">
                      Developed a medical chatbot and recommendation system using Python, Gradio, and LLaMA 2. Deployed interactive demos on Google Colab and published code repositories on GitHub. Automated machine learning pipelines using AWS Lambda. 
                    </p>
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
                        <h3 className="text-gray-600 font-semibold mb-2">{project.title}</h3>
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
                  PS: The Medical Chatbot is hosted on Google Colab using T4 GPU for better and fast performance,and since the deployment for such models require resorces I haven't deployed it yet. So please contact me using the email below for the live link to test it!
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
                  <p>
                    <strong>Email:</strong> birukzenebe111@gmail.com
                  </p>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://www.linkedin.com/in/biruk-zenebe-916529246/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </p>
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
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition text-lg"
                    >
                      <Github className="h-5 w-5" /> GitHub
                    </a>
                  </div>
                </motion.div>
              </section>
            </div>
         </div>
       </>
  );
}

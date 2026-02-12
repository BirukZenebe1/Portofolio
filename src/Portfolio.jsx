import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Send, Github, ExternalLink, Linkedin } from "lucide-react";
import ThemeToggle from "./components/ui/ThemeToggle";

const projects = [
  {
    title: "Medical Chatbot UI",
    description:
      "LLaMA 2 medical assistant interface built with Gradio and structured prompts for safer clinical-style interactions.",
    link: "https://huggingface.co/spaces/brkznb/Medicalchatbot",
    image:
      "https://plus.unsplash.com/premium_photo-1732628348854-56a54f1da2ad?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Automated ML Pipeline",
    description:
      "AWS Lambda and S3-based workflow that trains and evaluates Random Forest models, then sends automated reports.",
    link: "https://github.com/BirukZenebe1/Automated-Random-Forest-Pipeline-Lambda-function-",
    image:
      "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=2821&auto=format&fit=crop"
  },
  {
    title: "Persona AI Recommendation App",
    description:
      "End-to-end personalized e-commerce recommendation experience with user profiling, filtering, and product flow.",
    link: "https://github.com/BirukZenebe1/persona_ai_project",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1974&auto=format&fit=crop"
  }
];

const experiments = [
  {
    title: "A3C for Kung Fu Master",
    description:
      "Asynchronous Advantage Actor-Critic training setup for Atari gameplay with parallel environment sampling.",
    link: "https://github.com/BirukZenebe1/A3C",
    image:
      "https://images.unsplash.com/photo-1620046311691-5d93d65f69e9?q=80&w=2073&auto=format&fit=crop"
  },
  {
    title: "DQN for Pac-Man",
    description:
      "Deep Q-Learning agent with CNN state encoder for policy learning from visual observations.",
    link: "https://github.com/BirukZenebe1/Q-learning-PAC-MAN",
    image:
      "https://static.bandainamcoent.eu/high/pac-man/brand-setup/pac_thumb_brand_624x468_4b.jpg"
  },
  {
    title: "PPO for CarRacing-v3",
    description:
      "Continuous-control PPO implementation using actor-critic networks and stable training loops.",
    link: "https://github.com/BirukZenebe1/PPO",
    image:
      "https://theaisummer.com/static/425fe4453b2e763153350c7bf17e921d/f422e/ppo_trpo.jpg"
  }
];

const skills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "MLOps",
  "AWS Lambda",
  "SageMaker",
  "LLM Fine-Tuning",
  "MLflow",
  "Weights & Biases",
  "SQL / PostgreSQL",
  "Data Visualization"
];

function SectionTitle({ children }) {
  return <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-900 dark:text-slate-100">{children}</h2>;
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500">
      <ThemeToggle />

      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-28 left-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 space-y-24">
        <section className="text-center space-y-8">
          <motion.h1
            className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-cyan-600 to-amber-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Biruk Zenebe
          </motion.h1>

          <div className="mx-auto h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
            <img
              src="https://i.postimg.cc/7YPJYTF7/IMG-4011-2.avif"
              alt="Biruk Zenebe"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.p
            className="mx-auto max-w-3xl text-lg md:text-xl text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Machine Learning and GenAI Engineer building production-ready AI systems, recommendation engines, and practical reinforcement learning solutions.
          </motion.p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="mailto:birukzenebe111@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition"
            >
              <Send className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="https://github.com/BirukZenebe1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["3+", "AI Projects Deployed"],
            ["2", "Degrees in Tech"],
            ["2024", "Focused on GenAI + RL"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-6 text-center shadow-sm">
              <p className="text-3xl font-black text-cyan-600 dark:text-cyan-400">{value}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{label}</p>
            </div>
          ))}
        </section>

        <section>
          <SectionTitle>About Me</SectionTitle>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-8 leading-8 text-slate-700 dark:text-slate-300 shadow-sm">
            Data science enthusiast and lifelong learner specializing in AI, machine learning, and deep reinforcement learning. I design and deploy ML systems on cloud infrastructure, experiment with modern architectures, and turn technical ideas into usable products.
          </div>
        </section>

        <section>
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, index) => (
              <Tilt key={project.title} glareEnable scale={1.02} glareMaxOpacity={0.1}>
                <motion.article
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <img src={project.image} alt={project.title} className="h-40 w-full rounded-lg object-cover" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-grow">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-medium hover:underline"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.article>
              </Tilt>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Experiments</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {experiments.map((experiment, index) => (
              <motion.article
                key={experiment.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <img src={experiment.image} alt={experiment.title} className="h-40 w-full rounded-lg object-cover" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{experiment.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{experiment.description}</p>
                <a
                  href={experiment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-medium hover:underline"
                >
                  Explore Repo <ExternalLink className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-center text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center space-y-4">
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="text-slate-700 dark:text-slate-300">birukzenebe111@gmail.com</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="mailto:birukzenebe111@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-500 transition"
            >
              <Send className="h-4 w-4" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/biruk-zenebe-916529246/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/BirukZenebe1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

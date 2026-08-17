import { motion } from "framer-motion";

import justflip from "../assets/JustFlip.webp";
import Lic from "../assets/Lic.svg";
import Gstare from "../assets/G-stare.svg";
import Markanthony from "../assets/Markanthony.png";
import Dashbord from "../assets/Dashboard.svg";
import Astrology from "../assets/Astrology.png";

const projects = [
  {
    title: "JustFlip – Real Estate Portal",
    description:
      "A full-featured real estate platform where users, brokers, and contractors can upload properties, generate leads, manage profiles, and optimize listings for SEO. Includes JWT authentication, role-based access, blogs, and location-based search.",
    image: justflip,
    link: "https://justflip.in",
  },
  {
    title: "JustFlip – Admin & Builder Dashboard",
    description:
      "Developed an advanced Admin & Builder Dashboard for JustFlip with multi-level access control. Builders can manage property listings, admins can manage blogs and users, and role-based access ensures secure management. Includes lead generation, JWT + refresh tokens, and multiple property types.",
    image: Dashbord,
    link: "https://just-filp-dashboard.vercel.app/",
  },
  {
    title: "MarkAnthony",
    description:
      "A personal brand website with modern UI/UX design, animations, and blog management using React and Tailwind CSS.",
    image: Markanthony,
    link: "https://markanthony.in",
  },
  {
    title: "Astrology Project",
    description:
      "The site explains astrology as a system used to understand life, personality, and future through celestial bodies, users, and performance analytics using React and SSR.",
    image: Astrology,
    link: "https://astrology-smoky.vercel.app",
  },
  {
    title: "LIC Management Portal",
    description:
      "Insurance management platform featuring policy tracking, client dashboards, and data visualization modules.",
    image: Lic,
    link: "https://lic-xi.vercel.app/",
  },
  {
    title: "G-Stare Analytics",
    description:
      "A marketing and analytics platform for tracking campaign performance and engagement in real-time.",
    image: Gstare,
    link: "https://g-star.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="my-16 scroll-mt-24 px-4 md:px-10"
    >
      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FD6F00]">
          My Work
        </p>

        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          My Projects
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
          A selection of projects I've built using React.js, JavaScript,
          Tailwind CSS, REST APIs, and modern frontend technologies.
        </p>
      </motion.div>

      {/* Projects */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="mx-auto mt-12 grid max-w-[1300px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{
              y: -10,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group block h-full"
          >
            <div  className=" relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#3E4550] bg-[linear-gradient(to_top_left,#131A2A,#0F161F)] p-3 shadow-lg transition-all duration-300 group-hover:border-[#9aa6ff]/40 group-hover:shadow-[0_20px_50px_rgba(36,59,85,0.4)]"            >
              <div className="relative overflow-hidden rounded-xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className=" h-56 w-full rounded-xl object-cover md:h-52"
                />

                <div
                  className=" pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-5">

                <h3  className=" mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#9aa6ff]">
                  {project.title}
                </h3>

                <p className="flex-1 text-sm leading-7 text-gray-300 md:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#FD6F00]">
                  <span>View Project</span>

                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className=" absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#FD6F00] via-[#9aa6ff] to-transparent"
              />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default MyProjects;
import { motion } from "framer-motion";

const workExperienceData = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Oracliumai",
    duration: "May 2026 - Jul 2026",
    responsibilities: [
      "Developed interactive web applications using React.js and Tailwind CSS for modern, responsive UIs.",
      "Integrated REST APIs for dynamic data handling and smooth frontend-backend interaction.",
      "Ensured cross-browser compatibility and mobile responsiveness using clean HTML5 and CSS3.",
      "Collaborated with UI/UX designers and backend developers to enhance application performance.",
    ],
  },
  {
    id: 2,
    position: "Frontend Developer",
    company: "Mark Anthony Ventures",
    duration: "Mar 2024 - Nov 2025",
    responsibilities: [
      "Built responsive and dynamic user interfaces using React.js, HTML, CSS, Bootstrap, and JavaScript.",
      "Implemented Redux and Context API for efficient state management and integrated RESTful APIs for seamless backend communication.",
      "Optimized performance and scalability using modern frontend tools like Vite and Node.js.",
    ],
  },
  {
    id: 3,
    position: "Junior Developer",
    company: "Ace Web Solutions",
    duration: "May 2023 - Dec 2023",
    responsibilities: [
      "Built and styled responsive websites using HTML, CSS, and JavaScript.",
      "Applied semantic HTML, Flexbox, and CSS Grid for clean, visually appealing layouts.",
      "Added interactivity through JavaScript DOM manipulation and event handling.",
      "Managed version control with Git and completed projects like landing pages, sliders, and responsive menus.",
    ],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="my-16 scroll-mt-24 px-4 text-white md:px-8"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FD6F00]">
          Career Journey
        </p>

        <h2 className="text-3xl font-semibold md:text-5xl">
          My Work Experience
        </h2>
      </motion.div>

      {/* Experience Cards */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">
        {workExperienceData.map((work, index) => (
          <motion.div
            key={work.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`
              group
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              border-t-4
              border-t-[#FD6F00]
              bg-[linear-gradient(to_top_left,#B74302,#101722,#101722,#B74302)]
              p-6
              shadow-lg
              backdrop-blur-md
              transition-shadow
              duration-300
              hover:shadow-[0_20px_50px_rgba(253,111,0,0.15)]
              ${index === 2 ? "md:col-span-2 md:mx-auto md:max-w-[560px]" : ""}
            `}
          >
            {/* Background Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-[#FD6F00]/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-[#FD6F00]/20
              "
            />

            {/* Card Content */}
            <div className="relative z-10">
              {/* Job Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                className="mb-2 text-2xl font-bold md:text-3xl"
              >
                {work.position}
              </motion.h3>

              {/* Company + Duration */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
                className="mb-5 flex flex-col gap-1 text-sm md:flex-row md:items-center md:justify-between md:text-base"
              >
                <span className="font-medium text-[#FD6F00]">
                  {work.company}
                </span>

                <span className="text-gray-400">{work.duration}</span>
              </motion.div>

              {/* Responsibilities */}
              <motion.ul
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="space-y-3 text-xs text-gray-300 md:text-sm"
              >
                {work.responsibilities.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FD6F00]" />

                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;

import { motion } from "framer-motion";
import img from "../assets/About_me.webp";

const skills = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "REST APIs",
];

const AboutMe = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about-us"
      className="my-16 px-4 md:px-8 scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex items-center justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group w-full max-w-[500px] overflow-hidden rounded-2xl"
          >
            <motion.img
              src={img}
              alt="Devendra Ambati - React Frontend Developer"
              loading="lazy"
              decoding="async"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.5,
              }}
              className=" w-full rounded-2xl object-cover shadow-lg group-hover:shadow-[0_20px_50px_rgba(253,111,0,0.15)]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="max-w-2xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FD6F00]"
          >
            Get to know me
          </motion.p>

          <motion.h2
            id="about-heading"
            variants={itemVariants}
            className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            About Me
          </motion.h2>

          {/* Role */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center rounded-full border border-[#FD6F00]/30 bg-[#FD6F00]/10 px-4 py-2"
          >
            <span className="text-sm font-medium text-[#FD6F00]">
              React Frontend Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={containerVariants}
            className="space-y-6 text-justify text-sm leading-7 text-gray-300 md:text-base"
          >
            <motion.p variants={itemVariants}>
              I’m a passionate{" "}
              <span className="font-medium text-[#FD6F00]">
                React Frontend Developer
              </span>{" "}
              with a strong foundation in modern web development. I specialize
              in building interactive, high-performance, and responsive user
              interfaces using React.js, JavaScript, HTML, CSS, and modern UI
              technologies.
            </motion.p>

            <motion.p variants={itemVariants}>
              My experience includes working with{" "}
              <span className="font-medium text-[#FD6F00]">Redux Toolkit</span>,{" "}
              <span className="font-medium text-[#FD6F00]">RESTful APIs</span>,
              reusable components, and responsive design. I focus on writing
              clean and maintainable code while creating seamless user
              experiences across different devices and browsers.
            </motion.p>

            <motion.p variants={itemVariants}>
              I enjoy solving frontend challenges, learning new technologies,
              and continuously improving my development skills. My goal is to
              build digital experiences that are{" "}
              <span className="font-medium text-[#FD6F00]">
                functional, scalable, accessible, and visually engaging.
              </span>
            </motion.p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                className=" cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-[#FD6F00]/50 hover:text-[#FD6F00]"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

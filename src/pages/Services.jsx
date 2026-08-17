import { motion } from "framer-motion";

import Reactjs from "../assets/Frame835.svg";
import webapp from "../assets/Frame836.svg";
import auth from "../assets/Frame837.svg";
import frontend from "../assets/Frame829.svg";

const services = [
  {
    id: 1,
    img: frontend,
    title: "Frontend Development",
    description: (
      <>
        Building responsive and interactive user interfaces with{" "}
        <span className="font-semibold text-[#9aa6ff]">
          React.js, HTML5, CSS3, and JavaScript (ES6+)
        </span>
        . I focus on delivering pixel-perfect, accessible, and mobile-friendly
        designs using{" "}
        <span className="font-semibold text-[#9aa6ff]">
          Tailwind CSS
        </span>{" "}
        and{" "}
        <span className="font-semibold text-[#9aa6ff]">
          Bootstrap
        </span>
        .
      </>
    ),
  },
  {
    id: 2,
    img: Reactjs,
    title: "React.js Development",
    description: (
      <>
        Developing reusable React components with{" "}
        <span className="font-semibold text-[#9aa6ff]">
          Redux Toolkit
        </span>
        , Context API, and efficient state management. Integrating RESTful APIs
        to ensure dynamic and seamless user experiences.
      </>
    ),
  },
  {
    id: 3,
    img: webapp,
    title: "Web Application Development",
    description: (
      <>
        Developing scalable and secure single-page applications (SPAs) with
        features like{" "}
        <span className="font-semibold text-[#9aa6ff]">
          Firebase Authentication, Protected Routes
        </span>
        , and performance optimization. Ensuring smooth functionality and
        optimized loading times.
      </>
    ),
  },
  {
    id: 4,
    img: auth,
    title: "Authentication & Security",
    description: (
      <>
        Implementing secure login flows with{" "}
        <span className="font-semibold text-[#9aa6ff]">
          JWT, Firebase, and API-level validation
        </span>
        . Ensuring user data privacy and session protection through best
        practices in React app security.
      </>
    ),
  },
];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -100,
  },
  hiddenRight: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
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
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="my-16 scroll-mt-24 px-4 md:px-8"
    >
      {/* Header */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="mx-auto max-w-3xl text-center"
      >
        {/* Small Label */}
        <motion.p
          variants={headingVariants}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FD6F00]"
        >
          What I Do
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          className="text-3xl font-semibold text-white md:text-5xl"
        >
          Services
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={headingVariants}
          className="mt-5 text-sm font-medium leading-7 text-white md:text-base"
        >
          I’m a passionate{" "}
          <span className="font-semibold text-[#9aa6ff]">
            React Frontend Developer
          </span>{" "}
          with 3 years of experience building responsive and dynamic web
          applications. Skilled in{" "}
          <span className="font-semibold text-[#9aa6ff]">
            React.js, Redux, Tailwind CSS, Bootstrap, and RESTful APIs
          </span>
          , I specialize in creating modern, engaging, and user-focused
          interfaces. My goal is to deliver clean, scalable, and
          high-performance solutions that enhance user experience and meet
          business goals.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mx-auto mt-16 max-w-[1200px]">

        {/* Timeline Line - Desktop */}
        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-500 to-transparent md:block" />

        {/* Timeline Line - Mobile */}
        <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-slate-500 to-transparent md:hidden" />

        <div className="space-y-12 md:space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={isEven ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={cardVariants}
                className={`
                  relative
                  flex
                  w-full
                  items-center
                  md:justify-between
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
                  }}
                  className="
                    absolute
                    left-[3px]
                    z-20
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-[#101722]
                    bg-[#FD6F00]
                    shadow-[0_0_15px_rgba(253,111,0,0.5)]
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    ml-10
                    w-[calc(100%-40px)]
                    rounded-2xl
                    border
                    border-white/10
                    bg-[linear-gradient(to_top_left,#131A2A,#0F161F)]
                    p-5
                    shadow-lg
                    transition-shadow
                    duration-300
                    hover:border-[#FD6F00]/40
                    hover:shadow-[0_20px_50px_rgba(253,111,0,0.12)]
                    md:ml-0
                    md:w-[44%]
                    md:p-6
                  "
                >
                  {/* Card Content */}
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                    }}
                  >
                    {/* Icon + Title */}
                    <motion.div
                      variants={itemVariants}
                      className="mb-4 flex items-center gap-4"
                    >
                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-white/5
                          p-2
                        "
                      >
                        <img
                          src={service.img}
                          alt={`${service.title} icon`}
                          className="h-8 w-8 object-contain"
                          loading="lazy"
                        />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white md:text-2xl">
                        {service.title}
                      </h3>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      variants={itemVariants}
                      className="text-start text-sm leading-7 text-gray-300 md:text-base"
                    >
                      {service.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
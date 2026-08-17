import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import img from "../assets/Devendra.webp";

const Home = () => {
  return (
    <section
      id="home"
      className="mt-10 flex items-center px-4 py-10 md:px-8 h-auto"
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center justify-center gap-12 md:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col items-start justify-center gap-4"
        >
          {/* Greeting */}
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="text-xl font-semibold text-white"
          >
            Hi, I am{" "}
            <span className="text-2xl font-semibold text-[#FD6F00]">
              Ambati Devendra
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="min-h-[48px] text-3xl font-bold text-white md:text-4xl"
          >
            <TypeAnimation
              sequence={[
                "React Frontend Developer",
                2000,
                "JavaScript Developer",
                2000,
                "UI Developer",
                2000,
              ]}
              speed={60}
              deletionSpeed={40}
              repeat={Infinity}
              wrapper="span"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="mt-3 max-w-md text-justify text-sm font-normal leading-7 text-white md:text-base"
          >
            I specialize in building fast, responsive, and dynamic web
            applications using React.js and modern JavaScript. With a keen eye
            for design and user experience, I create interfaces that are not
            only visually appealing but also intuitive and user-friendly. Let's
            work together to bring your ideas to life on the web!
          </motion.p>

          {/* Hire Me Button */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=devendraambati1998@gmail.com&su=Let's%20Work%20Together&body=Hi%20Devendra%2C%0A%0AI'd%20like%20to%20discuss%20a%20project%20opportunity."
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.8,
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-2 inline-block"
          >
            <button
              type="button"
              className="
                h-[42px]
                w-[152px]
                rounded-lg
                bg-[#FD6F00]
                px-4
                py-2
                text-lg
                font-normal
                text-white
                shadow-lg
                shadow-[#FD6F00]/20
                transition
                duration-300
                hover:bg-[#ff8640]
                hover:shadow-[#FD6F00]/40
              "
            >
              Hire Me
            </button>
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="hidden items-center justify-center md:flex"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                -z-10
                rounded-full
                bg-[#FD6F00]/10
                blur-3xl
              "
            />

            <motion.img
              src={img}
              alt="Ambati Devendra - React Frontend Developer"
              loading="eager"
              decoding="async"
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                h-auto
                w-full
                max-w-[550px]
                rounded-lg
                object-contain
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

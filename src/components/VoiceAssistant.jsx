import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionContent = {
  home: `
    Hello, I'm Ambati Devendra, a React Frontend Developer.
    I specialize in building fast, responsive, and dynamic web applications
    using React.js and modern JavaScript.
    I have experience with React.js, JavaScript, Redux Toolkit,
    Tailwind CSS, Bootstrap, REST APIs, and modern frontend development.
    I focus on creating clean, reusable, accessible, and user-friendly
    interfaces.
  `,

  about: `
    About Me.
    I'm a passionate React Frontend Developer with experience in modern
    web development.
    I specialize in creating interactive, high-performance,
    and responsive user interfaces.
    My technical skills include HTML, CSS, JavaScript, React.js,
    Redux Toolkit, Tailwind CSS, Bootstrap, and RESTful APIs.
    I focus on clean code, reusable components, performance optimization,
    and delivering excellent user experiences.
  `,

  experience: `
    Work Experience.
    I worked as a Frontend Developer at Oracliumai,
    where I developed interactive web applications using React.js
    and Tailwind CSS, integrated REST APIs, and worked on responsive
    user interfaces.

    I also worked as a Frontend Developer at Mark Anthony Ventures,
    where I built responsive and dynamic interfaces using React.js,
    JavaScript, Bootstrap, Redux, Context API, and REST APIs.

    Earlier, I worked as a Junior Developer at Ace Web Solutions,
    where I developed responsive websites using HTML, CSS, and JavaScript.
  `,

  technical: `
    Technical Skills.
    My core frontend technologies include React.js, JavaScript,
    TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap,
    Redux Toolkit, React Router, REST APIs, Axios, Git, GitHub,
    Vite, and Firebase.
    I also have experience with responsive design,
    performance optimization, reusable components,
    and modern frontend architecture.
  `,

  services: `
    Services.
    I provide frontend development using React.js,
    responsive web application development,
    reusable component development,
    REST API integration,
    Redux state management,
    authentication and protected routes,
    responsive UI development,
    and frontend performance optimization.
    My goal is to create scalable, modern, and user-friendly
    web applications.
  `,

  projects: `
    My Projects.
    I have worked on several frontend projects.
    
    JustFlip is a real estate portal where users, brokers,
    and contractors can manage properties, generate leads,
    manage profiles, and search properties by location.
    
    I also developed the JustFlip Admin and Builder Dashboard
    with role-based access control, JWT authentication,
    refresh tokens, property management, users, blogs,
    and lead management.
    
    Other projects include the MarkAnthony personal brand website,
    an Astrology project, an LIC management portal,
    and G-Stare Analytics.
  `,

  contact: `
    Thank you for visiting my portfolio.
    If you are interested in frontend development,
    React.js development, or collaboration,
    please feel free to get in touch with me.
    I would be happy to discuss your project or opportunity.
  `,
};

const sectionNames = {
  home: "Home",
  about: "About Me",
  experience: "Experience",
  technical: "Technical Skills",
  services: "Services",
  projects: "Projects",
  contact: "Contact",
};

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");
  const [voices, setVoices] = useState([]);

  const utteranceRef = useRef(null);
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    const loadVoices = () => {
      const availableVoices =
        window.speechSynthesis.getVoices();

      setVoices(availableVoices);
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged =
      loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);


  const getEnglishVoice = () => {
    if (!voices.length) return null;

    return (
      voices.find(
        (voice) => voice.lang === "en-IN"
      ) ||
      voices.find(
        (voice) => voice.lang.startsWith("en")
      ) ||
      voices[0]
    );
  };

  const speak = () => {
    if (!("speechSynthesis" in window)) {
      alert(
        "Your browser does not support text-to-speech."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const text =
      sectionContent[selectedSection];

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voice = getEnglishVoice();

    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;

    window.speechSynthesis.speak(
      utterance
    );
  };

  /* --------------------------------
     Pause
  -------------------------------- */

  const pause = () => {
    if (
      window.speechSynthesis.speaking
    ) {
      window.speechSynthesis.pause();

      setIsPaused(true);
    }
  };

  /* --------------------------------
     Resume
  -------------------------------- */

  const resume = () => {
    if (
      window.speechSynthesis.paused
    ) {
      window.speechSynthesis.resume();

      setIsPaused(false);
    }
  };

  

  /* --------------------------------
     Stop
  -------------------------------- */

  const stop = () => {
    window.speechSynthesis.cancel();

    setIsSpeaking(false);
    setIsPaused(false);
  };

  /* --------------------------------
     Change Section
  -------------------------------- */

  const changeSection = (section) => {
    stop();

    setSelectedSection(section);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#FD6F00]
          text-white
          shadow-[0_0_30px_rgba(253,111,0,0.35)]
        "
      >
        {isSpeaking ? (
          <div className="flex items-center gap-[2px]">
            {[1, 2, 3, 4].map((item) => (
              <motion.span
                key={item}
                animate={{
                  height: ["6px", "18px", "8px"],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  delay: item * 0.1,
                }}
                className="w-[3px] rounded-full bg-white"
              />
            ))}
          </div>
        ) : (
          <span className="text-xl">
            🔊
          </span>
        )}
      </motion.button>

      {/* Voice Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              bottom-24
              right-6
              z-[9998]
              w-[320px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#101722]/95
              p-5
              text-white
              shadow-2xl
              backdrop-blur-xl
              md:w-[360px]
            "
          >
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#FD6F00]">
                  Voice Assistant
                </p>

                <h3 className="mt-1 text-lg font-semibold">
                  Listen to my portfolio
                </h3>
              </div>

              <button
                onClick={() => {
                  stop();
                  setIsOpen(false);
                }}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/5
                  text-gray-400
                  hover:bg-white/10
                  hover:text-white
                "
              >
                ×
              </button>
            </div>

            {/* Section Select */}
            <label className="mb-2 block text-xs text-gray-400">
              Choose a section
            </label>

            <select
              value={selectedSection}
              onChange={(e) =>
                changeSection(e.target.value)
              }
              className="
                mb-5
                w-full
                rounded-xl
                border
                border-white/10
                bg-[#182231]
                px-4
                py-3
                text-sm
                text-white
                outline-none
                focus:border-[#FD6F00]
              "
            >
              {Object.entries(
                sectionNames
              ).map(([key, name]) => (
                <option
                  key={key}
                  value={key}
                  className="bg-[#182231]"
                >
                  {name}
                </option>
              ))}
            </select>

            {/* Speaking Animation */}
            <div
              className="
                mb-5
                flex
                h-20
                items-center
                justify-center
                gap-1
                rounded-xl
                border
                border-white/5
                bg-white/[0.03]
              "
            >
              {[...Array(20)].map(
                (_, index) => (
                  <motion.span
                    key={index}
                    animate={
                      isSpeaking &&
                      !isPaused
                        ? {
                            height: [
                              "6px",
                              `${12 + Math.random() * 30}px`,
                              "8px",
                            ],
                          }
                        : {
                            height: "6px",
                          }
                    }
                    transition={{
                      duration:
                        0.5 +
                        Math.random() *
                          0.5,
                      repeat:
                        isSpeaking &&
                        !isPaused
                          ? Infinity
                          : 0,
                      delay:
                        index * 0.03,
                    }}
                    className="
                      w-[3px]
                      rounded-full
                      bg-[#FD6F00]
                    "
                  />
                )
              )}
            </div>

            {/* Current Section */}
            <p className="mb-4 text-center text-sm text-gray-400">
              {isSpeaking
                ? isPaused
                  ? "Voice paused"
                  : `Explaining ${sectionNames[selectedSection]}...`
                : `Ready to explain ${sectionNames[selectedSection]}`}
            </p>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3">

              {/* Start */}
              {!isSpeaking && (
                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={speak}
                  className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#FD6F00]
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    hover:bg-[#ff8640]
                  "
                >
                  <span>▶</span>
                  Listen
                </motion.button>
              )}

              {/* Pause */}
              {isSpeaking &&
                !isPaused && (
                  <motion.button
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={pause}
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-white/10
                      px-4
                      py-3
                      text-sm
                      font-medium
                      hover:bg-white/15
                    "
                  >
                    <span>⏸</span>
                    Pause
                  </motion.button>
                )}

              {/* Resume */}
              {isSpeaking &&
                isPaused && (
                  <motion.button
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={resume}
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#FD6F00]
                      px-4
                      py-3
                      text-sm
                      font-medium
                    "
                  >
                    <span>▶</span>
                    Resume
                  </motion.button>
                )}

              {/* Stop */}
              {isSpeaking && (
                <motion.button
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={stop}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-500/10
                    text-red-400
                    hover:bg-red-500/20
                  "
                >
                  ■
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAssistant;
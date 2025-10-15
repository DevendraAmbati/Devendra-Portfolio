import React from "react";

const workExperienceData = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Mark Anthony Ventures",
    duration: "Mar 2024 - Present",
    responsibilities: [
      "Built responsive and dynamic user interfaces using React.js, HTML, CSS, Bootstrap, and JavaScript.",
      "Implemented Redux and Context API for efficient state management and integrated RESTful APIs for seamless backend communication.",
      "Optimized performance and scalability using modern frontend tools like Vite and Node.js.",
    ],
  },
  {
    id: 2,
    position: "Junior Developer",
    company: "Bloom IT Solutions",
    duration: "Sep 2023 - Dec 2023",
    responsibilities: [
      "Developed interactive web applications using React.js and Tailwind CSS for modern, responsive UIs.",
      "Integrated REST APIs for dynamic data handling and smooth frontend-backend interaction.",
      "Ensured cross-browser compatibility and mobile responsiveness using clean HTML5 and CSS3.",
      "Collaborated with UI/UX designers and backend developers to enhance application performance.",
    ],
  },
  {
    id: 3,
    position: "Junior Developer",
    company: "Ace Web Solutions",
    duration: "Mar 2023 - Aug 2023",
    responsibilities: [
      "Built and styled responsive websites using HTML, CSS, and JavaScript.",
      "Applied semantic HTML, Flexbox, and CSS Grid for clean, visually appealing layouts.",
      "Added interactivity through JavaScript DOM manipulation and event handling.",
      "Managed version control with Git and completed projects like landing pages, sliders, and responsive menus.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="my-16 px-4 md:px-8 text-white">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
        My Work Experience
      </h2>

      {/* Top two cards side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {workExperienceData.slice(0, 2).map((work) => (
          <div
            key={work.id}
            className="w-full md:w-[90%] p-6 border-t-4 border-[#FD6F00] rounded-2xl 
            bg-[linear-gradient(to_top_left,#B74302,#101722,#101722,#B74302)] 
            backdrop-blur-md shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{work.position}</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              {work.company} | {work.duration}
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-xs md:text-sm">
              {work.responsibilities.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Last card centered */}
      <div className="flex justify-center mt-12">
        <div
          className="w-full md:w-[45%] p-6 border-t-4 border-[#FD6F00] rounded-2xl 
          bg-[linear-gradient(to_top_left,#B74302,#101722,#101722,#B74302)] 
          backdrop-blur-md shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{workExperienceData[2].position}</h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            {workExperienceData[2].company} | {workExperienceData[2].duration}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-xs md:text-sm">
            {workExperienceData[2].responsibilities.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

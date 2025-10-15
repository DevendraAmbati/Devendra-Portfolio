import React from "react";
import img from "../assets/About_me.webp";

const AboutMe = () => {
  return (
    <div id="about-us" className="my-16 px-4 md:px-8">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="px-3">
            <img
              className="object-cover w-full rounded-2xl shadow-lg"
              src={img}
              alt="About Devendra"
            />
          </div>
        </div>

        {/* Content Section */}
        <div>
          <p  className="font-semibold text-3xl md:text-6xl text-white mb-10">
            About Me
          </p>

          <div className="space-y-6 text-white text-sm md:text-base text-justify leading-relaxed">
            <p>
              I’m a passionate <span className="text-[#FD6F00] font-medium">React Frontend Developer</span> with a solid foundation in modern web development. Skilled in HTML, CSS, JavaScript, Bootstrap, and React.js, I specialize in creating interactive, high-performance, and responsive user interfaces.
            </p>

            <p>
              My expertise includes implementing <span className="text-[#FD6F00] font-medium">Context API</span> and <span className="text-[#FD6F00] font-medium">RESTful APIs</span> to build seamless backend integrations. I focus on clean code practices, reusable components, and optimizing performance to deliver engaging user experiences.
            </p>

            <p>
              I’m constantly exploring new technologies to enhance my skill set and bring innovation into my projects. Driven by curiosity and a problem-solving mindset, I aim to craft digital experiences that are not only functional but also visually appealing and intuitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;




{/* <div class="flex w-full flex-col items-start ">
  <div class="group flex gap-x-6">
    <div class="relative">
      <div class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#3D3F94]"></div><span class="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-[#FD6F00] text-slate-800"></span>
    </div>
    <div class="-translate-y-1.5 text-justify pb-8 text-slate-600">
        <div className="flex items-center justify-between w-full mb-4">
      <p class="font-sans text-xl font-bold text-[#FFFFFF] antialiased ">Mark Anthony ventures.</p>
      <p class="font-sans text-xl font-normal text-[#FFFFFF] antialiased ">Mar 2024 – Present</p>
        </div>
      <small class=" font-sans font-normal text-base text-[#FFFFFF] antialiased text-justify">Frontend Developer | React JS Developer Highly skilled and detail-oriented Junior Frontend Developer with strong expertise in React JS. Proficient in creating dynamic and responsive UI components with HTML, CSS, Bootstrap, and JavaScript. Experienced in implementing ContextAuth, building RESTful APIs, and managing seamless backend-frontend integrations to ensure efficient data flow and high-performance applications. Looking to leverage my skills in a fast-paced environment that fosters growth and innovation in frontend development.</small>
    </div>
  </div>
  <div class="group flex gap-x-6">
    <div class="relative">
      <div class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#3D3F94]"></div><span class="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-[#FD6F00] text-slate-800"></span>
    </div>
    <div class="-translate-y-1.5 text-justify pb-8 text-slate-600">
        <div className="flex items-center justify-between w-full mb-4">
      <p class="font-sans text-xl font-bold text-[#FFFFFF] antialiased ">Bloom it solutions.</p>
      <p class="font-sans text-xl font-normal text-[#FFFFFF] antialiased ">May 2023 - Feb 2024</p>
        </div>
      <small class=" font-sans font-normal text-base text-[#FFFFFF] antialiased text-justify">Junior Frontend Developer at Bloom IT Solutions, I developed interactive web applications using React.js and Tailwind CSS. I integrated REST APIs to manage dynamic data and ensured responsive, cross-browser compatible designs. My role involved writing clean HTML5 and CSS code, collaborating with designers and backend teams.</small>
    </div>
  </div>
  <div class="group flex gap-x-6">
    <div class="relative"><span class="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-[#FD6F00] text-slate-800"></span></div>
    <div class="-translate-y-1.5 text-justify pb-8 text-slate-600">
        <div className="flex items-center justify-between w-full mb-4">
      <p class="font-sans text-xl font-bold text-[#FFFFFF] antialiased ">Mark Anthony ventures.</p>
      <p class="font-sans text-xl font-normal text-[#FFFFFF] antialiased ">Jan 2023 - Apr 2023</p>
        </div>
      <small class=" font-sans font-normal text-base text-[#FFFFFF] antialiased text-justify">I am a passionate Junior Front-End Developer with building and styling responsive websites using HTML, CSS, and JavaScript. I have a solid understanding of web page structure, semantic HTML, and modern styling techniques including Flexbox and CSS Grid. With JavaScript, I’ve worked on adding interactivity to web pages through DOM manipulation and event handling. I’m comfortable using tools like Chrome DevTools and Git for version control, and I’ve completed several small projects including landing pages and dynamic components like sliders and responsive menus. I'm a fast learner, always eager to improve my skills and explore modern front-end technologies such as React and Tailwind CSS. My goal is to contribute to clean, user-friendly web experiences while continuously growing as a developer.</small>
    </div>
  </div>
</div> */} 
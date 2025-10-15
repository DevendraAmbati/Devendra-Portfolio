import React from "react";
import Reactjs from "../assets/Frame835.svg";
import webapp from "../assets/Frame836.svg";
import auth from "../assets/Frame837.svg";
import frontend from "../assets/Frame829.svg";

const Services = () => {
  return (
    <section id="services" className="my-16 px-4 md:px-8">
      <h1 className="text-white font-semibold text-lg md:text-4xl text-center mt-10">
        Services
      </h1>

      <div className="md:max-w-3xl mx-auto mt-5 text-center">
        <p className="text-white font-medium text-sm md:text-base">
          I’m a passionate <span className="font-semibold text-[#9aa6ff]">React Frontend Developer</span> 
          with 2.4 years of experience building responsive and dynamic web applications. Skilled in 
          <span className="font-semibold text-[#9aa6ff]"> React.js, Redux, Tailwind CSS, Bootstrap, and RESTful APIs</span>, 
          I specialize in creating modern, engaging, and user-focused interfaces. My goal is to deliver clean, 
          scalable, and high-performance solutions that enhance user experience and meet business goals.
        </p>
      </div>

      <div className="space-y-20 mt-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

        {/* Frontend Development */}
        <ServiceCard 
          img={frontend} 
          title="Frontend Development" 
          description={
            <>
              Building responsive and interactive user interfaces with <span className="font-semibold text-[#9aa6ff]">React.js, HTML5, CSS3, and JavaScript (ES6+)</span>. 
              I focus on delivering pixel-perfect, accessible, and mobile-friendly designs using <span className="font-semibold text-[#9aa6ff]">Tailwind CSS</span> and <span className="font-semibold text-[#9aa6ff]">Bootstrap</span>.
            </>
          } 
        />

        {/* React.js Development */}
        <ServiceCard 
          img={Reactjs} 
          title="React.js Development" 
          description={
            <>
              Developing reusable React components with <span className="font-semibold text-[#9aa6ff]">Redux Toolkit</span>, 
              Context API, and efficient state management. Integrating RESTful APIs to ensure dynamic and seamless user experiences.
            </>
          } 
        />

        {/* Web Application Development */}
        <ServiceCard 
          img={webapp} 
          title="Web Application Development" 
          description={
            <>
              Developing scalable and secure single-page applications (SPAs) with features like <span className="font-semibold text-[#9aa6ff]">Firebase Authentication, Protected Routes</span>, and performance optimization. 
              Ensuring smooth functionality and optimized loading times.
            </>
          } 
        />

        {/* Authentication & Security */}
        <ServiceCard 
          img={auth} 
          title="Authentication & Security" 
          description={
            <>
              Implementing secure login flows with <span className="font-semibold text-[#9aa6ff]">JWT, Firebase, and API-level validation</span>. 
              Ensuring user data privacy and session protection through best practices in React app security.
            </>
          } 
        />

      </div>
    </section>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ img, title, description }) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="w-[calc(100%)] md:w-[60%] bg-[linear-gradient(to_top_left,_#131A2A,_#0F161F)] p-6 rounded-xl border border-[#3E4550] shadow">
      <div className="flex items-center gap-4 mb-3">
        <img src={img} alt={title} className="w-10 h-10 md:w-12 md:h-12"/>
        <h3 className="font-medium text-lg md:text-3xl text-white">{title}</h3>
      </div>
      <p className="text-white text-start">{description}</p>
    </div>
  </div>
);

export default Services;

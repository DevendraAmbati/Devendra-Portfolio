import React from "react";
import justflip from "../assets/justFlip.svg";
import Rnr from "../assets/Rnr.svg";
import Lic from "../assets/Lic.svg";
import Gstare from "../assets/G-stare.svg";
import Markanthony from "../assets/Markanthony.png";
import Dashbord from "../assets/Dashboard.svg";

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
    title: "MarkAnthony ",
    description:
      "A personal brand website with modern UI/UX design, animations, and blog management using React and Tailwind CSS.",
    image: Markanthony,
    link: "https://markanthony.in",
  },
  {
    title: "RNR Project",
    description:
      "Enterprise-grade web dashboard for managing reports, users, and performance analytics using React and Redux Toolkit.",
    image: Rnr,
    link: "#",
  },
  {
    title: "LIC Management Portal",
    description:
      "Insurance management platform featuring policy tracking, client dashboards, and data visualization modules.",
    image: Lic,
    link: "#",
  },
  {
    title: "G-Stare Analytics",
    description:
      "A marketing and analytics platform for tracking campaign performance and engagement in real-time.",
    image: Gstare,
    link: "#",
  },
];


const MyProjects = () => {
  return (
    <section id="projects" className="my-16 px-4 md:px-10">
      <h1 className="text-white font-semibold text-lg md:text-4xl text-center mt-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-transform duration-300 hover:-translate-y-2 h-auto"
          >
            <div className="bg-[linear-gradient(to_top_left,_#131A2A,_#0F161F)] p-3 rounded-xl border border-[#3E4550] shadow hover:shadow-[0_0_20px_#243b55] transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 md:h-52 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#9aa6ff] transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;

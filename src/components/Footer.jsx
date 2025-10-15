import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Footer = ()=>{
    return (
        <>
<footer class="bg-gray-900">
  <div class=" px-6 py-16 lg:px-8 ">
    <div class="xl:grid xl:grid-cols-2 xl:gap-8">
        <div>
        <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Let's build something great together.
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        <div className="grid grid-flow-col justify-start ">
            <a href="" traget="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-white mt-6 hover:text-[#FD6F00] cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/devendraambati" traget="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-white mt-6 ml-4 hover:text-[#FD6F00] cursor-pointer" />
            </a>
        </div>
      </div>
      <div class="mt-16  xl:mt-0">

        <div class="md:grid md:grid-cols-3 md:gap-8">
          <div>
            <h3 class="text-sm/6 font-semibold text-[#FD853A]">Navigation</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#about-us" class="text-sm/6 text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#experience" class="text-sm/6 text-gray-400 hover:text-white">Experience</a>
              </li>
              <li>
                <a href="#services" class="text-sm/6 text-gray-400 hover:text-white">Services</a>
              </li>

            </ul>
          </div>
           <div class="mt-16  md:mt-0">
            <h3 class="text-sm/6 font-semibold text-[#FD853A]">Navigation</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a href="#technical" class="text-sm/6 text-gray-400 hover:text-white">Technical</a>
              </li>
            <li>
                <a href="#projects" class="text-sm/6 text-gray-400 hover:text-white">Projects</a>
              </li>
               <li>
                <a href="#contact" class="text-sm/6 text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div class="mt-10 md:mt-0">
            <h3 class="text-sm/6 font-semibold text-[#FD853A]">Contact</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <p  class="text-sm/6 text-gray-400 hover:text-white">Ambati Devendra</p>
              </li>
            <li>
                <a href="tel:7306885277" class="text-sm/6 text-gray-400 hover:text-white">
    7306885277
  </a>
</li> 
<li>
  <a href="mailto:devendraambati1998@gmail.com" class="text-sm/6 text-gray-400 hover:text-white">
    devendraambati1998@gmail.com
  </a>
</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<footer class="bg-[#121212]">
    <div class=" px-6 py-6 lg:px-8">
        <p className="text-white">Developed by @ Ambati Devendra</p>
    </div>
</footer>
</>
    )
}
export default Footer;
import React from "react";
import img from "../assets/Devendra.webp";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mt-10 my-10 "
      >
        <div className="flex flex-col justify-start items-start gap-4">
          <h1 className="font-semibold text-[#ffffff] text-xl">Hi I am <span className="font-semibold text-2xl text-[#FD6F00]">Ambati Devendra</span></h1>

          <div className="font-bold text-3xl md:text-4xl text-[#ffffff]">
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
          </div>

          <p className="text-sm font-normal text-[#ffffff] text-justify mt-3 max-w-md">
            I specialize in building fast, responsive, and dynamic web applications using React.js and modern JavaScript.  
            With a keen eye for design and user experience, I create interfaces that are not only visually appealing but also intuitive and user-friendly.
            Let's work together to bring your ideas to life on the web!
          </p>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=devendraambati1998@gmail.com&su=Let's%20Work%20Together&body=Hi%20Devendra%2C%0A%0AI'd%20like%20to%20discuss%20a%20project%20opportunity."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-4 py-2 text-lg w-[152px] h-[42px] font-normal text-white bg-[#FD6F00] rounded-lg transition hover:bg-[#ff8640] mt-2">
    Hire Me
  </button>
</a>


        </div>

        <div className="flex justify-center items-center hidden md:block">
          <img
            src={img}
            alt="Devendra"
            className="h-auto w-[1200px] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

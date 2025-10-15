import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const menuItems = [
    { name: "About Us", link: "#about-us" },
    { name: "Experience", link: "#experience" },
    { name: "Services", link: "#services" },
    { name: "Technical", link: "#technical" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full  top-3 px-4 py-3 bg-none mx-auto bg-[#101722]/90  border rounded-lg border-[#dcdbde24] shadow z-[9999]">
      <div className="container flex items-center justify-between mx-auto">
        <a
          href="/"
          className="text-lg font-bold tracking-wide cursor-pointer text-[#CAD1E9] transition"
        >
          DEVENDRA AMBATI
        </a>
                <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-sm font-medium text-[#CAD1E9] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

<div className="hidden lg:flex items-center gap-6">
  <a
    href="https://drive.google.com/file/d/1j42lmHEmL4kQoB2EM9sYwsbA_Wb9uehe/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="relative px-[1px] py-[1px] rounded-lg bg-gradient-to-r from-[#FD6F00] to-[#6A11CB]  transition"
  >
    <span className="block px-4 py-2 text-sm font-semibold text-[#CAD1E9] bg-[#0F172A] rounded-lg">
      Download Resume
    </span>
  </a>
</div>


        {/* Mobile Hamburger */}
        <button
          className="ml-auto h-10 w-10 flex items-center justify-center rounded-md text-[#CAD1E9] hover:bg-white/10 transition lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[10000] bg-[#0B1120] transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-[#CAD1E9] transition"
          onClick={() => setOpen(false)}
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col items-start m-5 gap-2 text-lg font-semibold text-[#CAD1E9]">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="transition" onClick={handleLinkClick}>
                {item.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href="https://drive.google.com/file/d/1j42lmHEmL4kQoB2EM9sYwsbA_Wb9uehe/view?usp=sharing"
              download
              target="_blank"
              onClick={handleLinkClick}
              className="px-4 py-3  text-sm font-semibold text-[#CAD1E9] bg-white/10 rounded-lg transition"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
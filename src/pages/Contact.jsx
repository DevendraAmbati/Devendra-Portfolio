import React from "react";

const Contact = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    if (!email) return alert("Please enter your email!");
    
    // Opens Gmail compose with pre-filled fields
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=devendraambati1998@gmail.com&su=Collaboration%20Request&body=Hi%20Devendra,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20frontend%20development%20opportunity.%0D%0A%0D%0AThanks!%0D%0AFrom:%20${encodeURIComponent(email)}`;
    window.open(gmailURL, "_blank");
  };

  return (
    <section id="contact" className="my-16 px-4 text-center">
      <h1 className="text-white font-semibold text-lg md:text-4xl">
        Let’s Develop Together
      </h1>
      <p className="text-white text-sm md:text-base font-medium max-w-xl mx-auto mt-3">
        I’m a passionate React Frontend Developer with hands-on experience in building responsive,
        dynamic, and user-friendly web applications.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-white border border-[#3E4550] rounded-lg px-4 py-2 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-[#9aa6ff]"
        />
        <button
          onClick={handleSubmit}
          className="px-8 py-2 bg-[#FD6F00] text-white text-lg font-semibold rounded-lg hover:bg-[#e25f00] transition"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";


const KeySkills = () => {
  return (
    <section id="technical" className="my-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Technical Skills */}
        <div>
          <h2 className="text-white font-semibold text-2xl md:text-4xl mb-8">
            Key Skills
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Proficient in HTML5, CSS3, JavaScript (ES6+), and modern frameworks like React.js.</li>
                <li>Experience with state management libraries such as Redux and Context API.</li>
                <li>Skilled in responsive design using Tailwind CSS and Bootstrap.</li>
                <li>Familiarity with RESTful APIs and asynchronous programming using Axios and Fetch.</li>
                <li>Knowledge of version control systems, particularly Git and GitHub.</li>
                <li>Understanding of web performance optimization and SEO best practices.</li>
                <li>Strong problem-solving skills and ability to work in a team environment.</li>
                <li>Excellent communication skills and a keen eye for detail.</li>
            </ul>
        </div>
        </div>
    </section>
    );
};
export default KeySkills;

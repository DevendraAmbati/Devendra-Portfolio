import React from "react";
import ProgressBar from "./ProgressBar";    
import CircularProgressBar from "./CircularProgressBar";

const TechnicalSkills = () => {
  return (
    <section id="technical" className="my-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Technical Skills */}
        <div>
          <h2 className="text-white font-semibold text-2xl md:text-4xl mb-8">
            Technical Skills
          </h2>
          <div className="space-y-6">
            <ProgressBar title="Frontend Development" percentage={90} bgColor="#8E939C" fillColor="#FD853A" />
            <ProgressBar title="SEO Optimization" percentage={85} bgColor="#8E939C" fillColor="#FD853A" />
            <ProgressBar title="API Integration" percentage={95} bgColor="#8E939C" fillColor="#FD853A" />
            <ProgressBar title="Web Performance Optimization" percentage={70} bgColor="#8E939C" fillColor="#FD853A" />
            <ProgressBar title="Cross-Browser Compatibility" percentage={85} bgColor="#8E939C" fillColor="#FD853A" />
            <ProgressBar title="Version Control (Git)" percentage={80} bgColor="#8E939C" fillColor="#FD853A" />
            <ProgressBar title="Responsive Design" percentage={90} bgColor="#8E939C" fillColor="#FD853A" />
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h2 className="text-white font-semibold text-2xl md:text-4xl mb-8">
            Professional Skills
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <CircularProgressBar title="Communication" percentage={90} bgColor="#555" fillColor="#FD853A" />
            <CircularProgressBar title="Team Work" percentage={85} bgColor="#555" fillColor="#4ade80" />
            <CircularProgressBar title="Project Management" percentage={75} bgColor="#555" fillColor="#3b82f6" />
            <CircularProgressBar title="Creativity" percentage={70} bgColor="#555" fillColor="#facc15" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;

import React from "react";

const skillsContent = [
  { skillClass: "p89", skillPercent: "89", skillName: "AGILE" },
  { skillClass: "p70", skillPercent: "70", skillName: "PROJECT MANAGEMENT" },
  { skillClass: "p85", skillPercent: "85", skillName: "SOFTWARE ARCHITECTURE" },
  { skillClass: "p80", skillPercent: "80", skillName: "PYTHON" },
  { skillClass: "p70", skillPercent: "70", skillName: "PHP" },
  { skillClass: "p85", skillPercent: "85", skillName: "TYPESCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "SQL" },
  { skillClass: "p95", skillPercent: "95", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;

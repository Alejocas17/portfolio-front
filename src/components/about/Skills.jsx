import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "NODEJS" },
  { skillClass: "p80", skillPercent: "80", skillName: "PYTHON" },
  { skillClass: "p80", skillPercent: "80", skillName: "DOCKER" },
  { skillClass: "p75", skillPercent: "75", skillName: "AZURE" },
  { skillClass: "p75", skillPercent: "75", skillName: "HTML" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p75", skillPercent: "75", skillName: "SQL" },
  { skillClass: "p70", skillPercent: "70", skillName: "REACT" },
  { skillClass: "p65", skillPercent: "65", skillName: "AZURE" },
  { skillClass: "p65", skillPercent: "65", skillName: "AWS" },


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

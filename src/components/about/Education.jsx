import React from "react";

const educationContent = [
  {
    year: "2016",
    degree: "SOFTWARE PROGRAMMING TECHNICIAN",
    institute: "SENA",
    details: `Adquired basic programming skills with Java, SQL, HTML, CSS`,
  },
  {
    year: "2022",
    degree: "ELECTRONIC ENGINEERING DEGREE",
    institute: "UNIVERSIDAD DEL VALLE",
    details: `Adquired abilities in Math, Physics, Electronics, Programming and Problem Solving.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;

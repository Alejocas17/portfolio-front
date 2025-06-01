import React from "react";

const experienceContent = [
  {
    year: "   2022",
    position: " Backend Developer",
    compnayName: "Freelance",
    details: `  I played a key role in the development of a mobile application built with Kotlin in Android Studio, backed by a Node.js 
    API and PostgreSQL database. I was responsible for implementing core backend services and endpoints, configuring and deploying the 
    backend and database using AWS (EC2, RDS, Route 53) and Railway. Additionally, I contributed to frontend functionality and managed 
    domain and SSL configuration. My contributions were essential to the success of the project, demonstrating strong expertise in mobile 
    and backend development.`,
  },
  {
    year: "2023 - Present",
    position: " Support Engineer",
    compnayName: "Universidad del Cauca",
    details: `I was responsible for maintaining and managing application servers and tools related to an Electronic Document Management System (EDMS).
    My work included server provisioning and installation, deployment and security testing, and ongoing production maintenance. I also supported 
    the implementation of digital and electronic signature systems, provided technical documentation and reporting, and assisted with project
    management and support tasks within the IT division.`,
  },
  {
    year: "2023 - Present",
    position: "Full Stack Developer",
    compnayName: "Teleperformance",
    details: `Developed and maintained backend services using Python (FastAPI) and Node.js (express and NestJS). Created
    dynamic and interactive frontends with JavaScript, TypeScript, Three.js, React, Next.js, and Tailwind CSS. Integrated
    PostgreSQL and SQL Server databases, utilizing both ORM and stored procedures for efficient data management.
    Containerized applications and managed builds using Docker, deploying to Azure via Docker containers, FTP, and
    static site hosting on IIS. handled full project life cycles with a focus on client business needs and objectives. Worked
    across all development stages, from initial concept to deployment and ongoing support.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

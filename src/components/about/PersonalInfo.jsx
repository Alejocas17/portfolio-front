import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Alejandro", hasColor: "" },
  { meta: "last name", metaInfo: "Castillo", hasColor: "" },
  { meta: "Age", metaInfo: "25 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Colombian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Popayán, Colombia", hasColor: "" },
  { meta: "phone", metaInfo: "+573168213659", hasColor: "" },
  { meta: "Email", metaInfo: "alejocas17@hotmail.com", hasColor: "" },
  { meta: "github", metaInfo: "alejocas17", hasColor: "" },
  { meta: "langages", metaInfo: "Spanish, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

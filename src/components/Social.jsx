import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://web.facebook.com/Alejandro.Castillo.17",
  },
  { iconName: "fa fa-github", link: "https://github.com/alejocas17" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/alejandro-antonio-castillo-gil-90a770173",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

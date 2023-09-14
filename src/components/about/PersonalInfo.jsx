import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Vladimir" },
  { meta: "last name", metaInfo: "Vostrikov" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Los Angeles CA, US" },
  { meta: "phone", metaInfo: "+1(951) 224-4109" },
  { meta: "Email", metaInfo: "manheeusa@gmail.com" },
  { meta: "Telegram", metaInfo: "+19512244109" },
  { meta: "langages", metaInfo: "Russian, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
      <li>LinkedIn: <a href="https://www.linkedin.com/in/vladimir-vostrikov-7944b040/"><i className="fa fa-linkedin-square" style={{fontSize: "2rem"}}></i></a></li>
    </ul>
  );
};

export default PersonalInfo;

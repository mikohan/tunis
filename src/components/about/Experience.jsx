import React from "react";

const experienceContent = [
  {
    year: "   2018 - 2022",
    position: " CEO",
    compnayName: "Angara Digital",
    details: `  Managed all business processes in the company`,
  },
  {
    year: "2015 - 2018",
    position: " Software Architecture Engineer & Marketing Director",
    compnayName: "Angara Digital",
    details: ` Managed Software Dewelopment and Marketing teams`,
  },
  {
    year: "2007 - 2015",
    position: " Marketologist & Web Developer",
    compnayName: "Angara",
    details: `Developed company's  web sites and managed online marketing`,
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

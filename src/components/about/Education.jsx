import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "SELF EDUCATION",
    institute: "SELF EDUCATION",
    details: `HAVE TAKEN MORE THEN 100 courses and read over 300 books in programming, marketing and management, etc`,
  },
  {
    year: "1993",
    degree: "MASTER DEGREE",
    institute: "Irkutsk National Research Technical University",
    details: `SPECIALITY: ELECTRICAL & MECHANICAL ENGINEER`,
  },
  {
    year: "1988",
    degree: "HIGH SCHOOL",
    institute: "CHILCHIGIR HIGH SCHOOL",
    details: `  School in Siberia`,
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

import React from "react";
interface studentDescription {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  grades: string[];
  skill: string;
}
const StudentsDescription: React.FC<studentDescription> = ({
  firstName,
  lastName,
  email,
  company,
  grades,
  skill,
}) => {
  return (
    <div className="student-description">
      <h1>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
      <div className="student-info">
        <div className="student-details">
          <p>Email: </p>
          <p>{email}</p>
        </div>
        <div className="student-details">
          <p>Company: </p>
          <p>{company}</p>
        </div>
        <div className="student-details">
          <p>Skill: </p>
          <p>{skill}</p>
        </div>
        <div className="student-details">
          <p>Average: </p>
          <p>
            {`${
              grades.map((i) => Number(i)).reduce((a, b) => a + b, 0) /
              grades.length
            }%`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentsDescription;

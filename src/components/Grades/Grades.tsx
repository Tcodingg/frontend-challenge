import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

interface props {
  grades: string[];
  id: string;
  displayGrades?: string;
}
const Grades: React.FC<props> = ({ grades, id }) => {
  // const [isExpanded, setIsExpenaded] = useState(true);

  // keep track of clicked buttons  or check button if its been checked
  // const { expand } = useSelector(
  //   (state: RootState) => state.expandBtnReducer
  // );

  return (
    <div
      className="grades"
      style={
        {
          // display: expand && btn_id === id ? "block" : "none",
        }
      }
    >
      {grades &&
        grades.map((grade, i) => {
          return (
            <div key={i} style={{ display: "flex", gap: "10px" }} id={id}>
              <p>Test {i + 1}:</p>
              <p>{grade}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Grades;

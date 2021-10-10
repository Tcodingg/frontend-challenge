import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

interface props {
  grades: string[];
  id: string;
  displayGrades?: string;
}
const Grades: React.FC<props> = ({ grades, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { isExpand, id: btnId } = useSelector(
    (state: RootState) => state.expandBtnReducer
  );

  useEffect(() => {
    function expandBtn() {
      if (id === btnId) {
        setIsExpanded((preVal) => !preVal);
      }
    }
    expandBtn();
  }, [btnId, id, isExpand]);
  return (
    <div className="grades">
      {grades &&
        grades.map((grade, i) => {
          return (
            <div
              key={i}
              style={{
                display: isExpanded ? "flex" : "none",
              }}
              id={id}
            >
              <p>Test {i + 1}:</p>
              <p style={{ marginLeft: "5px" }}>{grade}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Grades;

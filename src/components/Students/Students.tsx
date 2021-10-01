import React, { useEffect, useState } from "react";
import "./Student.css";

import { fetchStudentData } from "../../redux/actions/fetchActions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Grades from "../Grades/Grades";
import TagsInput from "../TagsInput/TagsInput";
import ExpandBtn from "../Buttons/ExpandBtn";
const Students: React.FC = () => {
  // button expand =========================
  const [isExpanded, setIsExpanded] = useState(false);
  const handleBtn = (id: string) => {
    setIsExpanded((preVal) => !preVal);
    console.log(id);
  };

  // Fetching data from the api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudentData());
  }, [dispatch]);

  const [input, setInput] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const {
    studentReducer: { students },
    tagReducer: { tag },
  } = useSelector((state: RootState) => state);
  // input value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const searchByTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTag(e.target.value.trim());
  };

  return (
    <div className="students">
      <div className="students-container">
        {/* filter by input starts */}

        <div className="search">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search by name"
          />
        </div>

        {/* filter by input ends */}
        {/* filter by tag stats */}

        <div className="search">
          <input
            onChange={searchByTag}
            type="text"
            placeholder="Search by tag"
          />
        </div>
        {/* filter by tag ends */}
        <div>
          {students &&
            students
              .filter(({ firstName, lastName }) => {
                if (input === "") {
                  return { firstName, lastName };
                } else if (
                  firstName
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase()) ||
                  lastName
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase())
                ) {
                  return { firstName, lastName };
                }
              })
              .map(
                ({
                  id,
                  pic,
                  firstName,
                  lastName,
                  email,
                  company,
                  skill,
                  grades,
                  tag,
                }) => {
                  return (
                    <div key={id} className="students-wrapper">
                      <div className="student-content">
                        <div className="student-data-container">
                          <div className="student-data">
                            <div className="img-container">
                              <img src={pic} alt="loading..." />
                            </div>
                            <div className="student-data-wrapper">
                              <div className="student-description">
                                <h1>
                                  {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
                                </h1>
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
                                        grades
                                          .map((i) => Number(i))
                                          .reduce((a, b) => a + b, 0) /
                                        grades.length
                                      }%`}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="tag-input-grades">
                                <Grades grades={grades} id={id} />
                                <div className="display-tags">
                                  {/* {tag &&
                                    tag.map((tags, i) => {
                                      if (tags.id === id) {
                                        return <p key={i}>{tags.newTag}</p>;
                                      }
                                    })} */}
                                  {/* {tag && <p>{tag}</p>} */}
                                </div>
                                <TagsInput id={id} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <ExpandBtn id={id} />
                      </div>
                    </div>
                  );
                }
              )}
        </div>
      </div>
    </div>
  );
};

export default Students;

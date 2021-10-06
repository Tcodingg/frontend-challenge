import React, { useEffect, useState } from "react";
import "./Student.css";

import { fetchStudentData } from "../../redux/actions/fetchActions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Grades from "../Grades/Grades";
import TagsInput from "../TagsInput/TagsInput";
import ExpandBtn from "../Buttons/ExpandBtn";
import { BiCoinStack } from "react-icons/bi";

interface filter {
  id: string;
  tags?: string[];
  city: string;
  company: string;
  email: string;
  firstName: string;
  grades: string[];
  lastName: string;
  pic: string;
  skill: string;
  average: string;
}
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
  const [searchTag, setSearchTag] = useState<string>("");
  const {
    studentReducer: { students },
    tagReducer: { tag: allTags },
  } = useSelector((state: RootState) => state);
  // input value

  // combine students and their tags

  let data = students.map((t1) => ({
    ...t1,
    ...allTags.find((t2) => t2.id === t1.id),
  }));

  const [filteredData, setFilteredData] = useState<filter[]>([]);

  useEffect(() => {
    //combine merge tags with students.
    setFilteredData(data);
  }, [students, allTags]);

  // search by tags
  const [tagsOnly, setTagsOnly] = useState([]);
  useEffect(() => {
    function filterByTag() {
      if (searchTag === "") {
        setFilteredData(data);
      } else if (searchTag.length > 0) {
        setFilteredData(() =>
          data.filter((student) =>
            student.tags?.some((tag) => tag.includes(searchTag))
          )
        );
      }
    }
    filterByTag();
  }, [searchTag]);

  // filter by first and last name

  useEffect(() => {
    function filterByName() {
      filteredData.filter(({ firstName, lastName }) => {
        if (input === "") {
          return { firstName, lastName };
        } else if (
          firstName.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
          lastName.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        ) {
          return { firstName, lastName };
        }
      });
    }
    filterByName();
  }, [input]);

  //==================== filter data ends =======================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const searchByTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTag(e.target.value);
  };

  return (
    <div className="students">
      <div className="students-container">
        <div className="search">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search by name"
          />
        </div>

        <div className="search">
          <input
            onChange={searchByTag}
            type="text"
            placeholder="Search by tag"
          />
        </div>

        <div>
          {filteredData.map(
            ({
              id,
              pic,
              firstName,
              lastName,
              email,
              company,
              skill,
              grades,
              tags,
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
                              {tags &&
                                tags.map((tags, i) => {
                                  if (id) {
                                    return <p key={i}>{tags}</p>;
                                  }
                                })}
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

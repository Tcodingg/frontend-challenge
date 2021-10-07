import React, { useEffect, useState } from "react";
import "./Student.css";

import { fetchStudentData } from "../../redux/actions/fetchActions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Grades from "../Grades/Grades";
import AddTags from "../AddTags/AddTags";
import ExpandBtn from "../Buttons/ExpandBtn";
import StudentsDescription from "../Students Description/StudentsDescription";
import DisplayTags from "../DisplayTags/DisplayTags";

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
      if (input === "") {
        setFilteredData(data);
      } else if (input.length > 0) {
        setFilteredData(() =>
          data.filter(
            (student) =>
              student.firstName.toLowerCase().includes(input.toLowerCase()) ||
              student.lastName.toLowerCase().includes(input.toLowerCase())
          )
        );
      }
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
                          <StudentsDescription
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                            company={company}
                            grades={grades}
                            skill={skill}
                          />
                          <div className="tag-input-grades">
                            <Grades grades={grades} id={id} />
                            <DisplayTags tags={tags} id={id} />
                            <AddTags id={id} />
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

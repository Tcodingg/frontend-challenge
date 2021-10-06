import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import { addTag } from "../../redux/actions/callToActions";

interface props {
  id: string;
}
type tagsType = {
  id: string;
  newTag: string;
};
const TagsInput: React.FC<props> = ({ id }) => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<tagsType>({
    newTag: "",
    id: "",
  });
  const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id: tdId, value } = e.target;
    setTags({
      newTag: value,
      id: tdId,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      dispatch(addTag(tags));

      // setTags([...tags, newTag]);
      setTags({
        newTag: "",
        id: "",
      });
    }
  };

  // const { tagReducer } = useSelector((state: RootState) => state);

  // console.log(tagReducer, "this is tags log");

  return (
    <div className="tags-input-container">
      <input
        onChange={handleTag}
        onKeyPress={handleKeyPress}
        className="enter-tag"
        type="text"
        placeholder="Add a tag"
        id={id}
        value={tags.id === id ? tags.newTag : ""}
      />
    </div>
  );
};

export default TagsInput;

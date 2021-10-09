import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTag } from "../../redux/actions/callToActions";
import "./AddTags.css";

interface props {
  id: string;
}
type tagsType = {
  id: string;
  newTag: string;
};
const AddTags: React.FC<props> = ({ id }) => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<tagsType>({
    newTag: "",
    id: "",
  });
  const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setTags({
      newTag: value,
      id,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      dispatch(addTag(tags));
      setTags({
        newTag: "",
        id: "",
      });
    }
  };

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

export default AddTags;

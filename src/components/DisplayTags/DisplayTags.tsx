import React from "react";
import "./displayTags.css";
interface tags {
  tags: string[] | undefined;
  id: string;
}
const DisplayTags: React.FC<tags> = ({ tags, id }) => {
  return (
    <div className="display-tags">
      {tags &&
        tags.map((tags, i) => {
          if (id) {
            return <p key={i}>{tags}</p>;
          }
        })}
    </div>
  );
};

export default DisplayTags;

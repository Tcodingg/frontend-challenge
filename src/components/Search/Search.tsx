import React from "react";
import "./Search.css";

export const Search: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
  };
  return (
    <div className="search">
      <input onChange={handleChange} type="text" placeholder="Search by name" />
    </div>
  );
};

export default Search;

import React from "react";
import "./Search.css";
interface searchInterface {
  value: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<searchInterface> = ({
  handleChange,
  value,
  placeholder,
}) => {
  return (
    <div className="search">
      <input
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        value={value}
        data-testid="search"
      />
    </div>
  );
};

export default Search;

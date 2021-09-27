import React from "react";
import Students from "./components/Students/Students";
import "./index.css";
import Search from "./components/Search/Search";

const App: React.FC = () => {
  return (
    <div>
      <Search />
      <Students />
    </div>
  );
};

export default App;

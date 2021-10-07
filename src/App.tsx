import React from "react";
import Students from "./components/Students/Students";
import "./index.css";
import "./app.css";
import Search from "./components/Search/Search";

const App: React.FC = () => {
  return (
    <div className="container">
      <Search />
      <Students />
    </div>
  );
};

export default App;

import React from "react";
import Students from "./components/Students/Students";
import "./index.css";
import "./app.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Students />
    </div>
  );
};

export default App;

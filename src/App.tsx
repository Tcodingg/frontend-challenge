import React from "react";
import Students from "./components/Students/Students";
import "./index.css";
import "./app.css";
import Search from "./components/Search/Search";
import Container from "./components/Container/Container";

const App: React.FC = () => {
  return (
    <div className="app">
      <Container />
    </div>
  );
};

export default App;

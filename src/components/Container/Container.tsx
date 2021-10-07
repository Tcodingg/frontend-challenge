import Students from "../Students/Students";
import Search from "../Search/Search";
import "./container.css";
const Container: React.FC = () => {
  return (
    <div className="container">
      <Search />
      <Students />
    </div>
  );
};

export default Container;

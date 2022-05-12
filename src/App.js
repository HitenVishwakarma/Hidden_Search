import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  const searchHandler = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  return (
    <div>
      <h1>Hidden Search</h1>
      <div className={`${isActive ? "search active" : "search"}`}>
        <input className="input" type="text" placeholder="Type to search..." />
        <button className="btn" onClick={searchHandler}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default App;

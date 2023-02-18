import "../index.css";
import { GoSearch } from "react-icons/go";
import { useState, useEffect, useRef } from "react";

function SearchBar() {
  const [isActive, setIsActive] = useState(false);
  const _input = useRef();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== _input.current) {
        setIsActive(false);
      }
    });
  }, []);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={`form ${isActive && "form-active"}`}>
        <button onClick={handleClick}>
          <GoSearch />
        </button>
        <input ref={_input} onFocus={handleFocus} placeholder="search"></input>
      </form>
    </div>
  );
}

export default SearchBar;

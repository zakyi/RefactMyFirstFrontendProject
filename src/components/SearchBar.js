import "../index.css";
import { GoSearch } from "react-icons/go";
import { useState, useEffect, useRef } from "react";
import { setSearchTerm } from "../store";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [term, setTerm] = useState("");
  const _input = useRef();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== _input.current) {
        setIsActive(false);
      }
    });
  }, []);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(term));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`form ${isActive && "form-active"}`}
      >
        <button>
          <GoSearch />
        </button>
        <input
          value={term}
          onChange={handleChange}
          ref={_input}
          onFocus={handleFocus}
          placeholder="search"
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;

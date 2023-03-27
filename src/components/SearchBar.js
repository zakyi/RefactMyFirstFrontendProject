import "../index.css";
import { GoSearch } from "react-icons/go";
import { useState, useEffect, useRef } from "react";
import { setSearchTerm } from "../store";
import { useDispatch } from "react-redux";
import Hint from "./Hint";
import { DEBOUNCE_DELAY } from "../static/config";
import { useHelperHook } from "../hooks/useHelperHook";

let searchKeyWord = ["wallpaper", "anime", "culture", "nature"];
const searchKeyWordTest = [
  "water",
  "acdemic",
  "color",
  "navigate",
  "wall",
  "animation",
  "cultural conflict",
  "nav bar",
];
searchKeyWord = searchKeyWord.concat(searchKeyWordTest);

function SearchBar() {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [term, setTerm] = useState("");
  const [hints, setHints] = useState([]);
  const _input = useRef();
  console.log("SearchBar Rerender");
  const { debouce } = useHelperHook();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== _input.current) {
        setIsActive(false);
      }
    });
  }, []);

  useEffect(() => {
    console.log(hints);
  }, [hints.length]);

  const showHint = function (term) {
    console.log(term);
    setHints(searchKeyWord.filter((keyword) => keyword.includes(term)));
    if (term === "") setHints([]);
  };

  const laterShowHint = debouce(showHint, DEBOUNCE_DELAY);

  const handleChange = (e) => {
    setTerm(e.target.value);
    /**
     * 添加防抖功能
     */
    laterShowHint(e.target.value);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(term));
  };

  const handleClick = (e) => {
    const term = e.target
      .closest(".hint-item")
      .querySelector(".hint-content").textContent;
    console.log(term);
    dispatch(setSearchTerm(term));
  };

  return (
    <div className="search-bar-container">
      <form
        onSubmit={handleSubmit}
        className={`form ${isActive && "form-active"}`}
      >
        <button>
          <GoSearch />
        </button>
        <input
          value={term}
          autoComplete="on"
          onChange={handleChange}
          ref={_input}
          onFocus={handleFocus}
          placeholder="search"
        ></input>
        <Hint hints={hints} handleClick={handleClick} />
      </form>
    </div>
  );
}

export default SearchBar;

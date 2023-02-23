import { GoSearch } from "react-icons/go";

function Hint({ hints, handleClick }) {
  const content = hints.map((hint) => {
    return (
      <li key={hint} className="hint-item" onClick={handleClick}>
        <GoSearch /> <div className="hint-content">{hint}</div>
      </li>
    );
  });

  return <ul className="hint-container">{content}</ul>;
}
export default Hint;

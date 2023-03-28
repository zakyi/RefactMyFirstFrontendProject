import { GoSearch } from "react-icons/go";
import Link from "./Link";

function Hint({ hints }) {
  const content = hints.map((hint) => {
    return (
      <li key={hint} className="hint-item">
        <GoSearch />{" "}
        <div className="hint-content">
          <Link key={hint} label={hint} path={"/" + hint} />
        </div>
      </li>
    );
  });

  return <ul className="hint-container">{content}</ul>;
}
export default Hint;

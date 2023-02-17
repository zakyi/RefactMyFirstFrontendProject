import { useDispatch } from "react-redux";
import { setCurrentPath } from "../store";

function Link({ label, path }) {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    window.history.pushState({}, "", path);
    dispatch(setCurrentPath(path));
  };

  return (
    <a href={path} onClick={handleClick}>
      {label}
    </a>
  );
}

export default Link;

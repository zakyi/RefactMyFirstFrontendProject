import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Route({ children, path }) {
  const { currentPath } = useSelector((state) => {
    return state.page;
  });

  if (currentPath === path) {
    return <div>{children}</div>;
  }
  return null;
}

export default Route;

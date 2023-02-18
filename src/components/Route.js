import { useSelector } from "react-redux";

/*
 * @param {any} { children, path }
 * @param {string} path: 此变量和pageSlice中的currentPath比较，从而选择是否展示children
 * @returns
 * */
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

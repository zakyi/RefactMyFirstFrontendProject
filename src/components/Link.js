import { useDispatch } from "react-redux";
import { setCurrentPath } from "../store";

function Link({ label, path, classes }) {
  const dispatch = useDispatch();

  /**
   * 地址栏更新：使用window.history.pushState手动更新地址栏
   * 页面刷新：使用dispatch(setCurrentPath(path))手动更新pageSlice的状态，从而刷新页面
   * @param {*} event
   * @returns
   */
  const handleClick = (event) => {
    //如果用户按住ctrl或者meta(mac电脑的ctrl), 就不更新当前页面，会跳出新的标签栏
    if (event.ctrlKey || event.metaKey) return;
    event.preventDefault();

    window.history.pushState({}, "", path);
    dispatch(setCurrentPath(path));
  };

  return (
    <a href={path} onClick={handleClick} className={classes}>
      {label}
    </a>
  );
}

export default Link;

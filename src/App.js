import MainPage from "./pages/MainPage";
import { setCurrentPath } from "./store";
import { useEffect } from "react";
import Route from "./components/Route";
import ProfilePage from "./pages/ProfilePage";
import WallPaperPage from "./pages/WallPaperPage";
import Header from "./components/Header";
import { useDispatch } from "react-redux";

/*
 *
 *
 * @returns
 * */
function App() {
  const dispatch = useDispatch();

  /**
   *  实现route功能
   *  当用户点击浏览器后退或前进按钮时，触发popstate事件，
   *  地址栏更新：浏览器自动更新地址栏
   *  页面刷新：手动使用setCurrentPath更新pageSlice中的状态，从而刷新整个页面
   */
  useEffect(() => {
    const handler = () => {
      dispatch(setCurrentPath(window.location.pathname));
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  return (
    <div className="App">
      <Header />
      <Route path="/">
        <MainPage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/wallpaper">
        <WallPaperPage />
      </Route>
    </div>
  );
}

export default App;

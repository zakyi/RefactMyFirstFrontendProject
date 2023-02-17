import MainPage from "./pages/MainPage";
import { setCurrentPath } from "./store";
import { useEffect } from "react";
import Route from "./components/Route";
import ProfilePage from "./pages/ProfilePage";
import WallPaperPage from "./pages/WallPaperPage";
import Header from "./components/Header";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

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

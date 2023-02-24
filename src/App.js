import MainPage from "./pages/MainPage";
import { setCurrentPath } from "./store";
import { useEffect, useState } from "react";
import Route from "./components/Route";
import ProfilePage from "./pages/ProfilePage";
import WallPaperPage from "./pages/WallPaperPage";
import AnimePage from "./pages/AnimePage";
import CulturePage from "./pages/CulturePage";
import NaturePage from "./pages/NaturePage";
import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";
import ImageItem from "./components/ImageItem";
import { setModalVisible } from "./store";
import { useImageHook } from "./hooks/useImageHook";

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

  /**
   * Modal 相关
   */
  const { likes, collections } = useSelector((state) => state.userData);
  const { handleAdd, handleLike } = useImageHook();
  const {
    modalVisible,
    modalImageId,
    modalImagePath,
    modalImageWidth,
    modalImageHeight,
  } = useSelector((state) => state.modal);

  const onClose = () => {
    dispatch(setModalVisible(false));
  };

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
      <Route path="/nature">
        <NaturePage />
      </Route>
      <Route path="/anime">
        <AnimePage />
      </Route>
      <Route path="/culture">
        <CulturePage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LogInPage />
      </Route>
      {modalVisible && (
        <Modal onClose={onClose}>
          <ImageItem
            handleLike={handleLike}
            handleAdd={handleAdd}
            key={modalImageId}
            image={{
              id: modalImageId,
              path: modalImagePath,
              width: modalImageWidth,
              height: modalImageHeight,
            }}
            likes={likes}
            collections={collections}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;

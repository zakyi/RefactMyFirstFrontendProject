import { useState, useEffect } from "react";
import { useUserActionMutation } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setUserData, getUserData } from "../store";

function useImageHook() {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [imageId, setImageId] = useState("");
  const [sendUserAction, sendUserActionResults] = useUserActionMutation();
  const { isLoggedIn, token, email, likes, collections } = useSelector(
    (state) => state.userData
  );

  /**
   * 监听请求结果的变化，成功就更新用户的state，从而更新页面状态
   */
  useEffect(() => {
    if (sendUserActionResults.isSuccess) {
      console.log(sendUserActionResults.data);
      const { email, collections, likes, token, userName } =
        sendUserActionResults.data;
      dispatch(setUserData({ email, collections, likes, token, userName }));
      dispatch(getUserData());
    } else if (sendUserActionResults.isError) {
      console.log(sendUserActionResults);
    }
  }, [sendUserActionResults.isLoading]);

  /**
   * 用户点击like和add时会更新imageId和type，useEffect监听更新操作，向服务端发送like或add请求
   */
  useEffect(() => {
    if (imageId !== "" && type !== "") {
      sendUserAction({ imageId, userEmail: email, token, type });
    }
  }, [imageId, type]);

  const handleLike = (e) => {
    if (!isLoggedIn) return;
    setType("likes");
    setImageId(
      e.target.closest(".image-buttons-container").querySelector(".image")
        .dataset.imageId
    );
  };
  const handleAdd = (e) => {
    if (!isLoggedIn) return;
    setType("collections");
    setImageId(
      e.target.closest(".image-buttons-container").querySelector(".image")
        .dataset.imageId
    );
  };

  return { handleAdd, handleLike };
}

export { useImageHook };

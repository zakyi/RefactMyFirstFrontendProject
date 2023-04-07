import { useState, useEffect } from "react";
import { useUserActionMutation } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setUserData, getUserData, setLikesOrCollections } from "../store";

function useImageHook() {
  const dispatch = useDispatch();
  // const [type, setType] = useState("");
  // const [imageId, setImageId] = useState("");
  const [userAction, setUserAction] = useState({ type: "", imageId: "" });
  const [sendUserAction, sendUserActionResults] = useUserActionMutation();
  const { isLoggedIn, token, email, likes, collections } = useSelector(
    (state) => state.userData
  );

  /**
   * 监听请求结果的变化，成功就更新用户的state，从而更新页面状态
   */
  useEffect(() => {
    if (sendUserActionResults.isSuccess) {
      // const { emailData, collectionsData, likesData, tokenData, userNameData } =
      //   sendUserActionResults.data;
      // dispatch(
      //   setUserData({
      //     emailData,
      //     collectionsData,
      //     likesData,
      //     tokenData,
      //     userNameData,
      //   })
      // );
      console.log("userAction success", userAction);
      setLikesOrCollections(userAction);
    } else if (sendUserActionResults.isError) {
      console.log(sendUserActionResults);
    }
  }, [sendUserActionResults.isLoading]);

  /**
   * 用户点击like和add时会更新imageId和type，useEffect监听更新操作，向服务端发送like或add请求
   */
  useEffect(() => {
    if (userAction.imageId !== "" && userAction.type !== "") {
      sendUserAction({
        imageId: userAction.imageId,
        userEmail: email,
        token,
        type: userAction.type,
      });
    }
  }, [userAction.imageId, userAction.type]);

  const handleLike = (e) => {
    if (!isLoggedIn) return;
    setUserAction({
      type: "likes",
      imageId: e.target
        .closest(".image-buttons-container")
        .querySelector(".image").dataset.imageId,
    });
    // setType("likes");
    // setImageId(
    //   e.target.closest(".image-buttons-container").querySelector(".image")
    //     .dataset.imageId
    // );
  };
  const handleAdd = (e) => {
    if (!isLoggedIn) return;
    setUserAction({
      type: "collections",
      imageId: e.target
        .closest(".image-buttons-container")
        .querySelector(".image").dataset.imageId,
    });
    // setType("collections");
    // setImageId(
    //   e.target.closest(".image-buttons-container").querySelector(".image")
    //     .dataset.imageId
    // );
  };

  return { handleAdd, handleLike };
}

export { useImageHook };

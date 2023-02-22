import ImageItem from "./ImageItem";
import "./ImageList.css";
import { useSelector } from "react-redux";
import { setModalContent, setSearchTerm, useFetchImagesQuery } from "../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useUserActionMutation } from "../store";
import { setUserData, getUserData } from "../store";
import { setModalVisible } from "../store";

function ImageList({ term }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (term !== undefined) {
      dispatch(setSearchTerm(term));
      console.log(term);
    }
  }, []);
  const { searchTerm } = useSelector((state) => state.search);
  const { data, error, isLoading } = useFetchImagesQuery(searchTerm);
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
      e.target.closest(".image-container").querySelector(".image").dataset
        .imageId
    );
  };
  const handleAdd = (e) => {
    if (!isLoggedIn) return;
    setType("collections");
    setImageId(
      e.target.closest(".image-container").querySelector(".image").dataset
        .imageId
    );
  };

  /**
   * 获取网页宽度
   */
  let width = window.innerWidth;
  const [columns, setColumns] = useState(
    width < 746 ? 1 : width < 1024 ? 2 : width >= 1024 ? 3 : 4
  );
  /**
   * 每次resize获取网页宽度，动态改变grid布局中的column
   */
  const handleChangeWidth = () => {
    width = window.innerWidth;
    setColumns(width < 746 ? 1 : width < 1024 ? 2 : width >= 1024 ? 3 : 4);
  };
  useEffect(() => {
    window.addEventListener("resize", handleChangeWidth);
    return () => window.removeEventListener("resize", handleChangeWidth);
  }, []);

  if (!data) return;

  /**
   * 获取图片array，平均分成三份，也就是长度为三的数组content
   */
  let results = Array.from(data.results);
  const content = [];
  for (let i = 0; i < columns; i++) {
    const deleteCount = parseInt(results.length / (columns - i));
    content.push(results.splice(0, deleteCount));
  }

  /**
   * Modal相关
   */
  const onOpenModal = (e) => {
    dispatch(setModalVisible(true));
    const { imageId, imagePath } = e.target
      .closest(".image-container")
      .querySelector(".image").dataset;
    const content = (
      <div>
        <ImageItem
          handleLike={handleLike}
          handleAdd={handleAdd}
          key={imageId}
          image={{ id: imageId, path: imagePath }}
          likes={likes}
          collections={collections}
          onOpenModal={onOpenModal}
        />
      </div>
    );
    dispatch(setModalContent(content));
  };

  const contents = content.map((list, index) => {
    return (
      <div className="image-list-column">
        {list.map((image) => {
          return (
            <ImageItem
              handleLike={handleLike}
              handleAdd={handleAdd}
              key={image.id}
              image={image}
              likes={likes}
              collections={collections}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </div>
    );
  });

  return (
    <div className="image-list-container">
      <div className="image-list">{contents}</div>
    </div>
  );
}

export default ImageList;

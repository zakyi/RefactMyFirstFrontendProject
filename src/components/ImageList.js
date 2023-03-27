import ImageItem from "./ImageItem";
import "./ImageList.css";
import { useSelector } from "react-redux";
import {
  setSearchTerm,
  useFetchImagesQuery,
  useFetchImageCommentsMutation,
} from "../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useImageHook } from "../hooks/useImageHook";
import { useHelperHook } from "../hooks/useHelperHook";

import { setModalVisible, setModalContent } from "../store";

function ImageList({ term }) {
  console.log("ImageList Rerender");
  const dispatch = useDispatch();
  useEffect(() => {
    if (term !== undefined) {
      dispatch(setSearchTerm(term));
      console.log(term);
    }
  }, []);
  const { searchTerm } = useSelector((state) => state.search);
  const { data, error, isLoading } = useFetchImagesQuery(searchTerm);
  const { likes, collections } = useSelector((state) => state.userData);
  const { handleAdd, handleLike } = useImageHook();

  /**
   * 获取网页宽度
   */
  let width = window.innerWidth;
  const [columns, setColumns] = useState(
    width < 746 ? 1 : width < 1024 ? 2 : width >= 1024 ? 3 : 4
  );
  /**
   * 添加节流
   */
  const { throttle } = useHelperHook();

  /**
   * 每次resize获取网页宽度，动态改变grid布局中的column
   */
  const handleChangeWidth = () => {
    width = window.innerWidth;
    console.log(width);
    setColumns(width < 746 ? 1 : width < 1024 ? 2 : width >= 1024 ? 3 : 4);
  };
  const handleChangeWidthThrottle = throttle(handleChangeWidth);

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
    console.log(
      e.target.closest(".image-buttons-container").querySelector(".image")
        .dataset
    );
    const { imageId, imagePath, imageWidth, imageHeight, imageLikecount } =
      e.target
        .closest(".image-buttons-container")
        .querySelector(".image").dataset;
    const content = {
      imageId,
      imagePath,
      imageWidth,
      imageHeight,
      imageLikecount,
    };
    console.log(content);
    dispatch(setModalContent(content));
    dispatch(setModalVisible(true));
  };

  const contents = content.map((list, index) => {
    return (
      <div className="image-list-column" key={`image-list-column-${index}}`}>
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

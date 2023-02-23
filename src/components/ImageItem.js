import "./ImageItem.css";
import Button from "./Button";
import { useSelector } from "react-redux";
import Link from "./Link";
import { useState, useRef } from "react";
import { useHelperHook } from "../hooks/useHelperHook";

function ImageItem({
  image,
  handleLike,
  handleAdd,
  likes,
  collections,
  onOpenModal,
}) {
  const { isLoggedIn } = useSelector((state) => state.userData);
  const [isInView, setIsInview] = useState(false);
  const imgRef = useRef();
  const { useIntersection } = useHelperHook();

  const checkLiked = () => {
    return likes.includes(image.id) ? "liked" : "";
  };

  const checkAdded = () => {
    return collections.includes(image.id) ? "added" : "";
  };

  console.log(imgRef);
  useIntersection(imgRef, () => {
    setIsInview(true);
  });

  /**
   * 懒加载相关，图片不在视野内就移除背景padding
   */
  const containerStyle = isInView
    ? {}
    : { paddingBottom: `${+((image.height / image.width) * 100)}%` };
  return (
    <div ref={imgRef} className="image-container" style={containerStyle}>
      {isInView && (
        <div>
          <img
            data-image-id={image.id}
            data-image-path={image.path}
            className="image"
            src={image.path}
            alt="img"
          />
          <div className="image-overlay" onClick={onOpenModal}>
            <Button
              handleClick={handleLike}
              type="secondary"
              decoration="rounded"
            >
              {isLoggedIn ? (
                <p className={checkLiked()}>❤ Like</p>
              ) : (
                <Link classes="login-link" label="❤ Like" path="/login" />
              )}
            </Button>
            <Button
              handleClick={handleAdd}
              type="secondary"
              decoration="rounded"
            >
              {isLoggedIn ? (
                <p className={checkAdded()}>+ Add</p>
              ) : (
                <Link classes="login-link" label="+ Add" path="/login" />
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageItem;

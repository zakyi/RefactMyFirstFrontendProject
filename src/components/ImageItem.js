import "./ImageItem.css";
import Button from "./Button";
import { useSelector } from "react-redux";
import Link from "./Link";

function ImageItem({ image, handleLike, handleAdd, likes, collections }) {
  const { isLoggedIn } = useSelector((state) => state.userData);

  const checkLiked = () => {
    return likes.includes(image.id) ? "liked" : "";
  };

  const checkAdded = () => {
    return collections.includes(image.id) ? "added" : "";
  };

  return (
    <div className="image-container">
      <img data-image-id={image.id} className="image" src={image.path} />

      <div className="image-overlay">
        <Button handleClick={handleLike} type="secondary" decoration="rounded">
          {isLoggedIn ? (
            <p className={checkLiked()}>❤ Like</p>
          ) : (
            <Link classes="login-link" label="❤ Like" path="/login" />
          )}
        </Button>
        <Button handleClick={handleAdd} type="secondary" decoration="rounded">
          {isLoggedIn ? (
            <p className={checkAdded()}>+ Add</p>
          ) : (
            <Link classes="login-link" label="+ Add" path="/login" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default ImageItem;

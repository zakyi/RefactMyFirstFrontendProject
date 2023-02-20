import "./ImageItem.css";
import Button from "./Button";
import { useSelector } from "react-redux";
import Link from "./Link";

function ImageItem({ image }) {
  const handleOnMouseOver = () => {};
  const { isLoggedIn } = useSelector((state) => state.users);

  return (
    <div className="image-container">
      <img className="image" onMouseOver={handleOnMouseOver} src={image.path} />

      <div className="image-overlay">
        <Button type="secondary" decoration="rounded">
          {isLoggedIn ? (
            "❤ Like"
          ) : (
            <Link classes="login-link" label="❤ Like" path="/login" />
          )}
        </Button>
        <Button type="secondary" decoration="rounded">
          {isLoggedIn ? (
            "+ Add"
          ) : (
            <Link classes="login-link" label="+ Add" path="/login" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default ImageItem;

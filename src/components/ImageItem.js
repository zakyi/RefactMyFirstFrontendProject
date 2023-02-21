import "./ImageItem.css";
import Button from "./Button";
import { useSelector } from "react-redux";
import Link from "./Link";
import { useValidationHook } from "../hooks/useValidationHook";

function ImageItem({ image }) {
  const handleOnMouseOver = () => {};
  const { isLoggedIn, token } = useSelector((state) => state.userData);
  const { verifyUserToken, verifyResult } = useValidationHook();

  const handleLike = () => {
    if (!isLoggedIn) return;
    verifyUserToken(token, "like");
    //TODO
    if (verifyResult === true) {
    } else {
    }
  };

  const handleAdd = () => {
    if (!isLoggedIn) return;
    verifyUserToken(token, "add");
    //TODO
    if (verifyResult === true) {
    } else {
    }
  };

  return (
    <div className="image-container">
      <img className="image" onMouseOver={handleOnMouseOver} src={image.path} />

      <div className="image-overlay">
        <Button handleClick={handleLike} type="secondary" decoration="rounded">
          {isLoggedIn ? (
            "❤ Like"
          ) : (
            <Link classes="login-link" label="❤ Like" path="/login" />
          )}
        </Button>
        <Button handleClick={handleAdd} type="secondary" decoration="rounded">
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

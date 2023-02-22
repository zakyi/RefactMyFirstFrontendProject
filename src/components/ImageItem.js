import "./ImageItem.css";
import Button from "./Button";
import { useSelector } from "react-redux";
import Link from "./Link";
import { useValidationHook } from "../hooks/useValidationHook";
import { useState, useEffect } from "react";

function ImageItem({ image }) {
  const handleOnMouseOver = () => {};
  const { isLoggedIn, token } = useSelector((state) => state.userData);
  const { verifyUserToken, verifyResult, setVerifyResult } =
    useValidationHook();
  const [type, setType] = useState("");

  useEffect(() => {
    if (verifyResult === true && type === "like") {
      console.log("Send like post");
    }
    if (verifyResult === true && type === "add") {
      console.log("Send add post");
    }

    return () => setVerifyResult(false);
  }, [verifyResult]);

  const handleLike = () => {
    if (!isLoggedIn) return;
    setType("like");
    verifyUserToken(token, "like");
  };

  const handleAdd = () => {
    if (!isLoggedIn) return;
    setType("add");
    verifyUserToken(token, "add");
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

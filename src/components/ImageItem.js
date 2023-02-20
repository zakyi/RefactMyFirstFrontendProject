import "./ImageItem.css";
import { useState } from "react";
import Button from "./Button";

function ImageItem({ image }) {
  const [isOnMouse, setIsOnMouse] = useState(false);

  const handleOnMouseOver = () => {};

  return (
    <div className="image-container">
      <img className="image" onMouseOver={handleOnMouseOver} src={image.path} />
      <div className="image-overlay">
        <Button type="secondary" decoration="rounded">
          + Like
        </Button>
        <Button type="secondary" decoration="rounded">
          + Add
        </Button>
      </div>
    </div>
  );
}

export default ImageItem;

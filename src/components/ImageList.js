import ImageItem from "./ImageItem";
import "./ImageList.css";
import { useSelector } from "react-redux";
import { useFetchImagesQuery } from "../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function ImageList() {
  const { searchTerm } = useSelector((state) => state.search);
  console.log(searchTerm);
  const { data, error, isLoading } = useFetchImagesQuery(searchTerm);

  let width = window.innerWidth;

  const [columns, setColumns] = useState(
    width < 746 ? 1 : width < 1024 ? 2 : width >= 1024 ? 3 : 4
  );

  const handleChangeWidth = () => {
    width = window.innerWidth;
    setColumns(width < 746 ? 1 : width < 1024 ? 2 : width >= 1024 ? 3 : 4);
  };

  useEffect(() => {
    window.addEventListener("resize", handleChangeWidth);

    return () => window.removeEventListener("resize", handleChangeWidth);
  }, []);

  if (!data) return;

  let results = Array.from(data.results);
  const content = [];

  for (let i = 0; i < columns; i++) {
    const deleteCount = parseInt(results.length / (columns - i));
    content.push(results.splice(0, deleteCount));
  }

  const contents = content.map((list, index) => {
    return (
      <div className="image-list-column">
        {list.map((image) => {
          return <ImageItem key={image.id} image={image} />;
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

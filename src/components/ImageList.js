import ImageItem from "./ImageItem";
import "./ImageList.css";
import { useSelector } from "react-redux";
import { useFetchImagesQuery } from "../store";

function ImageList() {
  const { searchTerm } = useSelector((state) => state.search);
  const { data, error, isLoading } = useFetchImagesQuery(searchTerm);

  if (!data) return;
  console.log(document.body.clientWidth);

  const content = data.results.map((image) => {
    return <ImageItem key={image.id} image={image} />;
  });

  return <div className="image-list">{content}</div>;
}

export default ImageList;

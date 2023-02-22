import ImageItem from "./ImageItem";
import "./ImageList.css";
import { useSelector } from "react-redux";
import { useFetchImagesQuery } from "../store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useUserActionMutation } from "../store";
import { setUserData, getUserData } from "../store";

function ImageList() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.search);
  const { data, error, isLoading } = useFetchImagesQuery(searchTerm);
  const [type, setType] = useState("");
  const [imageId, setImageId] = useState("");
  const [sendUserAction, sendUserActionResults] = useUserActionMutation();

  const { isLoggedIn, token, email, likes, collections } = useSelector(
    (state) => state.userData
  );

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

  useEffect(() => {
    if (imageId !== "" && type !== "") {
      sendUserAction({ imageId, userEmail: email, token, type });
    }
    console.log(imageId, type);
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
          return (
            <ImageItem
              handleLike={handleLike}
              handleAdd={handleAdd}
              key={image.id}
              image={image}
              likes={likes}
              collections={collections}
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

import ImageList from "./ImageList";
import { useSelector } from "react-redux";

function SearchResult() {
  const { searchTrigger } = useSelector((state) => state.search);
  console.log(searchTrigger);

  return <div>{searchTrigger && <ImageList />}</div>;
}

export default SearchResult;

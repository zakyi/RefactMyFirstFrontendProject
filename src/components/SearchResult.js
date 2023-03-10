import ImageList from "./ImageList";
import { useSelector } from "react-redux";

function SearchResult() {
  const { searchTrigger } = useSelector((state) => state.search);

  return <div>{searchTrigger && <ImageList />}</div>;
}

export default SearchResult;

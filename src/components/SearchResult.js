import ImageList from "./ImageList";
import { useSelector } from "react-redux";

function SearchResult({ term }) {
  return (
    <div>
      <ImageList term={term} />
    </div>
  );
}

export default SearchResult;

import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import ImageList from "../components/ImageList";
import NaturePageBanner from "../assets/NaturePageBanner.jpg";
import SearchResult from "../components/SearchResult";

function NaturePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Nature">
        <img className="banner-image" src={NaturePageBanner} />
      </MainImage>
      <SearchResult term="nature" />
    </div>
  );
}

export default NaturePage;

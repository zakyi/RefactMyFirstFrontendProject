import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import SearchResult from "../components/SearchResult";
import NaturePageBanner from "../assets/NaturePageBanner.jpg";

function NaturePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Nature">
        <img className="banner-image" src={NaturePageBanner} />
      </MainImage>
      <SearchResult />
    </div>
  );
}

export default NaturePage;

import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import SearchResult from "../components/SearchResult";
import CulturePageBanner from "../assets/CulturePageBanner.jpg";

function CulturePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Culture">
        <img className="banner-image" src={CulturePageBanner} />
      </MainImage>
      <SearchResult />
    </div>
  );
}

export default CulturePage;

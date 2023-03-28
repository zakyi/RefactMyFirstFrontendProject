import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import ImageList from "../components/ImageList";
import CulturePageBanner from "../assets/CulturePageBanner.jpg";
import SearchResult from "../components/SearchResult";

function CulturePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Culture">
        <img className="banner-image" src={CulturePageBanner} />
      </MainImage>

      <SearchResult term="culture" />
    </div>
  );
}

export default CulturePage;

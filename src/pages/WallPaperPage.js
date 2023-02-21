import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import SearchResult from "../components/SearchResult";
import WallPaperPageBanner from "../assets/WallPaperPageBanner.jpg";

function WallPaperPage() {
  return (
    <div>
      <Navigator />
      <MainImage title="WallPaper">
        <img className="banner-image" src={WallPaperPageBanner} />
      </MainImage>
      <SearchResult />
    </div>
  );
}

export default WallPaperPage;

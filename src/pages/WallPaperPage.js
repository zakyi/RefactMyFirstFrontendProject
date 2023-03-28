import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import ImageList from "../components/ImageList";
import WallPaperPageBanner from "../assets/WallPaperPageBanner.jpg";
import SearchResult from "../components/SearchResult";

function WallPaperPage() {
  return (
    <div>
      <Navigator />
      <MainImage title="WallPaper">
        <img className="banner-image" src={WallPaperPageBanner} />
      </MainImage>
      <SearchResult term="wallpaper" />
    </div>
  );
}

export default WallPaperPage;

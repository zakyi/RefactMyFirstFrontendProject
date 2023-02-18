import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import ImageList from "../components/ImageList";
import WallPaperPageBanner from "../assets/WallPaperPageBanner.jpg";

function WallPaperPage() {
  return (
    <div>
      <Navigator />
      <MainImage title="WallPaper">
        <img className="banner-image" src={WallPaperPageBanner} />
      </MainImage>
      <ImageList />
    </div>
  );
}

export default WallPaperPage;

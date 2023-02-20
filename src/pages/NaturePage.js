import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import ImageList from "../components/ImageList";
import NaturePageBanner from "../assets/NaturePageBanner.jpg";

function NaturePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Nature">
        <img className="banner-image" src={NaturePageBanner} />
      </MainImage>
      <ImageList term="nature" />
    </div>
  );
}

export default NaturePage;

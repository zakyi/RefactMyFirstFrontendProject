import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import ImageList from "../components/ImageList";
import CulturePageBanner from "../assets/CulturePageBanner.jpg";

function CulturePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Culture">
        <img className="banner-image" src={CulturePageBanner} />
      </MainImage>
      <ImageList key="culturePage" term="culture" />
    </div>
  );
}

export default CulturePage;

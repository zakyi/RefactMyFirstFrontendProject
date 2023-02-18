import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import ImageList from "../components/ImageList";
import HomeImage from "../assets/HomeImage.jpg";

function MainPage() {
  return (
    <div>
      <Navigator />
      <MainImage title="SuperSplash">
        <img className="banner-image" src={HomeImage} />
      </MainImage>
      <ImageList />
    </div>
  );
}

export default MainPage;

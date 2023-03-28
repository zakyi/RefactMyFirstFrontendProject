import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import SearchResult from "../components/SearchResult";
import HomeImage from "../assets/HomeImage.jpg";

function MainPage() {
  return (
    <div>
      <Navigator />
      <MainImage title="SuperSplash">
        <img className="banner-image" src={HomeImage} />
      </MainImage>
      <SearchResult term="anime" />
    </div>
  );
}

export default MainPage;

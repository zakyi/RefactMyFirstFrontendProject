import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import ImageList from "../components/ImageList";
import AnimePageBanner from "../assets/AnimePageBanner.jpg";

function AnimePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Anime">
        <img className="banner-image" src={AnimePageBanner} />
      </MainImage>
      <ImageList term="anime" />
    </div>
  );
}

export default AnimePage;

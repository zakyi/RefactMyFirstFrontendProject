import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import AnimePageBanner from "../assets/AnimePageBanner.jpg";
import ImageList from "../components/ImageList";

function AnimePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Anime">
        <img className="banner-image" src={AnimePageBanner} />
      </MainImage>
      <ImageList key="animePage" term="anime" />
    </div>
  );
}

export default AnimePage;

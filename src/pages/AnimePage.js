import Navigator from "../components/Navigator";
import MainImage from "../components/MainImage";
import AnimePageBanner from "../assets/AnimePageBanner.jpg";
import ImageList from "../components/ImageList";
import SearchResult from "../components/SearchResult";

function AnimePage() {
  return (
    <div>
      <Navigator />
      <MainImage title="Anime">
        <img className="banner-image" src={AnimePageBanner} />
      </MainImage>
      <SearchResult term="anime" />
    </div>
  );
}

export default AnimePage;

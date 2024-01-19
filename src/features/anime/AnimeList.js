import { useSelector } from "react-redux";
import { selectAllAnime, getAnimeStatus, getAnimeError } from "./animeSlice";
import AnimeExcerpt from "./AnimeExcerpt";

const AnimeList = () => {
  const animePosts = useSelector(selectAllAnime);
  const animeStatus = useSelector(getAnimeStatus);
  const animeError = useSelector(getAnimeError);
 

  

  if (animeStatus === "loading") {
    return <h2>Loading...</h2>;
  }
  if (animeStatus === "failed") {
    return <p>{animeError}</p>;
  }

  
return <section>{animePosts.map(anime => <AnimeExcerpt key={anime.id} anime={anime}/> )}</section>;
};
export default AnimeList;

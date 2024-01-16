import { useSelector } from "react-redux";
import { selectAllAnime, getAnimeStatus, getAnimeError } from "./animeSlice";
import AnimeExcerpt from "./AnimeExcerpt";

const AnimeList = () =>{
    const animePosts = useSelector(selectAllAnime);
    const animeStatus = useSelector(getAnimeStatus);
    const animeError = useSelector(getAnimeError);
   console.log(animePosts)

    let content;

    if (animeStatus === "loading"){
        content = <p>Loading...</p>;
    }else if (animeStatus === "succeeded"){
        content = animePosts.map(animeId => <AnimeExcerpt key={animeId} animeId={animeId}/>)
    }else if(animeStatus === "failed"){
        content = <p>{animeError}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}
export default AnimeList
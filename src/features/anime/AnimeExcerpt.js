import {  useSelector } from "react-redux";
import {  selectAllAnime, selectAnimeById } from "./animeSlice";



const AnimeExcerpt = ({animeId}) => {
//    const anime = useSelector(state => selectAnimeById(state, animeId));
   const anime = useSelector(selectAllAnime);
   
    if (!anime){
        return <h2>Couldnt find anime</h2>
    }
    return (
       <article>
            <h2 >{anime.name}</h2>
            <p>{anime.aired_on}</p>
        </article>
       
    )
}

export default AnimeExcerpt
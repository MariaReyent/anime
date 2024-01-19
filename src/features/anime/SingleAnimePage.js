import {useSelector } from "react-redux";
import { selectAnimeById } from "./animeSlice";
import { useParams } from "react-router-dom";

const SingleAnimePage = () => {
    const {id} = useParams();
    console.log("USE PARAMS:", id)
    const anime = useSelector((state) => selectAnimeById(state, Number(id)));

    if(!anime){
        return (
            <section>
                <h2>No Anime available</h2>
            </section>
        )
    }

    return (
        <article>
            <h3>{anime.name}</h3>
        </article>
    )
}

export default SingleAnimePage
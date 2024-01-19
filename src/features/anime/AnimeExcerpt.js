import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const AnimeExcerpt = ({anime}) => {
  const {id} = useParams();
  
  if (!anime){
        return <h2>Couldnt find anime</h2>
    }
  
   
    const imageUrl =anime.image.original;

    return (
       <article>
        <img src={imageUrl} alt={anime.name} />
            <h2>{anime.name}</h2>
            <p>{anime.aired_on}</p>
            <Link to= { `/animes/${id}`}>View Anime</Link>
        </article>
       
    )
}

export default AnimeExcerpt
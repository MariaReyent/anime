import AnimeList from "./features/anime/AnimeList";
import { Routes, Route } from "react-router-dom";
import SingleAnimePage from "./features/anime/SingleAnimePage";

function App() {
  return (
    <Routes>
       <Route path="/" element= {<AnimeList/>}/>
       <Route path="/animes/:id" element={<SingleAnimePage/>}/>
    </Routes>
   
  );
}

export default App;

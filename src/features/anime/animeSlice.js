import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const ANIME_URL = `https://shikimori.one/api/animes?page=1&limit=2`;


const initialState = {
    animes: [],
    status: "idle",
    error: null,
}

export const fetchAnime = createAsyncThunk("anime/fetchAnime", async()=>{
   
    try{
        const response = await axios.get(ANIME_URL);
        const data = await response.data;
        return data;
    }catch(error){
        console.log(error);
        }
});


const animeSlice = createSlice({
    name: "animes",
    initialState,
    reducers: {
        animeAdded: {
            reducer(state, action) {
                state.animes.push(action.payload)
        },
    },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAnime.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAnime.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.animes = action.payload;
            })
            .addCase(fetchAnime.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
})

export const selectAllAnime = (state) => {
    return state.animes.animes

};
export const selectAnimeById = (state, id) => state.animes.animes.find(anime => anime.id === id);


export const getAnimeStatus = (state) => state.animes.status;
export const getAnimeError = (state) => state.animes.error;


export default animeSlice.reducer;
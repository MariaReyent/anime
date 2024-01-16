import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ANIME_URL = "https://shikimori.one/api/animes";


const initialState = {
    status: "idle",
    error: null,
}

export const fetchAnime = createAsyncThunk("anime/fetchAnime", async()=>{
   
    try{
        const response = await axios.get(ANIME_URL);
        return response.data;
    }catch(error){
        console.log(error);
        }
});


const animeSlice = createSlice({
    name: "anime",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAnime.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAnime.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchAnime.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const selectAllAnime = state => state.animes.data;
export const selectAnimeById = (state, animeId) => state.animes.data.find(anime => anime.id === animeId);

export const getAnimeStatus = state => state.animes.status;
export const getAnimeError = state => state.animes.error;


export default animeSlice.reducer;
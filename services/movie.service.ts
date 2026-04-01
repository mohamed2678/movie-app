import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getTrendingMovies = async () => {
const res = await api.get("/trending/movie/day", {
  params: {
    api_key: API_KEY,
  },
});


return res.data.results;
};

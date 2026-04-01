import axios  from "axios";

const API_KEY = "YOUR_API_KEY";

const api = axios .create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getTrendingMovies = async () => {
  const res = await api.get(`/trending/movie/day?api_key=${API_KEY}`);
  return res.data.results;
};
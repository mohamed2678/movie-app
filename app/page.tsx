"use client";
import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies  } from "@/services/movie.service";
import  MovieCard from "@/components/MovieCard";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: getTrendingMovies,
  });

  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 p-4">
      {data?.map((movie: any ) =>(
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
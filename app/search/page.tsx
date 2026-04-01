"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "@/services/movie.service";
import MovieCard from "@/components/MovieCard";

export default function searchPage() {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovies(query),
    enabled: !!query,
  });

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* input */}
      <input
        type="text"
        placeholder="search for a movie...."
        className="w-full p-3 bg-gray-800 mb-6 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Loading */}
      {isLoading && <p>Loading...</p>}

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.length > 0 ? (
          data.map((movie: any) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
}

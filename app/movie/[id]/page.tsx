import { getMovieDetails } from "@/services/movie.service";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function MovieDetailsPage({ params }: Props) {
  const { id } = (await params) as { id: string };
  const movie = await getMovieDetails(id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl mx-auto">Movie not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <div className="w-full md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-lg"
          />
        </div>
        {/* Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="mt-4 text-gray-300 leading-relaxed">{movie.overview}</p>
          <div className="mt-4 space-y-2">
            <p>⭐ Rating: {movie.vote_average}</p>
            <p>📅 Release Date: {movie.release_date}</p>
            <p>⏱ Runtime: {movie.runtime} min</p>
          </div>
        </div>
      </div>
    </div>
  );
}

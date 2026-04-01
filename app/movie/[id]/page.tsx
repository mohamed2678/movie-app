import { getMovieDetails, getMovieCredits, getMovieVideos } from "@/services/movie.service";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function MovieDetailsPage({ params }: Props) {
  console.log("PARAMS:", params);
  const { id } = await params;
  const movie = await getMovieDetails(id);
    const cast = await getMovieCredits(id);
  const videos = await getMovieVideos(id);

  const castList = Array.isArray(cast) ? cast : [];
  const videosList = Array.isArray(videos) ? videos : [];

  const trailer = videosList.find(
    (video: any) => video.type === "Trailer" && video.site === "YouTube"
  );


  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl mx-auto">Movie not found.</div>
      </div>
    );
  }

  return (
<div className="min-h-screen bg-black text-white p-6">
  <div className="max-w-5xl mx-auto">

    {/* 🔥 Top Section */}
    <div className="flex flex-col md:flex-row gap-6">
      
      {/* Poster */}
      <div className="w-full md:w-1/3">
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/no-image.png"
          }
          alt={movie.title || "Poster"}
          width={300}
          height={450}
          className="rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="mt-4 text-gray-300 leading-relaxed">
          {movie.overview}
        </p>

        <div className="mt-4 space-y-2">
          <p>⭐ Rating: {movie.vote_average}</p>
          <p>📅 Release Date: {movie.release_date}</p>
          <p>⏱ Runtime: {movie.runtime} min</p>
        </div>
      </div>

    </div>

    {/* 🎬 Trailer */}
    {trailer && (
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Trailer</h2>

        <div className="w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer"
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
      </div>
    )}

    {/* 👨‍🎤 Cast */}
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Cast</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {castList.slice(0, 10).map((actor: any, i: number) => (
          <div key={actor?.id ?? i} className="text-center">
            <Image
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "/no-image.png"
              }
              alt={actor.name}
              width={200}
              height={300}
              className="rounded-lg mb-2 mx-auto"
            />
            <p className="text-sm">{actor.name}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  );
}

import Image from "next/image";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};
type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full  object-cover"
        width={500}
        height={750}
      />
      <div className="p-2">
        <h2 className="text-white text-sm font-semibold">{movie.title}</h2>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white p-6 animate-pulse">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* Poster Skeleton */}
        <div className="w-full md:w-1/3">
          <div className="w-full h-[450px] bg-gray-700 rounded-lg" />
        </div>

        {/* Details Skeleton */}
        <div className="flex-1">
          
          {/* Title */}
          <div className="h-10 bg-gray-700 rounded w-2/3 mb-4" />

          {/* Overview */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-5/6" />
            <div className="h-4 bg-gray-700 rounded w-4/6" />
          </div>

          {/* Info */}
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-700 rounded w-1/3" />
            <div className="h-4 bg-gray-700 rounded w-1/4" />
            <div className="h-4 bg-gray-700 rounded w-1/5" />
          </div>

        </div>
      </div>
    </div>
  );
}
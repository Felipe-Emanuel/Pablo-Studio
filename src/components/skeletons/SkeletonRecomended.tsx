export function SkeletonRecomended() {
  return (
    <div
      className="
      p-1 md:p-3 rounded-md mb-4 bg-placeholder flex flex-col relative
      w-32 md:w-72 h-fit overflow-hidden"
    >
      <div className="w-full h-20 md:h-56 mb-3 bg-gray-400 rounded-md" />
      <div
        className="justify-between flex flex-col
        before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
        before:from-transparent before:via-white/25 hover:shadow-lg
        before:animate-[shimmer_2s_infinite]"
      >
        <div className="mb-5">
          <div className="h-1 md:h-4 w-4/5 bg-gray-400 rounded-md mb-1" />
          <div className="h-1 md:h-4 w-5/5 bg-gray-400 rounded-md mb-1" />
          <div className="h-1 md:h-4 w-3/5 bg-gray-400 rounded-md mb-1" />
          <div className="h-1 md:h-4 w-4/5 bg-gray-400 rounded-md" />
        </div>

        <div>
          <div className="h-5 md:h-10 w-2/5 bg-gray-400 rounded-md mb-1" />
          <div className="h-1 md:h-4 w-3/5 bg-gray-400 rounded-md" />
        </div>
      </div>
    </div>
  );
}

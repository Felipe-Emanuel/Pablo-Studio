export function SkeletonProductCart() {
  return (
    <div
      className="
      p-3 rounded-md mb-4 bg-placeholder flex relative
      w-full h-fit justify-between overflow-hidden"
    >
      <div className="w-52 h-60 bg-gray-400 rounded-md" />
      <div className="w-3/5 h-full py-4 px-3 justify-between flex flex-col
        before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r
        before:from-transparent before:via-white/25 hover:shadow-lg
        before:animate-[shimmer_2s_infinite]"
      >
        <div className="h-4 w-1/3 bg-gray-400 rounded-md mb-5" />
        <div>
          <div className="h-4 w-3/3 bg-gray-400 rounded-md mb-1" />
          <div className="h-4 w-2/3 bg-gray-400 rounded-md mb-1" />
          <div className="h-4 w-2/4 bg-gray-400 rounded-md mb-1" />
          <div className="h-4 w-3/5 bg-gray-400 rounded-md mb-10" />
        </div>
        <div>
          <div className="h-4 w-2/4 bg-gray-400 rounded-md mb-1" />
          <div className="h-4 w-10/12 bg-gray-400 rounded-md" />
        </div>
      </div>
      <div className="py-4 px-3 w-1/3 h-full flex flex-col justify-evenly">
        <div className="flex flex-col items-end">
          <div className="h-4 w-2/3 bg-gray-400 rounded-md mb-1" />
          <div className="h-4 w-1/4 bg-gray-400 rounded-md mb-1" />
        </div>
        <div className="flex items-end justify-end">
          <div className="w-32 flex flex-col">
            <div className="h-4 w-3/3 bg-gray-400 rounded-md mb-1" />
              <div className="flex w-28 m-auto justify-between">
                <div className="h-4 w-6 bg-gray-400 rounded-md my-2" />
                <div className="h-4 w-6 bg-gray-400 rounded-md my-2" />
                <div className="h-4 w-6 bg-gray-400 rounded-md my-2" />
              </div>
              <div className="h-4 w-2/3 m-auto bg-gray-400 rounded-md mb-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

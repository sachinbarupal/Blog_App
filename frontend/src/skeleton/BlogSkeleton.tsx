export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b border-slate-400 pb-4 w-screen max-w-sm md:w-screen md:max-w-lg ">
        <div className="flex items-center ">
          <div className="h-4 w-4 bg-gray-200 rounded-full  mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

          <div className="pl-2">
            <div className=" h-1 w-1 rounded-full bg-slate-500"></div>
          </div>
          <div className=" pl-2 font-thin text-slate-400 text-sm">
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>
        </div>

        <div className=" text-xl font-semibold pt-2">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="text-base font-thin">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>

        <div className=" text-slate-400 text-sm font-medium pt-4">
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

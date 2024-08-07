import { useParams } from "react-router-dom";
import { useBlog } from "./useBlog";
import { AppBar } from "../../containers/AppBar";
import { Avatar } from "../../components/Avatar";
import { Spinner } from "../../components/Spinner";

export const Blog = () => {
  const { id } = useParams();
  const { isLoading, blog } = useBlog(id || "");

  return (
    <div className="h-screen flex flex-col">
      <AppBar />
      {isLoading || !blog ? (
        <div className="flex flex-grow justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
            <div className="col-span-8">
              <div className="text-5xl font-extrabold">{blog.title}</div>
              <div className=" text-slate-500 pt-2">
                Post on 2nd December 2023
              </div>
              <div className=" pt-4">{blog.content}</div>
            </div>
            <div className="  col-span-4">
              <div className="text-slate-600 text-lg">Author</div>
              <div className="flex w-full">
                <div className="pr-4 flex flex-col justify-center">
                  <Avatar size="medium" name={blog.author.username} />
                </div>
                <div>
                  <div className="text-xl font-bold">
                    {blog.author.username}
                  </div>
                  <div className="pt-2 text-slate-500">
                    Random catch phrase about the author's ability to grab the
                    user's attention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

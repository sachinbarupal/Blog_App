import { AppBar } from "../../containers/AppBar";
import { BlogCard } from "../../containers/BlogCard";
import { useBlogs } from "./useBlogs";

export function Blogs() {
  const { isLoading, blogs } = useBlogs();

  return (
    <>
      <AppBar />
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div className="flex justify-center ">
          <div className="max-w-xl">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

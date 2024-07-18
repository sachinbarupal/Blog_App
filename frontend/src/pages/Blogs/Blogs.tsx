import { AppBar } from "../../containers/AppBar";
import { BlogCard } from "../../containers/BlogCard";
import { BlogSkeleton } from "../../skeleton/BlogSkeleton";
import { useBlogs } from "./useBlogs";

export function Blogs() {
  const { isLoading, blogs } = useBlogs();

  return (
    <>
      <AppBar />
      {isLoading ? (
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
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

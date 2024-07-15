import { AppBar } from "../../containers/AppBar";
import { BlogCard } from "../../containers/BlogCard";
import { useBlogs } from "./useBlogs";

export function Blogs() {
  const { isLoading, blogs } = useBlogs();

  if (isLoading) return;
  return (
    <div>
      <AppBar />
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div className="flex justify-center ">
          <div className="max-w-xl w-1/2">
            {blogs.map((blog) => (
              <BlogCard
                authorName={blog.author.username}
                title={blog.title}
                content={blog.content}
                publishedDate="23 Dec, 23"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

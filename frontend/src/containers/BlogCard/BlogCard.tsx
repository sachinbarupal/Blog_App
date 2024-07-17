import { Link } from "react-router-dom";
import { Avatar } from "../../components/Avatar";
import { blogItem } from "../../types";

interface Prop {
  blog: blogItem;
}

export const BlogCard = ({ blog }: Prop) => {
  const { id, author, content, title } = blog;
  const publishedDate = "23 Dec, 2023";
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-400 pb-4 w-screen max-w-sm md:w-screen md:max-w-lg ">
        <div className="flex items-center ">
          <Avatar name={author.username} />
          <div className="font-extralight pl-2 text-xl">{author.username} </div>
          <div className="pl-2">
            <div className=" h-1 w-1 rounded-full bg-slate-500"></div>
          </div>
          <div className=" pl-2 font-thin text-slate-400 text-sm">
            {publishedDate}
          </div>
        </div>

        <div className=" text-xl font-semibold pt-2">{title}</div>
        <div className="text-base font-thin">
          {content.slice(0, 100) + (content.length > 100 ? "..." : "")}
        </div>

        <div className=" text-slate-400 text-sm font-medium pt-4">
          {Math.ceil(content.length / 100)} minute(s) read
        </div>
      </div>
    </Link>
  );
};
